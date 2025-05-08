export type Service = {
  title: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
};

export type PortfolioCategory = "wedding" | "portrait" | "event" | "product";

export type PortfolioItem = {
  title: string;
  client: string;
  image: string;
  category: PortfolioCategory;
};

export type Testimonial = {
  name: string;
  title: string;
  avatar: string;
  content: string;
  rating: number;
};

export const services: Service[] = [
  {
    title: "Wedding Photography",
    description: "Capture the magic of your special day with our professional wedding photography services.",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    price: "8,500",
    tags: ["Pre-wedding", "Ceremony", "Reception"],
  },
  {
    title: "Portrait Photography",
    description: "Professional portrait sessions in our studio or at a location of your choice.",
    image: "https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg",
    price: "1,500",
    tags: ["Individual", "Family", "Professional"],
  },
  {
    title: "Event Photography",
    description: "Comprehensive coverage for corporate events, parties, and special occasions.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    price: "5,000",
    tags: ["Corporate", "Birthday", "Ceremonies"],
  },
  {
    title: "Product Photography",
    description: "High-quality product images for your business, e-commerce, or catalog.",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
    price: "2,000",
    tags: ["E-commerce", "Catalog", "Advertising"],
  },
  {
    title: "Maternity Photography",
    description: "Celebrate the journey of motherhood with elegant maternity portrait sessions.",
    image: "https://images.pexels.com/photos/5427831/pexels-photo-5427831.jpeg",
    price: "3,500",
    tags: ["Studio", "Outdoor", "Home"],
  },
  {
    title: "Baby Photography",
    description: "Capture the precious first moments of your newborn with our specialized baby photography.",
    image: "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg",
    price: "3,000",
    tags: ["Newborn", "Monthly milestones", "First birthday"],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Wedding Ceremony",
    client: "Sandhya & Ramesh",
    image: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
    category: "wedding",
  },
  {
    title: "Business Portrait",
    client: "Corporate Series",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    category: "portrait",
  },
  {
    title: "Engagement Ceremony",
    client: "Priya & Karthik",
    image: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
    category: "wedding",
  },
  {
    title: "Family Portrait",
    client: "Raju Family",
    image: "https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg",
    category: "portrait",
  },
  {
    title: "Corporate Event",
    client: "Tech Conference 2023",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    category: "event",
  },
  {
    title: "Jewelry Collection",
    client: "Bala Jewellers",
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg",
    category: "product",
  },
  {
    title: "Maternity Session",
    client: "Lakshmi's Journey",
    image: "https://images.pexels.com/photos/5427867/pexels-photo-5427867.jpeg",
    category: "portrait",
  },
  {
    title: "Newborn Session",
    client: "Baby Arjun",
    image: "https://images.pexels.com/photos/3663450/pexels-photo-3663450.jpeg",
    category: "portrait",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Anjali Kumar",
    title: "Wedding Client",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    content: "Focus Studio captured our wedding day beautifully. The photographers were professional and made us feel comfortable. The photos exceeded our expectations!",
    rating: 5,
  },
  {
    name: "Ravi Patel",
    title: "Family Portrait Client",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "I had a family portrait session at Focus Studio, and the experience was amazing. The photographer knew exactly how to pose us and make everyone look their best.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    title: "Corporate Client",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content: "We hired Focus Studio for our company's annual conference, and they did an excellent job capturing all the key moments. Very professional service!",
    rating: 4.5,
  },
];
