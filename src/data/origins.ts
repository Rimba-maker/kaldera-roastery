export type Region = "Sumatra" | "Jawa" | "Sulawesi" | "Bali" | "Flores" | "Papua";
export type Processing = "Natural" | "Honey" | "Washed";

export interface Origin {
  slug: string;
  name: string;
  region: Region;
  processing: Processing;
  altitude: string;
  cuppingScore: number;
  notes: string;
  price: string;
  minOrder: string;
  image: string;
}

export const origins: Origin[] = [
  {
    slug: "aceh-gayo",
    name: "Aceh Gayo",
    region: "Sumatra",
    processing: "Washed",
    altitude: "1.400–1.600 mdpl",
    cuppingScore: 84.5,
    notes: "Citrus, brown sugar, clean finish",
    price: "Rp 145.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646619157-eb553d16d402?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "toraja-sapan",
    name: "Toraja Sapan",
    region: "Sulawesi",
    processing: "Natural",
    altitude: "1.500–1.800 mdpl",
    cuppingScore: 85.0,
    notes: "Red wine, dark fruit, full body",
    price: "Rp 160.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646616758-f43c7f07b0c8?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "flores-bajawa",
    name: "Flores Bajawa",
    region: "Flores",
    processing: "Honey",
    altitude: "1.200–1.400 mdpl",
    cuppingScore: 83.5,
    notes: "Caramel, stone fruit, balanced acidity",
    price: "Rp 135.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646619157-eb553d16d402?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "java-preanger",
    name: "Java Preanger",
    region: "Jawa",
    processing: "Washed",
    altitude: "1.100–1.300 mdpl",
    cuppingScore: 82.5,
    notes: "Nutty, medium body, herbal",
    price: "Rp 120.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646616758-f43c7f07b0c8?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "papua-wamena",
    name: "Papua Wamena",
    region: "Papua",
    processing: "Natural",
    altitude: "1.600–1.900 mdpl",
    cuppingScore: 85.5,
    notes: "Tropical fruit, wine-like, complex",
    price: "Rp 175.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646619157-eb553d16d402?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "bali-kintamani",
    name: "Bali Kintamani",
    region: "Bali",
    processing: "Honey",
    altitude: "1.300–1.500 mdpl",
    cuppingScore: 83.0,
    notes: "Citrus, floral, light body",
    price: "Rp 140.000/kg",
    minOrder: "min. 5 kg",
    image: "https://images.unsplash.com/photo-1703646616758-f43c7f07b0c8?q=80&w=800&auto=format&fit=crop",
  },
];
