export type AudienceId = "cafe" | "retail" | "fashion" | "lifestyle";

export type ShowcaseProduct = {
  name: string;
  price: string;
  detail?: string;
  category: string;
};

export type ShowcaseWorkflow = {
  id: string;
  label: string;
  title: string;
  copy: string;
  points: string[];
  visual:
    | "counter"
    | "kitchen"
    | "billing"
    | "sales"
    | "products"
    | "catalogue"
    | "store"
    | "collections";
};

export type ShowcaseAudience = {
  id: AudienceId;
  label: string;
  brand: string;
  slug: string;
  headline: string;
  lede: string;
  tone: AudienceId;
  categories: string[];
  products: ShowcaseProduct[];
  orderTypeLabels: [string, string];
  orderMeta: string;
  sales: {
    orders: string;
    gross: string;
    cash: string;
    digital: string;
    top: [string, string, string][];
  };
  workflows: ShowcaseWorkflow[];
};

export const showcaseAudiences: ShowcaseAudience[] = [
  {
    id: "cafe",
    label: "Café or restaurant",
    brand: "North Window",
    slug: "north-window",
    headline: "Everything moving, from counter to kitchen.",
    lede: "Take orders, manage your menu, keep kitchen orders organised and understand your daily sales.",
    tone: "cafe",
    categories: ["Coffee", "Food", "Pastry"],
    products: [
      { name: "Filter coffee", price: "₹180", detail: "250 ml", category: "Coffee" },
      { name: "Masala chai", price: "₹120", detail: "Hot", category: "Coffee" },
      { name: "Cold brew", price: "₹220", detail: "Bottle", category: "Coffee" },
      { name: "Sandwich", price: "₹200", detail: "Veg", category: "Food" },
      { name: "Croissant", price: "₹120", detail: "Butter", category: "Pastry" },
    ],
    orderTypeLabels: ["Dine-in", "Takeaway"],
    orderMeta: "Table 4",
    sales: {
      orders: "46",
      gross: "₹18,420",
      cash: "₹6,200",
      digital: "₹12,220",
      top: [
        ["Filter coffee", "₹6,480", "36"],
        ["Masala chai", "₹3,120", "26"],
        ["Croissant", "₹2,160", "18"],
      ],
    },
    workflows: [
      {
        id: "counter",
        label: "Counter",
        title: "Counter",
        copy: "Take dine-in or takeaway orders, attach a table, and send the ticket on.",
        points: ["Menu by category", "Quantities on the order", "Send to kitchen or checkout"],
        visual: "counter",
      },
      {
        id: "kitchen",
        label: "Kitchen",
        title: "Kitchen",
        copy: "Tickets land on the board and move through preparation until they are ready.",
        points: ["Order ticket with items", "New → preparing → ready", "Scoped to that café"],
        visual: "kitchen",
      },
      {
        id: "billing",
        label: "Billing",
        title: "Billing",
        copy: "Itemise the bill, show tax, record settlement, and share a PDF receipt.",
        points: ["Itemised totals", "Tax on the bill", "Cash or UPI/card · PDF receipt"],
        visual: "billing",
      },
      {
        id: "sales",
        label: "Sales",
        title: "Sales",
        copy: "See daily revenue, paid orders and what sold—without reconstructing the shift later.",
        points: ["Gross sales & order count", "Popular café items", "Payment mix"],
        visual: "sales",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail shop",
    brand: "Corner Market",
    slug: "corner-market",
    headline: "Your products, sales and stock in one place.",
    lede: "Organise your products, handle counter sales and give customers an easy way to browse your catalogue online.",
    tone: "retail",
    categories: ["Accessories", "Homeware", "Essentials"],
    products: [
      { name: "Canvas tote", price: "₹650", detail: "In stock", category: "Accessories" },
      { name: "Ceramic mug", price: "₹480", detail: "In stock", category: "Homeware" },
      { name: "Desk organiser", price: "₹890", detail: "Low", category: "Homeware" },
      { name: "Notebook set", price: "₹320", detail: "In stock", category: "Essentials" },
      { name: "Keychain pack", price: "₹180", detail: "In stock", category: "Accessories" },
    ],
    orderTypeLabels: ["Walk-in", "Pickup"],
    orderMeta: "Counter",
    sales: {
      orders: "38",
      gross: "₹24,860",
      cash: "₹8,400",
      digital: "₹16,460",
      top: [
        ["Canvas tote", "₹7,800", "12"],
        ["Ceramic mug", "₹5,760", "12"],
        ["Notebook set", "₹3,840", "12"],
      ],
    },
    workflows: [
      {
        id: "products",
        label: "Products",
        title: "Products",
        copy: "Group everyday retail products into categories with prices you can update in one place.",
        points: ["Accessories, Homeware, Essentials", "Prices on each product", "Catalogue ready to share"],
        visual: "products",
      },
      {
        id: "counter",
        label: "Counter",
        title: "Counter",
        copy: "Ring up walk-in sales from the same product list you maintain for the shop floor.",
        points: ["Product selection", "Quantities on the sale", "Settlement recording"],
        visual: "counter",
      },
      {
        id: "catalogue",
        label: "Online catalogue",
        title: "Online catalogue",
        copy: "Let customers browse your products online and share the catalogue from social, messaging or your existing site.",
        points: ["Customer-facing product grid", "Shareable link & QR", "Not a custom website builder"],
        visual: "catalogue",
      },
      {
        id: "sales",
        label: "Sales",
        title: "Sales",
        copy: "See which products moved and how people paid—at the counter or through the link.",
        points: ["Popular products", "Payment mix", "Counter vs catalogue orders"],
        visual: "sales",
      },
    ],
  },
  {
    id: "fashion",
    label: "Clothing or fashion brand",
    brand: "Atelier Lane",
    slug: "atelier-lane",
    headline: "From your collection to your customer's cart.",
    lede: "Showcase your clothing collections online, organise products and share your catalogue wherever your customers discover you.",
    tone: "fashion",
    categories: ["New Arrivals", "Tops", "Bottoms"],
    products: [
      { name: "Linen shirt", price: "₹2,400", detail: "New Arrivals", category: "New Arrivals" },
      { name: "Everyday tee", price: "₹990", detail: "Tops", category: "Tops" },
      { name: "Pleated dress", price: "₹3,200", detail: "New Arrivals", category: "New Arrivals" },
      { name: "Wide trousers", price: "₹2,800", detail: "Bottoms", category: "Bottoms" },
      { name: "Canvas belt", price: "₹780", detail: "Accessories", category: "Tops" },
    ],
    orderTypeLabels: ["In-store", "Pickup"],
    orderMeta: "Fitting",
    sales: {
      orders: "22",
      gross: "₹41,200",
      cash: "₹9,800",
      digital: "₹31,400",
      top: [
        ["Linen shirt", "₹14,400", "6"],
        ["Pleated dress", "₹12,800", "4"],
        ["Everyday tee", "₹7,920", "8"],
      ],
    },
    workflows: [
      {
        id: "collections",
        label: "Collections",
        title: "Collections",
        copy: "Present New Arrivals, Tops and Bottoms as a curated clothing catalogue customers can browse.",
        points: ["Collection categories", "Editorial product cards", "Prices on each piece"],
        visual: "collections",
      },
      {
        id: "products",
        label: "Products",
        title: "Products",
        copy: "Keep shirts, dresses, trousers and accessories organised with clear names and prices.",
        points: ["Clothing catalogue list", "Category grouping", "Illustrative look—not variant stock"],
        visual: "products",
      },
      {
        id: "catalogue",
        label: "Online catalogue",
        title: "Online catalogue",
        copy: "Share a mobile catalogue and QR so customers find your pieces from Instagram, WhatsApp or your existing site.",
        points: ["Mobile fashion storefront", "Shareable link & QR", "No custom website required"],
        visual: "catalogue",
      },
      {
        id: "counter",
        label: "Counter",
        title: "Counter",
        copy: "Sell the same collection in person at your store or pop-up.",
        points: ["In-person purchases", "Same product list", "Settlement recording"],
        visual: "counter",
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Homegrown or lifestyle brand",
    brand: "Hearth & Wick",
    slug: "hearth-wick",
    headline: "Give your products a place of their own.",
    lede: "Organise your collection, showcase your products and share your online catalogue directly with customers.",
    tone: "lifestyle",
    categories: ["Candles", "Gifts", "Home"],
    products: [
      { name: "Cedar candle", price: "₹890", detail: "Soy wax", category: "Candles" },
      { name: "Gift box", price: "₹1,450", detail: "Assorted", category: "Gifts" },
      { name: "Handmade soap", price: "₹320", detail: "Lavender", category: "Gifts" },
      { name: "Ceramic tray", price: "₹1,100", detail: "Home", category: "Home" },
      { name: "Match jar", price: "₹280", detail: "Candles", category: "Candles" },
    ],
    orderTypeLabels: ["Pop-up", "Pickup"],
    orderMeta: "Stall",
    sales: {
      orders: "31",
      gross: "₹19,640",
      cash: "₹7,100",
      digital: "₹12,540",
      top: [
        ["Cedar candle", "₹7,120", "8"],
        ["Gift box", "₹5,800", "4"],
        ["Handmade soap", "₹3,200", "10"],
      ],
    },
    workflows: [
      {
        id: "collections",
        label: "Collections",
        title: "Collections",
        copy: "Present candles, gifts and home pieces in a warm, editorial catalogue customers will recognise.",
        points: ["Candles, Gifts, Home", "Short product descriptions", "Polished mobile browse"],
        visual: "collections",
      },
      {
        id: "products",
        label: "Products",
        title: "Products",
        copy: "Keep handmade goods organised with names, prices and categories you control.",
        points: ["Product list by category", "Clear pricing", "Ready for counter or link"],
        visual: "products",
      },
      {
        id: "store",
        label: "Store link",
        title: "Store link",
        copy: "Share one catalogue link or QR—ideal for markets, DMs and an existing website button.",
        points: ["Shareable URL & QR", "Social and messaging ready", "Not a full custom e-commerce build"],
        visual: "store",
      },
      {
        id: "counter",
        label: "Counter",
        title: "Counter",
        copy: "Take sales at markets, pop-ups or a small shop from the same product list.",
        points: ["Pop-up friendly counter", "Same catalogue items", "Settlement recording"],
        visual: "counter",
      },
    ],
  },
];

export function getShowcaseAudience(id: AudienceId): ShowcaseAudience {
  return showcaseAudiences.find((item) => item.id === id) ?? showcaseAudiences[0];
}
