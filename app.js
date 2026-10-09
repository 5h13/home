/* 5H13 landing page — builds products, menu, pricing, partners, store and
   contact sections from site-data.js. You normally don't need to edit this. */

(function () {
  document.documentElement.classList.add('js');

  var data = window.SITE_DATA || {};
  var products = data.products || [];

  var STATUS = {
    free:    { text: 'Free',         cls: 'badge-green' },
    promo:   { text: 'Free (Promo)', cls: 'badge-green' },
    premium: { text: 'Premium',      cls: 'badge-gold'  },
    'new':   { text: 'New',          cls: 'badge-blue'  },
    soon:    { text: 'Coming soon',  cls: 'badge-grey'  }
  };

  // Small helper to build elements safely (text is never treated as HTML)
  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (key) {
      if (key === 'className') node.className = props[key];
      else if (key === 'text') node.textContent = props[key];
      else node.setAttribute(key, props[key]);
    });
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  function isLive(p) { return p.status !== 'soon' && p.url; }

  function link(url, props, children) {
    props = props || {};
    props.href = url;
    if (/^https?:\/\//.test(url) && url.indexOf(location.host) === -1) {
      props.target = '_blank';
      props.rel = 'noopener noreferrer';
    }
    return el('a', props, children);
  }

  function badge(status) {
    var s = STATUS[status];
    return s ? el('span', { className: 'badge ' + s.cls, text: s.text }) : null;
  }

  function byId(id) { return document.getElementById(id); }

  /* ---- Menu: product links go between "Products" and "Pricing" ---- */
  var nav = byId('main-nav');
  var pricingLink = nav.querySelector('a[href="#pricing"]');
  products.filter(function (p) { return p.showInNav && isLive(p); }).forEach(function (p) {
    nav.insertBefore(link(p.url, { text: p.navLabel || p.name }), pricingLink);
  });

  /* ---- Hero buttons ---- */
  var hero = byId('hero-actions');
  products.filter(function (p) { return p.showInHero && isLive(p); }).forEach(function (p, i) {
    hero.appendChild(link(p.url, {
      className: 'btn ' + (i === 0 ? 'btn-primary' : 'btn-secondary'),
      text: p.buttonText || p.name
    }));
  });

  /* ---- Product cards ---- */
  var grid = byId('product-grid');
  products.forEach(function (p) {
    var live = isLive(p);
    grid.appendChild(el('article', { className: 'product-card' + (live ? '' : ' is-soon') }, [
      p.category ? el('span', { className: 'product-category', text: p.category }) : null,
      el('div', { className: 'product-head' }, [
        el('h3', { text: p.name }),
        badge(live || p.status === 'soon' ? p.status : 'soon')
      ]),
      el('p', { text: p.description || '' }),
      live ? link(p.url, { className: 'btn btn-secondary btn-small', text: p.buttonText || 'Open' }) : null
    ]));
  });

  /* ---- Pricing cards ---- */
  var pricing = byId('pricing-grid');
  products.filter(function (p) { return p.showInPricing && isLive(p); }).forEach(function (p) {
    pricing.appendChild(el('div', { className: 'pricing-card' + (p.featured ? ' featured' : '') }, [
      el('h3', { text: p.name }),
      el('div', { className: 'pricing-price', text: p.price || 'Free' }),
      p.priceNote ? el('div', { className: 'pricing-note', text: p.priceNote }) : null,
      link(p.url, { className: 'btn btn-' + (p.featured ? 'primary' : 'secondary') + ' btn-small', text: p.status === 'premium' ? 'Get access' : 'Use it free' })
    ]));
  });

  /* ---- Sponsored links ---- */
  var sponsored = (data.sponsored || []).filter(function (s) { return s && s.url; });
  if (data.showSponsored !== false && sponsored.length) {
    byId('sponsored').hidden = false;
    var sGrid = byId('sponsored-grid');
    sponsored.forEach(function (s) {
      var a = link(s.url, { className: 'sponsored-card' }, [
        s.image ? el('img', { className: 'sponsored-img', src: s.image, alt: '' }) : null,
        el('div', { className: 'sponsored-body' }, [
          el('h3', { text: s.name }),
          s.description ? el('p', { text: s.description }) : null,
          el('span', { className: 'sponsored-cta', text: (s.buttonText || 'Learn more') + ' \u2192' })
        ])
      ]);
      a.setAttribute('rel', 'sponsored noopener noreferrer');
      sGrid.appendChild(a);
    });
  }

  /* ---- Partner bar ---- */
  var banner = byId('partners');
  (data.partners || []).forEach(function (partner) {
    banner.appendChild(link(partner.url, { 'aria-label': (partner.fullName || partner.name) + ' on Facebook' }, [
      el('span', { className: 'fb-mini-logo', 'aria-hidden': 'true', text: 'f' }),
      partner.logo ? el('img', { className: 'partner-logo', src: partner.logo, alt: '' }) : null,
      document.createTextNode(partner.name)
    ]));
  });

  /* ---- Partner store ---- */
  var store = data.store;
  var storeSection = byId('store');
  if (store && store.show) {
    storeSection.hidden = false;
    storeSection.appendChild(el('div', { className: 'store-layout' }, [
      el('div', {}, [
        el('div', { className: 'store-kicker', text: 'Marketplace partner' }),
        el('div', { className: 'store-profile' }, [
          store.logo ? el('img', { className: 'store-avatar', src: store.logo, alt: '' }) : null,
          el('h2', { text: store.title })
        ]),
        el('p', { text: store.description }),
        link(store.storeUrl, { className: 'btn btn-primary', text: store.buttonText || 'Visit store' })
      ]),
      el('div', {}, [
        el('div', { className: 'store-items' }, (store.items || []).map(function (item) {
          return link(item.url, { className: 'store-item' }, [
            document.createTextNode(item.name),
            item.price ? el('span', { text: item.price }) : null
          ]);
        })),
        el('p', { className: 'store-note', text: 'Prices may change. Check Lazada for current prices and stock.' })
      ])
    ]));
  }

  /* ---- Contact ---- */
  var contact = byId('contact-list');
  (data.contact || []).forEach(function (c) {
    contact.appendChild(el('li', {}, [
      el('span', { className: 'contact-label', text: c.label }),
      c.url ? link(c.url, { className: 'contact-value', text: c.value })
            : el('span', { className: 'contact-value', text: c.value })
    ]));
  });

  /* ---- Year ---- */
  byId('year').textContent = new Date().getFullYear();

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
})();
