/* =========================================================================
   5H13 SITE DATA
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or change
   products, prices, partner links, store items, and contact links.

   HOW TO ADD A NEW PRODUCT (example: Pera by 5H13)
   1. Copy one whole product block below — from its opening {  to its  },
   2. Paste it where you want it to appear in the list.
   3. Change the text. Keep the quotes "" and the comma at the end.
   4. Upload this file to GitHub (replace the old one).

   STATUS OPTIONS (controls the colored badge):
     "free"     → green  "Free"
     "promo"    → green  "Free (Promo)"
     "premium"  → gold   "Premium"
     "new"      → blue   "New"
     "soon"     → grey   "Coming soon"   (card shows no button)

   TIPS
   - Text must stay inside "double quotes".
   - Every block ends with a comma },  — a missing comma breaks the page.
   - To hide something without deleting it, put // at the start of each line.
   ========================================================================= */

window.SITE_DATA = {

  /* ---------------------------------------------------------------------
     PRODUCTS — shown as cards in "Our Products & Tools", in the top menu,
     in the hero buttons, and in "Pricing".
     --------------------------------------------------------------------- */
  products: [
    {
      name: "5H13 Quotation Maker",
      navLabel: "Free Quotation",       // short name for the top menu
      description: "Create clean, professional quotations in minutes. 100% free for everyone.",
      url: "https://5h13.netlify.app/",
      status: "free",
      category: "Business tools",
      price: "Free",
      priceNote: "",                    // e.g. "per month", "one-time"
      showInNav: true,
      showInHero: true,                 // first one becomes the main blue button
      showInPricing: true,
      buttonText: "Open Quotation Maker"
    },
    {
      name: "5H13 CV Maker",
      navLabel: "CV Maker",
      description: "Build a professional resume with free and Pro layouts. Pro is unlocked for free during the promo (regular price ₱60 / $1, one-time).",
      url: "https://5h13.github.io/CVmaker/",
      status: "promo",
      category: "Career tools",
      price: "Free",
      priceNote: "promo — regularly ₱60 / $1 one-time",
      showInNav: true,
      showInHero: true,
      showInPricing: true,
      buttonText: "Open CV Maker"
    },
    {
      name: "5H13 QR Scanner App",
      navLabel: "QR Scanner App",
      description: "A downloadable mobile app for Android. Scan QR codes fast with your phone camera. After downloading, open the file and allow \"Install unknown apps\" when your phone asks. Not available for iPhone.",
      url: "https://github.com/5h13/home/releases/download/QR-v1.0/5h13-qr-scanner.apk",
      status: "free",
      category: "Mobile app · Android",
      price: "Free",
      priceNote: "Android app download",
      showInNav: true,
      showInHero: false,
      showInPricing: true,
      buttonText: "Download for Android"
    },
    {
      name: "5H13 Business Suite",
      navLabel: "Business Suite",
      description: "Our premium suite: advanced quotations, Purchase Orders (P.O.), Delivery Receipts (DR), and more business documents to come.",
      url: "https://5h13.vercel.app/",
      status: "premium",
      category: "Business tools",
      price: "₱60 / $1",
      priceNote: "per month",
      showInNav: true,
      showInHero: false,
      showInPricing: true,
      featured: true,                   // highlighted card in Pricing
      buttonText: "Open Business Suite"
    },
    {
      name: "Pera by 5H13",
      navLabel: "Pera",
      description: "Financial health, simplified. A money-learning app for kids, teens and adults. Works offline, with no accounts, pop-ups, tracking or ad networks. Your data stays on your phone.",
      url: "https://5h13-pera.vercel.app/",
      status: "new",
      category: "Money learning",
      price: "",
      priceNote: "",
      showInNav: true,
      showInHero: false,
      showInPricing: false,             // set to true once you decide Pera's price
      buttonText: "Open Pera"
    },
    {
      name: "More business documents",
      navLabel: "",
      description: "Job sheets, service reports, and portfolios are on the way.",
      url: "",
      status: "soon",
      category: "Business tools",
      price: "",
      priceNote: "",
      showInNav: false,
      showInHero: false,
      showInPricing: false,
      buttonText: ""
    },

  ],

  /* ---------------------------------------------------------------------
     SPONSORED LINKS — the "Sponsored" section. Edit like products:
     copy one block { ... }, paste it, change the text, keep the comma.
     image: optional picture in the assets folder (leave "" for none).
     Set showSponsored to false to hide the whole section.
     --------------------------------------------------------------------- */
  showSponsored: true,
  sponsored: [
    {
      name: "Ishabella HVACR Supplies",
      description: "HVACR parts, tools and supplies for technicians and businesses.",
      url: "https://www.facebook.com/ishabella2021",
      image: "assets/ishabella-logo.jpg",
      buttonText: "Visit Ishabella"
    },
    {
      name: "Aton Aire Trading Corporation",
      description: "Air-conditioning and refrigeration trading for homes and businesses.",
      url: "https://www.facebook.com/aton.aire",
      image: "assets/atonaire-logo.png",
      buttonText: "Visit Aton Aire"
    },
    {
      name: "Pili-Aire Aircon & Refrigeration Parts Trading",
      description: "Car Aircon Parts, Air-conditioning and refrigeration Parts trading.",
      url: "https://www.facebook.com/Pili.Aire",
      image: "assets/piliaire-logo.png",
      buttonText: "Visit Pili-Aire"
    },
    /* --- EXAMPLE: remove the  /*  and  *\/  around this block to publish ---
    {
      name: "Sponsor name",
      description: "One or two sentences about the sponsor.",
      url: "https://sponsor-link-here/",
      image: "",
      buttonText: "Learn more"
    },
    ----------------------------------------------------------------------- */
  ],

  /* ---------------------------------------------------------------------
     PARTNERS — the "Find us on Facebook" bar under the header.
     logo: file inside the assets folder (leave "" for no logo).
     --------------------------------------------------------------------- */
  partners: [
    { name: "5H13",      fullName: "5H13 Business Solutions",        url: "https://www.facebook.com/profile.php?id=61593555743966", logo: "assets/5h13-logo.png" },
    { name: "ISHABELLA", fullName: "Ishabella HVACR Supplies",       url: "https://www.facebook.com/ishabella2021",                 logo: "assets/ishabella-logo.jpg" },
    { name: "PILI",      fullName: "Pili-Aire Parts Trading",        url: "https://www.facebook.com/pili.aire",                     logo: "assets/piliaire-logo.png" },
    { name: "ATON",      fullName: "Aton Aire Trading Corporation",  url: "https://www.facebook.com/aton.aire",                     logo: "assets/atonaire-logo.png" },
  ],

  /* ---------------------------------------------------------------------
     PARTNER STORE — the Lazada section. Set show: false to hide it.
     --------------------------------------------------------------------- */
  store: {
    show: true,
    title: "PiliAire HVACR Trading",
    description: "Browse HVACR parts, tools, and vehicle air-conditioning components from our Lazada storefront.",
    logo: "assets/piliaire-logo.png",
    storeUrl: "https://www.lazada.com.ph/shop/piliaire-hvacr-trading/",
    buttonText: "Visit PiliAire on Lazada",
    items: [
      { name: "Mitsubishi Xpander Evaporator", price: "₱2,200.00", url: "https://www.lazada.com.ph/products/pdp-i4339237918-s24342801694.html" },
      { name: "Motor Assembly",                price: "₱3,999.00", url: "https://www.lazada.com.ph/products/pdp-i4718438991-s27291936746.html" },
      { name: "Infrared Thermometer",          price: "₱1,700.00", url: "https://www.lazada.com.ph/products/pdp-i4307418388-s24182888257.html" },
      { name: "Front Evaporator",              price: "₱2,100.00", url: "https://www.lazada.com.ph/products/pdp-i2523770957-s11642871034.html" },
    ]
  },

  /* ---------------------------------------------------------------------
     CONTACT & PAYMENT — shown in the "Contact & payment" section.
     Add GCash, email, PayPal, etc. Use a full link (https://..., mailto:...),
     or leave url "" to show text only (e.g. a GCash number).
     --------------------------------------------------------------------- */
  contact: [
    { label: "Facebook", value: "Message 5H13 on Facebook", url: "https://www.facebook.com/profile.php?id=61593555743966" },
    // { label: "Email", value: "you@example.com", url: "mailto:you@example.com" },
    // { label: "GCash", value: "0917 000 0000 (Juan D.)", url: "" },
  ]
};
