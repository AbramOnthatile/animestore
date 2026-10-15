export const mockProducts = [
  {
    productId: 101,
    name: "Naruto Storm Hoodie",
    price: 899.00,
    stock: 12,
    desc: "Oversized anime-inspired hoodie with a bold ninja graphic, layered fit, and chakra-style streetwear energy.",
    category: { categoryName: "Hoodies" },
    productImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80&sat=-30"
  },
  {
    productId: 102,
    name: "One Piece Wave Tee",
    price: 499.00,
    stock: 18,
    desc: "Street-ready anime tee with ocean-inspired colors and a bold manga-summer look.",
    category: { categoryName: "Tees" },
    productImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80&sat=-20"
  },
  {
    productId: 103,
    name: "Sailor Moon Cap",
    price: 329.00,
    stock: 14,
    desc: "Structured cap with a soft inner sweatband and a magical-girl inspired star finish.",
    category: { categoryName: "Caps" },
    productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80&sat=-10"
  },
  {
    productId: 104,
    name: "Dragon Ball Beanie",
    price: 279.00,
    stock: 20,
    desc: "Warm knit beanie made for anime fans who want a subtle power-level statement look.",
    category: { categoryName: "Beanies" },
    productImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80&sat=-15"
  },
  {
    productId: 105,
    name: "Attack on Titan Pullover",
    price: 949.00,
    stock: 9,
    desc: "A premium heavyweight pullover with cinematic manga energy, warm fleece lining, and a dramatic fit.",
    category: { categoryName: "Hoodies" },
    productImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80&sat=-25"
  },
  {
    productId: 106,
    name: "Tokyo Drift Tee",
    price: 459.00,
    stock: 16,
    desc: "A bold graphic tee made for city nights, neon culture, and anime-inspired streetwear energy.",
    category: { categoryName: "Tees" },
    productImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80&sat=-30"
  },
  {
    productId: 107,
    name: "Anime Hero Snapback",
    price: 349.00,
    stock: 13,
    desc: "Curved brim cap with a relaxed fit and premium embroidered finish for everyday cosplay styling.",
    category: { categoryName: "Caps" },
    productImage: "https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=900&q=80&sat=-10"
  },
  {
    productId: 108,
    name: "Shadow Clan Beanie",
    price: 299.00,
    stock: 11,
    desc: "Soft knit beanie with a sleek silhouette and a stealthy anime-inspired aesthetic for chilly nights.",
    category: { categoryName: "Beanies" },
    productImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-20"
  }
];

export const normalizeProductImage = (productImage) => {
  if (!productImage) return "/img/placeholder.png";
  if (productImage.startsWith("http://") || productImage.startsWith("https://")) {
    return productImage;
  }
  return `data:image/jpeg;base64,${productImage}`;
};

export const getDemoProducts = () => mockProducts;
