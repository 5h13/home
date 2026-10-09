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
      name: "5H13 QR Code Scanner",
      navLabel: "QR Scanner",
      description: "Scan QR codes right in your browser using your phone or laptop camera.",
      url: "",                          // ← paste your QR scanner link here, e.g. "https://5h13.github.io/qr/"
      status: "free",
      category: "Utility tools",
      price: "Free",
      priceNote: "",
      showInNav: true,
      showInHero: false,
      showInPricing: true,
      buttonText: "Open QR Scanner"
    },
    {
      name: "5H11 Business Suite",
      navLabel: "Business Suite",
      description: "Our premium suite: advanced quotations, Purchase Orders (P.O.), Delivery Receipts (DR), and more business documents to come.",
      url: "https://5h11.netlify.app/",
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

    /* --- EXAMPLE: remove the  /*  and  *\/  around this block to publish ---
    {
      name: "Pera by 5H13",
      navLabel: "Pera",
      description: "Describe what Pera does in one or two sentences.",
      url: "https://your-pera-link-here/",
      status: "new",
      category: "Finance tools",
      price: "Free",
      priceNote: "",
      showInNav: true,
      showInHero: false,
      showInPricing: true,
      buttonText: "Open Pera"
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
