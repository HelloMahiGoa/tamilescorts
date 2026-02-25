/**
 * Static profile generation for seeding category_profiles.
 * Used only by the seed API. Production data comes from Supabase.
 */
import type { EscortType, Category, Profile } from "./profileData";

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

const getBio = (category: Category, type: EscortType, name: string, location: string, age: number, seed: number): string => {
  const typeNames: Record<EscortType, string> = {
    tamil: "Tamil",
    mallu: "Mallu",
    telugu: "Telugu",
    kannada: "Kannada",
  };
  const bioVariations = seed % 8;
  const bioTemplates: Record<Category, string[]> = {
    regular: [
      `Hi, I'm ${name}, a ${typeNames[type]} companion based in ${location}. At ${age}, I've learned that the best connections happen when people can be themselves. I'm naturally curious and love hearing about different perspectives—whether we're discussing travel, food, books, or just sharing stories from our day. I believe good company makes any evening better, whether it's a quiet dinner at a favorite restaurant, exploring new places in the city, or simply having meaningful conversations. My approach is straightforward: I'm here to make you feel comfortable and ensure our time together feels genuine and relaxed. I appreciate honesty and respect, and I bring that same energy to every meeting. If you're looking for someone who's easy to talk to, genuinely interested in getting to know you, and knows how to keep things light and enjoyable, I'd love to connect.`,
      `I'm ${name}, ${age} years old, and I've been working as a ${typeNames[type]} escort in ${location} for a while now. What I love most about this is meeting people from all walks of life and creating moments that feel natural and comfortable.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} companion in ${location}, I bring a warm, approachable energy to every meeting.`,
      `I'm ${name}, a ${typeNames[type]} escort based in ${location}. What sets me apart is my genuine interest in people.`,
      `Hi there, I'm ${name}. As a ${typeNames[type]} companion in ${location}, I've made it my priority to create genuine connections.`,
      `I'm ${name}, ${age} years old, and I work as a ${typeNames[type]} escort in ${location}.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} companion based in ${location}, I bring authenticity and warmth.`,
      `I'm ${name}, a ${typeNames[type]} escort in ${location}. What I bring to every meeting is a genuine desire to connect.`,
    ],
    housewife: [
      `I'm ${name}, a mature ${typeNames[type]} companion in ${location}. At ${age}, I bring life experience and warmth.`,
      `Hello, I'm ${name}. As a mature ${typeNames[type]} escort based in ${location}, I offer companionship.`,
      `I'm ${name}, ${age} years old, and I work as a ${typeNames[type]} companion in ${location}.`,
      `Hi, I'm ${name}. As a mature ${typeNames[type]} escort in ${location}, I offer companionship.`,
    ],
    "college-girls": [
      `Hi, I'm ${name}! I'm ${age} years old and I'm a ${typeNames[type]} student in ${location}.`,
      `Hello! I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location}.`,
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion based in ${location}.`,
      `Hi there! I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location}.`,
    ],
    artists: [
      `I'm ${name}, a ${typeNames[type]} artist and performer based in ${location}.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} artist and performer in ${location}.`,
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} artist in ${location}.`,
      `Hi, I'm ${name}. As a ${typeNames[type]} artist and performer based in ${location}.`,
    ],
    models: [
      `I'm ${name}, a ${typeNames[type]} model based in ${location}.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} model in ${location}.`,
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} model in ${location}.`,
      `Hi, I'm ${name}. As a ${typeNames[type]} model based in ${location}.`,
    ],
    actress: [
      `I'm ${name}, a ${typeNames[type]} actress based in ${location}.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} actress in ${location}.`,
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} actress in ${location}.`,
      `Hi, I'm ${name}. As a ${typeNames[type]} actress based in ${location}.`,
    ],
    celebrity: [
      `I'm ${name}, a ${typeNames[type]} companion in ${location} who understands discretion.`,
      `Hello, I'm ${name}. As a ${typeNames[type]} companion in ${location}.`,
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location}.`,
      `Hi, I'm ${name}. As a ${typeNames[type]} companion based in ${location}.`,
    ],
  };
  const categoryBios = bioTemplates[category];
  return categoryBios[bioVariations] || categoryBios[0];
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

const getPrice = (category: Category, seed: number): { hourly?: number; overnight?: number; extended?: number } => {
  const basePrices: Record<Category, { hourly: number; overnight: number; extended: number }> = {
    regular: { hourly: 8000, overnight: 25000, extended: 45000 },
    housewife: { hourly: 10000, overnight: 30000, extended: 55000 },
    "college-girls": { hourly: 12000, overnight: 35000, extended: 60000 },
    artists: { hourly: 15000, overnight: 40000, extended: 70000 },
    models: { hourly: 20000, overnight: 50000, extended: 90000 },
    actress: { hourly: 25000, overnight: 60000, extended: 110000 },
    celebrity: { hourly: 30000, overnight: 75000, extended: 140000 },
  };
  const base = basePrices[category];
  const variation = (seed % 5) * 1000;
  return {
    hourly: base.hourly + variation,
    overnight: base.overnight + variation * 2,
    extended: base.extended + variation * 3,
  };
};

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

  const categoryNames: Record<Category, string[]> = {
    regular: ["Aadhini", "Deepti", "Iniya", "Soni", "Kavya", "Divya", "Shruti", "Nithya"],
    housewife: ["Radha", "Kamala", "Latha", "Padma", "Geetha", "Sumathi", "Vasantha", "Malathi"],
    "college-girls": ["Aishwarya", "Pooja", "Sneha", "Keerthi", "Harini", "Madhuri", "Rashmi", "Anjali"],
    models: ["Samantha", "Tamanna", "Nayanthara", "Rashmika", "Pooja", "Anushka", "Kajal", "Shruti"],
    artists: ["Lakshmi", "Saraswathi", "Meera", "Radha", "Kalyani", "Bharathi", "Sowmya", "Vidya"],
    celebrity: ["Priyanka", "Deepika", "Alia", "Kareena", "Katrina", "Anushka", "Sonam", "Kangana"],
    actress: ["Vijayashanthi", "Ramya", "Rakshita", "Haripriya", "Rashmika", "Sai", "Niveditha", "Shruthi"],
  };

  const profiles: Profile[] = [];
  let idCounter = 1;

  types.forEach((type, typeIndex) => {
    categories.forEach((category, categoryIndex) => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const seed = typeIndex * 1000 + categoryIndex * 100 + i;
        const nameIndex = seed % names[type].length;
        const locationIndex = seed % locations[type].length;
        const age = 22 + (seed % 11);
        const rating = 4 + (seed % 2) * 0.5;
        const reviewCount = 10 + (seed % 51);
        const categoryNameList = categoryNames[category] || [];
        const name = categoryNameList[i] || names[type][nameIndex] || "Unknown";
        const nameSlug = name.toLowerCase().replace(/\s+/g, "-");
        const localBase = `/images/${type}/${category}/${name}`;
        const profileId = nameSlug;
        const hasInstagram = !["regular", "housewife", "college-girls"].includes(category);
        const categoriesWithVideos = ["artists", "celebrity", "models", "actress"];
        const hasVideos =
          categoriesWithVideos.includes(category) || (seed % 2 === 0 && !categoriesWithVideos.includes(category));

        profiles.push({
          id: profileId,
          name,
          age,
          location: locations[type][locationIndex],
          type,
          category,
          tagline: getTagline(category, seed),
          bio: getBio(category, type, name, locations[type][locationIndex], age, seed),
          image: `${localBase}/1.avif`,
          images: [2, 3, 4, 5, 6].map((num) => `${localBase}/${num}.avif`),
          videos: hasVideos ? [1, 2, 3].map((n) => `${localBase}/v${n}.mp4`) : undefined,
          instagram: hasInstagram ? `${nameSlug}_official` : undefined,
          availability: ["Available Now", "Available Today", "Available This Week"][seed % 3],
          languages: getLanguages(type),
          services: getServices(category),
          telegram: "Tamil_Escorts",
          verified: (seed % 10) < 7,
          responseTime: ["Usually responds within 30 mins", "Usually responds within 1 hour", "Usually responds within 2 hours"][seed % 3],
          rating,
          reviewCount,
          price: getPrice(category, seed),
        });
        idCounter++;
      }
    });
  });

  return profiles;
}

const _allProfiles = generateProfiles();
const seenIds = new Map<string, number>();
const profilesWithUniqueIds = _allProfiles.map((profile) => {
  if (seenIds.has(profile.id)) {
    const count = (seenIds.get(profile.id) || 0) + 1;
    seenIds.set(profile.id, count);
    return { ...profile, id: `${profile.id}-${count}` };
  }
  seenIds.set(profile.id, 0);
  return profile;
});

export const allProfiles = profilesWithUniqueIds.sort((a, b) => a.id.localeCompare(b.id));
