export type EscortType = "tamil" | "mallu" | "telugu" | "kannada";
export type Category = "regular" | "artists" | "celebrity" | "models" | "housewife" | "college-girls" | "actress";

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  type: EscortType;
  category: Category;
  tagline: string;
  bio: string;
  image: string;
  images?: string[]; // Gallery images
  availability: string;
  languages: string[];
  services?: string[];
  telegram: string; // Telegram username (e.g., "LillyBabe_chennai")
  verified?: boolean;
  responseTime?: string; // e.g., "Usually responds within 1 hour"
  rating?: number; // 1-5 rating
  reviewCount?: number;
}

// Deterministic helper functions
const getTagline = (category: Category, seed: number): string => {
  const taglines: Record<Category, string[]> = {
    regular: [
      "Friendly & easy-going. Love travel and good food.",
      "Down-to-earth and genuine. Great conversation guaranteed.",
      "Relaxed vibe, no pretense. Let's have a good time.",
    ],
    artists: [
      "Creative soul. Dance and music keep me alive.",
      "Performer at heart. Love sharing stories from the stage.",
      "Artistic and expressive. Culture and creativity are my passion.",
    ],
    celebrity: [
      "Discreet, professional. Know how to handle attention.",
      "High-profile experience. Privacy and elegance guaranteed.",
      "Used to the spotlight. Discretion is my priority.",
    ],
    models: [
      "Fashion-forward and confident. Style is everything.",
      "Photogenic and poised. Perfect for events and social settings.",
      "Model background. Know how to carry myself anywhere.",
    ],
    housewife: [
      "Mature, grounded. No drama, just good vibes.",
      "Life experience and warmth. Great listener and companion.",
      "Discreet and understanding. Comfortable, safe company.",
    ],
    "college-girls": [
      "Young, fun, and up for adventures.",
      "Student life keeps me busy, but I love meeting new people.",
      "Fresh perspective and lots of energy. Let's explore together.",
    ],
    actress: [
      "Screen and stage talent. Every moment is a performance.",
      "Expressive and confident. Know how to keep things interesting.",
      "Performance training. Presence and charm guaranteed.",
    ],
  };
  const options = taglines[category];
  return options[seed % options.length];
};

const getBio = (category: Category, type: EscortType): string => {
  const typeNames: Record<EscortType, string> = {
    tamil: "Tamil",
    mallu: "Mallu",
    telugu: "Telugu",
    kannada: "Kannada",
  };
  const bios: Record<Category, string> = {
    regular: `I'm a ${typeNames[type]} escort who believes in keeping things real. No pretense, just genuine connection. Whether you want a quiet dinner, a night out, or someone to talk to, I'm here. I love meeting new people and making them feel comfortable.`,
    artists: `As a ${typeNames[type]} artist, I bring creativity and passion to every meeting. I've performed on stage and love sharing stories from my journey. If you enjoy culture, conversation, and a bit of flair, we'll get along great.`,
    celebrity: `Being a ${typeNames[type]} escort in the public eye has taught me the value of discretion. I understand privacy and know how to keep things special. Whether it's an event or a private evening, everything stays between us.`,
    models: `With a background in modeling, I'm used to being in front of the camera and in social settings. I'm confident, stylish, and know how to carry myself. Perfect for events, dinners, or when you want someone who turns heads.`,
    housewife: `As a mature ${typeNames[type]} escort, I bring warmth and life experience to every meeting. I'm discreet, understanding, and a great listener. Many clients appreciate my down-to-earth nature and the fact that there's no drama—just good conversation and a relaxed vibe.`,
    "college-girls": `I'm a young ${typeNames[type]} student/professional who's fun to be around and up for a good time. I bring a lively, modern outlook and love chatting about anything—studies, travel, nightlife, you name it.`,
    actress: `With training in performance arts, I know how to hold a conversation, read the room, and keep things interesting. As a ${typeNames[type]} actress, I bring presence and charm to every meeting. Whether it's a high-profile event or a private evening, I make it memorable.`,
  };
  return bios[category];
};

const getLanguages = (type: EscortType): string[] => {
  const base: Record<EscortType, string[]> = {
    tamil: ["Tamil", "English"],
    mallu: ["Malayalam", "English"],
    telugu: ["Telugu", "English"],
    kannada: ["Kannada", "English"],
  };
  return base[type];
};

const getServices = (category: Category): string[] => {
  const services: Record<Category, string[]> = {
    regular: ["Dinner Dates", "Social Events", "Travel Companion", "Conversation"],
    artists: ["Cultural Events", "Art Shows", "Music Concerts", "Creative Discussions"],
    celebrity: ["High-Profile Events", "Private Meetings", "Discreet Companionship"],
    models: ["Fashion Events", "Photoshoots", "Social Gatherings", "Red Carpet"],
    housewife: ["Mature Companionship", "Discreet Meetings", "Emotional Support"],
    "college-girls": ["Casual Outings", "Nightlife", "Adventure Activities"],
    actress: ["Events", "Private Evenings", "Entertainment"],
  };
  return services[category];
};

// Generate profiles deterministically
function generateProfiles(): Profile[] {
  const types: EscortType[] = ["tamil", "mallu", "telugu", "kannada"];
  const categories: Category[] = ["regular", "artists", "celebrity", "models", "housewife", "college-girls", "actress"];
  const names: Record<EscortType, string[]> = {
    tamil: ["Priya", "Meera", "Ananya", "Lakshmi", "Kavya", "Divya", "Shruti", "Nithya"],
    mallu: ["Aparna", "Deepa", "Gayatri", "Indira", "Jyothi", "Kalyani", "Leela", "Maya"],
    telugu: ["Sneha", "Swathi", "Tejaswini", "Usha", "Varsha", "Yamini", "Zara", "Aditi"],
    kannada: ["Bhavana", "Chaitra", "Darshini", "Esha", "Falguni", "Gowri", "Hamsa", "Isha"],
  };
  const locations: Record<EscortType, string[]> = {
    tamil: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
    mallu: ["Kochi", "Kozhikode", "Thrissur", "Kannur"],
    telugu: ["Hyderabad", "Visakhapatnam", "Warangal", "Guntur"],
    kannada: ["Bangalore", "Hubli", "Mangalore", "Belgaum"],
  };

  const profiles: Profile[] = [];
  let idCounter = 1;

  // Generate profiles in a fixed, deterministic order
  types.forEach((type, typeIndex) => {
    categories.forEach((category, categoryIndex) => {
      // Generate 4 profiles per category (deterministic)
      const count = 4;
      for (let i = 0; i < count; i++) {
        // Use typeIndex, categoryIndex, and i to create deterministic values
        // This ensures the same profile always gets the same values
        const seed = typeIndex * 1000 + categoryIndex * 100 + i;
        const nameIndex = seed % names[type].length;
        const locationIndex = seed % locations[type].length;
        const age = 22 + (seed % 11); // Deterministic age: 22-32

        const baseSeed = `${type}-${category}-${idCounter}`;
        const rating = 4 + ((seed % 2) * 0.5); // 4.0 or 4.5
        const reviewCount = 10 + (seed % 51); // 10-60
        
        profiles.push({
          id: `${type}-${category}-${idCounter}`,
          name: names[type][nameIndex] + (i > 0 ? ` ${i + 1}` : ""),
          age,
          location: locations[type][locationIndex],
          type,
          category,
          tagline: getTagline(category, seed),
          bio: getBio(category, type),
          image: `https://picsum.photos/seed/${baseSeed}/600/800`,
          images: [
            `https://picsum.photos/seed/${baseSeed}-1/600/800`,
            `https://picsum.photos/seed/${baseSeed}-2/600/800`,
            `https://picsum.photos/seed/${baseSeed}-3/600/800`,
            `https://picsum.photos/seed/${baseSeed}-4/600/800`,
          ],
          availability: ["Available Now", "Available Today", "Available This Week"][seed % 3],
          languages: getLanguages(type),
          services: getServices(category),
          telegram: "LillyBabe_chennai",
          verified: (seed % 10) < 7,
          responseTime: ["Usually responds within 30 mins", "Usually responds within 1 hour", "Usually responds within 2 hours"][seed % 3],
          rating,
          reviewCount,
        });
        idCounter++;
      }
    });
  });

  return profiles;
}

// Generate profiles once and sort by id to ensure completely stable order
const _allProfiles = generateProfiles();
export const allProfiles = _allProfiles.sort((a, b) => a.id.localeCompare(b.id));

export const getProfilesByTypeAndCategory = (type: EscortType, category: Category): Profile[] => {
  // Filter and sort by id to ensure consistent order
  return allProfiles
    .filter((p) => p.type === type && p.category === category)
    .sort((a, b) => a.id.localeCompare(b.id));
};

export const getProfileById = (id: string): Profile | undefined => {
  return allProfiles.find((p) => p.id === id);
};

export const getRelatedProfiles = (profile: Profile, limit: number = 4): Profile[] => {
  return allProfiles
    .filter((p) => p.id !== profile.id && (p.type === profile.type || p.category === profile.category))
    .slice(0, limit);
};

/** Type page URL path: /tamil-escorts, /mallu-escorts, etc. */
export const TYPE_PAGE_SLUGS = ["tamil-escorts", "mallu-escorts", "telugu-escorts", "kannada-escorts"] as const;

const TYPE_LABELS: Record<EscortType, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

export function getTypePagePath(type: EscortType): string {
  return `/${type}-escorts`;
}

export function getTypeByPageSlug(pageSlug: string): { type: EscortType; label: string } | undefined {
  if (!pageSlug.endsWith("-escorts")) return undefined;
  const type = pageSlug.slice(0, -8) as EscortType; // "-escorts" length 8
  if (!["tamil", "mallu", "telugu", "kannada"].includes(type)) return undefined;
  return { type, label: TYPE_LABELS[type] };
}
