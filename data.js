// ============================================
// SHELTORANI — EDIT ALL YOUR DATA HERE
// ============================================

const SHELTORANI_CONFIG = {
  whatsapp: "254745773645",  // Your WhatsApp number
  brandName: "Sheltorani",
  tagline: "Private Perfumery",
  currency: "KSh",

  // Delivery info shown at checkout
  deliveryNote: "Cash on delivery · University of Nairobi campus",

  // Sizes and base prices (same for all perfumes)
  sizes: [
    { ml: 6,  price: 200 },
    { ml: 10, price: 300 },
    { ml: 20, price: 650 },
    { ml: 30, price: 900 },
  ],

  // ============================================
  // YOUR PERFUMES — ADD / EDIT / REMOVE HERE
  // ============================================
  perfumes: [
    {
      id: "9pm",
      name: "9PM",
      brand: "Afnan",
      description: "A bold evening fragrance. Deep amber and woody notes that command attention long after the sun sets.",
      notes: {
        top:    "Bergamot, Apple",
        heart:  "Lavender, Cinnamon",
        base:   "Amber, Musk, Sandalwood"
      },
      mood: "Bold · Seductive · Night",
      gender: "Him",
      color: "#c8860a"  // accent color for this perfume card
    },
    {
      id: "yara",
      name: "Yara",
      brand: "Lattafa",
      description: "A sweet, feminine bloom. Fruity florals that leave a trail of warmth wherever you go.",
      notes: {
        top:    "Strawberry, Peach",
        heart:  "Rose, Jasmine",
        base:   "Vanilla, Musk, Sandalwood"
      },
      mood: "Sweet · Floral · Radiant",
      gender: "Her",
      color: "#d4679a"
    },
    {
      id: "mayar",
      name: "Mayar",
      brand: "Lattafa",
      description: "Soft, powdery elegance. A gentle oriental that wraps you in quiet luxury from morning to night.",
      notes: {
        top:    "Citrus, Bergamot",
        heart:  "Rose, Iris",
        base:   "Musk, Cedarwood, Amber"
      },
      mood: "Soft · Elegant · Timeless",
      gender: "Unisex",
      color: "#a07ab5"
    },
    {
      id: "fakhar",
      name: "Fakhar",
      brand: "Lattafa",
      description: "Rich and commanding. A deep oud-based masterpiece built for those who leave lasting impressions.",
      notes: {
        top:    "Saffron, Cardamom",
        heart:  "Oud, Rose",
        base:   "Amber, Musk, Patchouli"
      },
      mood: "Rich · Powerful · Prestigious",
      gender: "Him",
      color: "#c8860a"
    },
    {
      id: "fakhar-silver",
      name: "Fakhar Silver",
      brand: "Lattafa",
      description: "The cooler, fresher counterpart to Fakhar. Clean aromatic woods with a refined silver edge.",
      notes: {
        top:    "Bergamot, Lavender",
        heart:  "Cedarwood, Vetiver",
        base:   "Musk, Amber, Sandalwood"
      },
      mood: "Fresh · Clean · Sophisticated",
      gender: "Him",
      color: "#8ab4c8"
    }
  ]
};
