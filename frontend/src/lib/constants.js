export const IMAGES = {
  logo: "https://customer-assets.emergentagent.com/job_eco-textiles-hub-1/artifacts/i4cptmgv_WhatsApp%20Image%202026-02-14%20at%2010.19.06.jpeg",
  heroTexture: "https://images.unsplash.com/photo-1631089667980-7fe55b2abb9a?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified Vibrant Yellow Fabric
  fabricStack: "https://images.unsplash.com/photo-1677945954526-3a1910fe1a52?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified Colorful Rolls
  craftsmanship: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=2000", // New Vibrant Sharp Loom
  weavingHands: "https://images.unsplash.com/photo-1569909115134-a0426936c879?auto=format&fit=crop&q=80&w=2000", // New Vibrant Cyan/Magenta Threads
  beddingProduct: "https://images.unsplash.com/photo-1721272251028-9eff057ea65e?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified White Bedroom
  bedroomInterior: "https://images.unsplash.com/photo-1721272251028-9eff057ea65e?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified White Bedroom
  shippingLogistics: "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified Container Ship
  cargoShip: "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Verified Container Ship
  tableLinens: "https://images.unsplash.com/photo-1631089667980-7fe55b2abb9a?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Reuse Vibrant Yellow Texture
  throws: "https://images.unsplash.com/photo-1590674752807-05e0ca142f01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxoYW5kd292ZW4lMjB0aHJvdyUyMGJsYW5rZXQlMjB3b29sfGVufDB8fHx8MTc3MTA1MjYyMnww&ixlib=rb-4.1.0&q=85", // Verified Working
  cushions: "https://images.unsplash.com/photo-1677945954526-3a1910fe1a52?fm=jpg&q=80&w=2000&auto=format&fit=crop", // Reuse Colorful Rolls
  bathTowels: "https://images.unsplash.com/photo-1760722974657-f64bce2f9cc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRoJTIwdG93ZWxzJTIwb3JnYW5pYyUyMGNvdHRvbnxlbnwwfHx8fDE3NzEwNTI2MjN8MA&ixlib=rb-4.1.0&q=85", // Verified Working
  floorRug: "https://images.unsplash.com/photo-1726208224138-80303abb73d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBydWclMjB3b3ZlbiUyMGZsb29yfGVufDB8fHx8MTc3MTA1MjYyNHww&ixlib=rb-4.1.0&q=85", // Verified Working
  cottonField: "https://images.unsplash.com/photo-1761069183527-a1a1414ee71f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxjb3R0b24lMjBmaWVsZCUyMHN1c3RhaW5hYmxlJTIwYWdyaWN1bHR1cmV8ZW58MHx8fHwxNzcxMDUyNjI0fDA&ixlib=rb-4.1.0&q=85", // Verified Working
};

export const PRODUCTS = [
  {
    id: 'bedding',
    name: 'Bedding',
    tagline: 'Organic Cotton & Linen Bedding for Global Retail',
    image: IMAGES.beddingProduct,
    materials: ['Organic Cotton', 'Linen', 'Hemp', 'Tencel/Lyocell'],
    features: ['GOTS Certified', 'Bulk Customization', 'Private Label Capabilities', 'Minimum Order Flexibility'],
    description: 'Premium bedding collections crafted from certified organic fibers. Designed for retailers and hospitality groups seeking sustainable luxury at scale.',
  },
  {
    id: 'table-linens',
    name: 'Table Linens',
    tagline: 'Elegant Table Linens for Hospitality Excellence',
    image: IMAGES.tableLinens,
    materials: ['Organic Cotton', 'Linen', 'Banana Fiber', 'Hospitality-Grade Finishing'],
    features: ['Stain Resistant Options', 'Custom Sizing', 'Bulk Production', 'Brand Embroidery'],
    description: 'Refined table linens combining natural fibers with hospitality-grade durability. From intimate dining to large-scale hotel supply.',
  },
  {
    id: 'throws-blankets',
    name: 'Throws & Blankets',
    tagline: 'Handwoven Throws Rooted in Artisan Tradition',
    image: IMAGES.throws,
    materials: ['Wool', 'Organic Cotton', 'Recycled Cotton', 'Handwoven Collections'],
    features: ['Artisan Crafted', 'Fair Trade Sourced', 'Custom Color Palettes', 'Seasonal Collections'],
    description: 'Handwoven throws and blankets that carry the warmth of artisan tradition. Each piece supports sustainable livelihoods and responsible material sourcing.',
  },
  {
    id: 'cushions',
    name: 'Cushions & Pillow Covers',
    tagline: 'Artisanal Cushions with Hand-Embroidered Detail',
    image: IMAGES.cushions,
    materials: ['GOTS-Certified Cotton', 'Peace Silk', 'Hand-Embroidered Detailing', 'Artisanal Collections'],
    features: ['Custom Designs', 'Heritage Techniques', 'Ethical Sourcing', 'Boutique & Retail Ready'],
    description: 'Cushion collections featuring hand-embroidered details and peace silk accents. Perfect for retailers seeking distinctive, story-rich home accessories.',
  },
  {
    id: 'bath-textiles',
    name: 'Bath Textiles',
    tagline: 'Organic Bath Textiles for Spa & Hospitality',
    image: IMAGES.bathTowels,
    materials: ['Organic Cotton Towels', 'Bamboo Bath Mats', 'Hemp Blends', 'Spa-Grade Finishing'],
    features: ['Quick-Dry Technology', 'Hotel Supply Programs', 'Custom Branding', 'Durability Tested'],
    description: 'Luxurious bath textiles engineered for comfort and longevity. Ideal for boutique hotels, spas, and premium retail channels.',
  },
  {
    id: 'floor-coverings',
    name: 'Floor Coverings',
    tagline: 'Sustainable Natural-Fiber Rugs & Floor Textiles',
    image: IMAGES.floorRug,
    materials: ['Natural-Fiber Rugs', 'Woven Sustainable Textiles', 'Custom Sizing Options'],
    features: ['Bespoke Dimensions', 'Eco-Friendly Dyes', 'Commercial Grade', 'Heritage Weaving'],
    description: 'Natural-fiber floor coverings that bring sustainable elegance to any interior. Custom sizing available for commercial and residential projects.',
  },
];

export const SUSTAINABILITY_ITEMS = [
  'GOTS Certified Materials',
  'Natural Dye Processes',
  'Ethical Artisan Partnerships',
  'Traceable Supply Chains',
  'Responsible Fiber Sourcing',
  'Zero-Waste Commitment',
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Global Network', path: '/global-network' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Contact', path: '/contact' },
];
