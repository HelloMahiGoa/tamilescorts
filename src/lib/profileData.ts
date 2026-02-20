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
  price?: {
    hourly?: number;
    overnight?: number;
    extended?: number;
  };
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

const getBio = (category: Category, type: EscortType, name: string, location: string, age: number, seed: number): string => {
  const typeNames: Record<EscortType, string> = {
    tamil: "Tamil",
    mallu: "Mallu",
    telugu: "Telugu",
    kannada: "Kannada",
  };

  // Generate unique bio content based on seed to ensure each profile is different
  // Using seed to create variations while maintaining determinism
  const bioVariations = seed % 8; // 8 different variations per category
  
  const bioTemplates: Record<Category, string[]> = {
    regular: [
      `Hi, I'm ${name}, a ${typeNames[type]} companion based in ${location}. At ${age}, I've learned that the best connections happen when people can be themselves. I'm naturally curious and love hearing about different perspectives—whether we're discussing travel, food, books, or just sharing stories from our day. I believe good company makes any evening better, whether it's a quiet dinner at a favorite restaurant, exploring new places in the city, or simply having meaningful conversations. My approach is straightforward: I'm here to make you feel comfortable and ensure our time together feels genuine and relaxed. I appreciate honesty and respect, and I bring that same energy to every meeting. If you're looking for someone who's easy to talk to, genuinely interested in getting to know you, and knows how to keep things light and enjoyable, I'd love to connect.`,
      
      `I'm ${name}, ${age} years old, and I've been working as a ${typeNames[type]} escort in ${location} for a while now. What I love most about this is meeting people from all walks of life and creating moments that feel natural and comfortable. I'm the kind of person who can adapt to different situations—whether you need someone for a business dinner where conversation matters, a social event where you want good company, or just a relaxed evening where we can talk about anything. I'm well-read, enjoy good food, and I'm genuinely interested in people's stories. My clients often say I'm easy to be around, which I think comes from being authentic and not trying to be someone I'm not. I value discretion and respect, and I bring a calm, grounded presence to every meeting. If you're looking for genuine companionship without any pretense, I'm here.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} companion in ${location}, I bring a warm, approachable energy to every meeting. At ${age}, I've developed a good sense of what makes people comfortable and how to create an atmosphere where genuine connection can happen. I'm passionate about travel and have stories from various places I've visited, which often makes for interesting conversations. I also love trying new restaurants and exploring the local food scene—there's something special about sharing a good meal and good conversation. My style is relaxed and natural; I don't believe in putting on airs or pretending to be someone I'm not. I'm here to be good company, whether that means being a great listener, sharing laughs, or simply being present and engaged. I understand that everyone has different needs, and I'm flexible and understanding. If you're looking for someone who's real, respectful, and knows how to make an evening enjoyable, let's connect.`,
      
      `I'm ${name}, a ${typeNames[type]} escort based in ${location}. What sets me apart is my genuine interest in people and my ability to make anyone feel at ease. At ${age}, I've learned that the best evenings are those where conversation flows naturally and there's no pressure to be anything other than yourself. I'm well-educated, articulate, and I enjoy discussing a wide range of topics—from current events to art, music, and culture. I'm also someone who appreciates the simple pleasures: a good cup of coffee, a walk in a beautiful place, or just sitting and talking. My clients appreciate that I'm reliable, punctual, and professional, while also being warm and personable. I understand the importance of discretion and respect, and I bring that same level of care to every interaction. Whether you need someone for a formal event, a casual dinner, or just someone to spend time with, I'm here to make it a positive experience.`,
      
      `Hi there, I'm ${name}. As a ${typeNames[type]} companion in ${location}, I've made it my priority to create genuine, comfortable connections with the people I meet. At ${age}, I bring both maturity and a fresh perspective to every encounter. I'm someone who genuinely enjoys meeting new people and learning about their lives, interests, and experiences. I'm well-traveled, which gives me plenty of stories to share, and I'm always curious about different cultures and ways of life. I'm also passionate about fitness and wellness, which keeps me active and energetic. My personality is a mix of being outgoing when the situation calls for it, and being a good listener when someone needs to talk. I believe that good company is about being present, engaged, and authentic. I'm professional, discreet, and respectful, and I expect the same in return. If you're looking for someone who's real, interesting, and knows how to make any evening better, I'd be happy to connect.`,
      
      `I'm ${name}, ${age} years old, and I work as a ${typeNames[type]} escort in ${location}. What I love about this work is the opportunity to meet interesting people and create meaningful connections, even if they're brief. I'm naturally sociable and enjoy being around people, but I also know when to step back and let someone else take the lead. I'm well-read and stay informed about current events, which makes for engaging conversations. I also have a good sense of humor and don't take myself too seriously, which helps keep things light and fun. My approach is straightforward: I'm here to be good company, whether that means being a great conversationalist, a supportive listener, or simply someone pleasant to be around. I'm reliable, professional, and I understand the importance of boundaries and respect. I bring a positive, easygoing energy to every meeting, and I'm flexible enough to adapt to different situations and personalities. If you're looking for genuine companionship with someone who's real and easy to be around, let's talk.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} companion based in ${location}, I bring authenticity and warmth to every meeting. At ${age}, I've learned that the best connections happen when both people can be genuine and comfortable with each other. I'm someone who values good conversation and meaningful interactions, whether we're discussing serious topics or sharing lighthearted moments. I'm well-educated and articulate, and I enjoy engaging with people who have interesting perspectives and stories to share. I'm also someone who appreciates the arts—I love going to galleries, concerts, and cultural events, which often provides great conversation starters. My personality is balanced: I can be outgoing and engaging when needed, but I'm also comfortable with quiet, intimate moments. I understand that everyone has different needs and preferences, and I'm adaptable and understanding. I'm professional, discreet, and respectful, and I bring that same level of care to every interaction. If you're looking for someone who's genuine, interesting, and knows how to make an evening special, I'm here.`,
      
      `I'm ${name}, a ${typeNames[type]} escort in ${location}. What I bring to every meeting is a genuine desire to connect and create positive experiences. At ${age}, I've developed a good understanding of people and what makes them comfortable. I'm naturally empathetic and a good listener, which means I can pick up on what someone needs and adapt accordingly. I'm also someone who enjoys learning and staying curious about the world—I read widely, follow various interests, and I'm always open to new experiences. This makes me someone who can engage in conversations about many different topics. I'm also someone who values balance: I can be fun and energetic when the situation calls for it, but I'm also comfortable with quieter, more intimate moments. My clients appreciate that I'm reliable, professional, and easy to be around. I understand the importance of discretion and respect, and I bring that same level of care to every meeting. If you're looking for someone who's real, engaging, and knows how to make any evening better, let's connect.`,
    ],
    housewife: [
      `I'm ${name}, a mature ${typeNames[type]} companion in ${location}. At ${age}, I bring life experience, wisdom, and a calm, grounded presence to every meeting. Having navigated various aspects of life, I understand what it means to need someone who listens without judgment and offers genuine companionship. I'm someone who values meaningful conversations and connections that go beyond surface-level interactions. I appreciate the simple pleasures in life—good food, good conversation, and moments of genuine connection. My approach is warm and understanding; I know that sometimes people just need someone to talk to, someone who gets it without needing everything explained. I'm discreet, professional, and I understand the importance of boundaries and respect. I bring a nurturing, supportive energy to every meeting, and I'm someone who can make you feel comfortable and understood. If you're looking for mature companionship with someone who's real, grounded, and knows how to create a safe, comfortable space, I'm here.`,
      
      `Hello, I'm ${name}. As a mature ${typeNames[type]} escort based in ${location}, I offer companionship that comes from a place of understanding and life experience. At ${age}, I've learned that the best connections are built on mutual respect, genuine interest, and the ability to be present with someone. I'm someone who values authenticity and real conversations—I'm not interested in pretense or playing games. I'm well-read, articulate, and I enjoy discussing a wide range of topics, from literature and philosophy to everyday life and experiences. I'm also someone who appreciates quiet moments and meaningful interactions. My clients often say they appreciate my ability to listen and understand, and my calm, reassuring presence. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a warm, nurturing energy to every meeting, and I'm someone who can make you feel comfortable and valued. If you're looking for mature companionship with someone who's genuine, understanding, and knows how to create meaningful connections, let's talk.`,
      
      `I'm ${name}, ${age} years old, and I work as a ${typeNames[type]} companion in ${location}. What I bring to this work is maturity, wisdom, and a genuine desire to connect with people in meaningful ways. Having experienced various aspects of life, I understand what it means to need someone who's present, understanding, and non-judgmental. I'm someone who values good conversation and connections that feel real and authentic. I'm well-educated and articulate, and I enjoy engaging with people who have interesting perspectives and stories to share. I'm also someone who appreciates the arts, culture, and the simple pleasures in life. My approach is warm and grounded; I know how to create an atmosphere where people feel comfortable being themselves. I'm discreet, professional, and I understand the importance of boundaries and respect. I bring a calm, supportive energy to every meeting, and I'm someone who can make you feel heard and understood. If you're looking for mature companionship with someone who's real, wise, and knows how to create meaningful moments, I'm here.`,
      
      `Hi, I'm ${name}. As a mature ${typeNames[type]} escort in ${location}, I offer companionship that comes from a place of understanding and life experience. At ${age}, I've learned that the best connections happen when people can be genuine with each other. I'm someone who values authenticity and real conversations—I'm not interested in superficial interactions or playing roles. I'm well-read, articulate, and I enjoy discussing a wide range of topics, from current events to personal experiences and everything in between. I'm also someone who appreciates quiet moments and meaningful interactions. My clients often say they appreciate my ability to listen and understand, and my calm, reassuring presence. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a warm, nurturing energy to every meeting, and I'm someone who can make you feel comfortable and valued. If you're looking for mature companionship with someone who's genuine, understanding, and knows how to create meaningful connections, let's connect.`,
    ],
    "college-girls": [
      `Hi, I'm ${name}! I'm ${age} years old and I'm a ${typeNames[type]} student/professional in ${location}. I'm young, energetic, and I love meeting new people and experiencing new things. I'm currently balancing my studies/work with this, and I find it exciting to connect with different people and learn about their lives. I'm someone who's naturally curious and open-minded, which makes me great at conversations about pretty much anything. I love talking about music, movies, travel, food, and all the things that make life interesting. I'm also someone who knows how to have fun and keep things light and enjoyable. My personality is bubbly and outgoing, but I also know when to be more relaxed and chill. I'm professional and respectful, and I understand the importance of boundaries and discretion. I bring a fresh, positive energy to every meeting, and I'm someone who can make any evening more fun and interesting. If you're looking for someone young, vibrant, and easy to be around, I'm here!`,
      
      `Hello! I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location}. I'm young, fun-loving, and I bring a fresh perspective to every meeting. I'm currently studying/working, and I enjoy the balance between my regular life and meeting interesting people through this. I'm naturally sociable and I love being around people—I find it energizing to connect with different personalities and learn about their experiences. I'm someone who's open to new experiences and I'm always up for trying something new, whether it's a new restaurant, a new activity, or just exploring different parts of the city. I'm well-informed about current trends, music, and pop culture, which makes for fun conversations. I'm also someone who knows how to adapt to different situations—I can be fun and energetic when needed, but I'm also comfortable with quieter, more intimate moments. I'm professional, discreet, and I understand the importance of respect and boundaries. If you're looking for someone young, vibrant, and easy to connect with, let's talk!`,
      
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion based in ${location}. I'm young, energetic, and I bring a positive, fresh energy to every meeting. I'm currently balancing my studies/work with this, and I find it exciting to meet different people and learn about their lives and experiences. I'm someone who's naturally curious and open-minded, which makes me great at conversations about a wide range of topics. I love talking about travel, food, music, movies, and all the things that make life interesting. I'm also someone who knows how to have fun and keep things light and enjoyable. My personality is bubbly and outgoing, but I also know when to be more relaxed and chill. I'm professional and respectful, and I understand the importance of boundaries and discretion. I bring a fresh, positive energy to every meeting, and I'm someone who can make any evening more fun and interesting. If you're looking for someone young, vibrant, and easy to be around, I'm here!`,
      
      `Hi there! I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location}. I'm young, fun-loving, and I bring a fresh perspective to every meeting. I'm currently studying/working, and I enjoy the balance between my regular life and meeting interesting people through this. I'm naturally sociable and I love being around people—I find it energizing to connect with different personalities and learn about their experiences. I'm someone who's open to new experiences and I'm always up for trying something new, whether it's a new restaurant, a new activity, or just exploring different parts of the city. I'm well-informed about current trends, music, and pop culture, which makes for fun conversations. I'm also someone who knows how to adapt to different situations—I can be fun and energetic when needed, but I'm also comfortable with quieter, more intimate moments. I'm professional, discreet, and I understand the importance of respect and boundaries. If you're looking for someone young, vibrant, and easy to connect with, let's connect!`,
    ],
    artists: [
      `I'm ${name}, a ${typeNames[type]} artist and performer based in ${location}. At ${age}, I've dedicated my life to the arts, and I bring that creative energy and passion to every meeting. I've performed on various stages, worked on different projects, and I love sharing stories from my artistic journey. I'm someone who's naturally expressive and creative, which makes me great at connecting with people who appreciate culture, art, and creativity. I'm well-versed in various art forms, and I enjoy discussing music, dance, theater, and visual arts. I'm also someone who appreciates good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, passionate energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone creative, expressive, and knows how to bring something special to every encounter, I'm here.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} artist and performer in ${location}, I bring creativity, passion, and a unique perspective to every meeting. At ${age}, I've spent years developing my craft and performing on various stages, which has given me confidence, presence, and the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and creative, which makes me great at conversations about art, culture, and creativity. I'm well-versed in various art forms, and I enjoy discussing music, dance, theater, and visual arts. I'm also someone who appreciates good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, passionate energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone creative, expressive, and knows how to bring something special to every encounter, let's talk.`,
      
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} artist and performer in ${location}. I've dedicated my life to the arts, and I bring that creative energy and passion to every meeting. I've performed on various stages, worked on different projects, and I love sharing stories from my artistic journey. I'm someone who's naturally expressive and creative, which makes me great at connecting with people who appreciate culture, art, and creativity. I'm well-versed in various art forms, and I enjoy discussing music, dance, theater, and visual arts. I'm also someone who appreciates good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, passionate energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone creative, expressive, and knows how to bring something special to every encounter, I'm here.`,
      
      `Hi, I'm ${name}. As a ${typeNames[type]} artist and performer based in ${location}, I bring creativity, passion, and a unique perspective to every meeting. At ${age}, I've spent years developing my craft and performing on various stages, which has given me confidence, presence, and the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and creative, which makes me great at conversations about art, culture, and creativity. I'm well-versed in various art forms, and I enjoy discussing music, dance, theater, and visual arts. I'm also someone who appreciates good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, passionate energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone creative, expressive, and knows how to bring something special to every encounter, let's connect.`,
    ],
    models: [
      `I'm ${name}, a ${typeNames[type]} model based in ${location}. At ${age}, I've worked in fashion and modeling for several years, which has given me confidence, poise, and the ability to carry myself well in any situation. I'm someone who's naturally photogenic and comfortable in front of the camera, but I'm also great at connecting with people in real life. I'm well-versed in fashion, style, and trends, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is confident and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a stylish, confident energy to every meeting, and I'm someone who can make any evening more elegant and interesting. If you're looking for someone who's photogenic, stylish, and knows how to make a great impression, I'm here.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} model in ${location}, I bring style, confidence, and elegance to every meeting. At ${age}, I've worked in fashion and modeling for several years, which has given me the ability to carry myself well in any situation. I'm someone who's naturally photogenic and comfortable in front of the camera, but I'm also great at connecting with people in real life. I'm well-versed in fashion, style, and trends, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is confident and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a stylish, confident energy to every meeting, and I'm someone who can make any evening more elegant and interesting. If you're looking for someone who's photogenic, stylish, and knows how to make a great impression, let's talk.`,
      
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} model in ${location}. I've worked in fashion and modeling for several years, which has given me confidence, poise, and the ability to carry myself well in any situation. I'm someone who's naturally photogenic and comfortable in front of the camera, but I'm also great at connecting with people in real life. I'm well-versed in fashion, style, and trends, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is confident and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a stylish, confident energy to every meeting, and I'm someone who can make any evening more elegant and interesting. If you're looking for someone who's photogenic, stylish, and knows how to make a great impression, I'm here.`,
      
      `Hi, I'm ${name}. As a ${typeNames[type]} model based in ${location}, I bring style, confidence, and elegance to every meeting. At ${age}, I've worked in fashion and modeling for several years, which has given me the ability to carry myself well in any situation. I'm someone who's naturally photogenic and comfortable in front of the camera, but I'm also great at connecting with people in real life. I'm well-versed in fashion, style, and trends, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is confident and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a stylish, confident energy to every meeting, and I'm someone who can make any evening more elegant and interesting. If you're looking for someone who's photogenic, stylish, and knows how to make a great impression, let's connect.`,
    ],
    actress: [
      `I'm ${name}, a ${typeNames[type]} actress based in ${location}. At ${age}, I've trained in performance arts and worked on various projects, which has given me confidence, presence, and the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and knows how to read a room, which makes me great at adapting to different situations and personalities. I'm well-versed in theater, film, and performance, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, expressive energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone who's expressive, confident, and knows how to bring presence and charm to every encounter, I'm here.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} actress in ${location}, I bring creativity, confidence, and presence to every meeting. At ${age}, I've trained in performance arts and worked on various projects, which has given me the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and knows how to read a room, which makes me great at adapting to different situations and personalities. I'm well-versed in theater, film, and performance, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, expressive energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone who's expressive, confident, and knows how to bring presence and charm to every encounter, let's talk.`,
      
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} actress in ${location}. I've trained in performance arts and worked on various projects, which has given me confidence, presence, and the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and knows how to read a room, which makes me great at adapting to different situations and personalities. I'm well-versed in theater, film, and performance, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, expressive energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone who's expressive, confident, and knows how to bring presence and charm to every encounter, I'm here.`,
      
      `Hi, I'm ${name}. As a ${typeNames[type]} actress based in ${location}, I bring creativity, confidence, and presence to every meeting. At ${age}, I've trained in performance arts and worked on various projects, which has given me the ability to connect with people in meaningful ways. I'm someone who's naturally expressive and knows how to read a room, which makes me great at adapting to different situations and personalities. I'm well-versed in theater, film, and performance, and I enjoy discussing these topics with people who appreciate them. I'm also someone who values good conversation and meaningful connections. My personality is vibrant and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of boundaries and respect. I bring a creative, expressive energy to every meeting, and I'm someone who can make any evening more interesting and engaging. If you're looking for someone who's expressive, confident, and knows how to bring presence and charm to every encounter, let's connect.`,
    ],
    celebrity: [
      `I'm ${name}, a ${typeNames[type]} companion in ${location} who understands what it means to be in the public eye. At ${age}, I've learned the value of discretion, privacy, and keeping things special. I'm someone who knows how to handle attention gracefully and understands the importance of maintaining boundaries. I'm well-versed in various topics and I enjoy engaging conversations with people who appreciate sophistication and elegance. I'm also someone who values genuine connections and meaningful interactions. My personality is refined and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a sophisticated, elegant energy to every meeting, and I'm someone who can make any evening more special and memorable. If you're looking for someone who understands discretion, knows how to handle attention, and brings sophistication to every encounter, I'm here.`,
      
      `Hello, I'm ${name}. As a ${typeNames[type]} companion in ${location}, I bring sophistication, discretion, and elegance to every meeting. At ${age}, I've learned the value of privacy and keeping things special. I'm someone who knows how to handle attention gracefully and understands the importance of maintaining boundaries. I'm well-versed in various topics and I enjoy engaging conversations with people who appreciate sophistication and elegance. I'm also someone who values genuine connections and meaningful interactions. My personality is refined and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a sophisticated, elegant energy to every meeting, and I'm someone who can make any evening more special and memorable. If you're looking for someone who understands discretion, knows how to handle attention, and brings sophistication to every encounter, let's talk.`,
      
      `I'm ${name}, ${age} years old, and I'm a ${typeNames[type]} companion in ${location} who understands what it means to be in the public eye. I've learned the value of discretion, privacy, and keeping things special. I'm someone who knows how to handle attention gracefully and understands the importance of maintaining boundaries. I'm well-versed in various topics and I enjoy engaging conversations with people who appreciate sophistication and elegance. I'm also someone who values genuine connections and meaningful interactions. My personality is refined and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a sophisticated, elegant energy to every meeting, and I'm someone who can make any evening more special and memorable. If you're looking for someone who understands discretion, knows how to handle attention, and brings sophistication to every encounter, I'm here.`,
      
      `Hi, I'm ${name}. As a ${typeNames[type]} companion based in ${location}, I bring sophistication, discretion, and elegance to every meeting. At ${age}, I've learned the value of privacy and keeping things special. I'm someone who knows how to handle attention gracefully and understands the importance of maintaining boundaries. I'm well-versed in various topics and I enjoy engaging conversations with people who appreciate sophistication and elegance. I'm also someone who values genuine connections and meaningful interactions. My personality is refined and engaging, but I also know how to be more intimate and personal when the situation calls for it. I'm professional, discreet, and I understand the importance of privacy and respect. I bring a sophisticated, elegant energy to every meeting, and I'm someone who can make any evening more special and memorable. If you're looking for someone who understands discretion, knows how to handle attention, and brings sophistication to every encounter, let's connect.`,
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
  // Base prices vary by category, with slight variation based on seed
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
  const variation = (seed % 5) * 1000; // ±0-4000 variation
  
  return {
    hourly: base.hourly + variation,
    overnight: base.overnight + (variation * 2),
    extended: base.extended + (variation * 3),
  };
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

  // Category-specific names (8 names per category)
  const categoryNames: Record<Category, string[]> = {
    regular: ["Aadhini", "Deepti", "Iniya", "Soni", "Kavya", "Divya", "Shruti", "Nithya"],
    housewife: ["Radha", "Kamala", "Latha", "Padma", "Geetha", "Sumathi", "Vasantha", "Malathi"],
    "college-girls": ["Aishwarya", "Pooja", "Sneha", "Keerthi", "Harini", "Madhuri", "Rashmi", "Anjali"],
    models: ["Samantha", "Tamanna", "Nayanthara", "Rashmika", "Pooja", "Anushka", "Kajal", "Shruti"],
    artists: ["Lakshmi", "Saraswathi", "Meera", "Radha", "Kalyani", "Bharathi", "Sowmya", "Vidya"],
    celebrity: ["Priyanka", "Deepika", "Alia", "Kareena", "Katrina", "Anushka", "Sonam", "Kangana"],
    actress: ["Vijayashanthi", "Ramya", "Rakshita", "Haripriya", "Rashmika", "Sai", "Niveditha", "Shruthi"],
  };

  // Generate profiles in a fixed, deterministic order
  types.forEach((type, typeIndex) => {
    categories.forEach((category, categoryIndex) => {
      // Generate 8 profiles per category (all categories now have 8)
      const count = 8;
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

        // Use category-specific names for all profiles
        const categoryNameList = categoryNames[category] || [];
        const name = categoryNameList[i] || names[type][nameIndex] || "Unknown";
        
        // Use local images from /images/{type}/{category}/{Name}/ folder structure
        // All profiles use local images
        const nameSlug = name.toLowerCase().replace(/\s+/g, "-");
        const localBase = `/images/${type}/${category}/${name}`; // Use capitalized name for folder

        // Use name slug as ID (URL path includes type/category, so name slug is sufficient)
        const profileId = nameSlug;

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
          images: [2, 3, 4].map((num) => `${localBase}/${num}.avif`), // Default gallery: 2.avif, 3.avif, 4.avif
          availability: ["Available Now", "Available Today", "Available This Week"][seed % 3],
          languages: getLanguages(type),
          services: getServices(category),
          telegram: "LillyBabe_chennai",
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

// Generate profiles once and sort by id to ensure completely stable order
const _allProfiles = generateProfiles();
// Ensure unique IDs - if duplicates exist, append counter
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

export const getProfilesByTypeAndCategory = (type: EscortType, category: Category): Profile[] => {
  // Filter and sort by id to ensure consistent order
  return allProfiles
    .filter((p) => p.type === type && p.category === category)
    .sort((a, b) => a.id.localeCompare(b.id));
};

export const getProfileById = (id: string): Profile | undefined => {
  return allProfiles.find((p) => p.id === id);
};

// Simple seeded random number generator for deterministic randomness
function seededRandom(seed: number): () => number {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export const getRelatedProfiles = (profile: Profile, limit: number = 4): Profile[] => {
  // Get profiles from the same type AND category (excluding current profile)
  const sameTypeCategoryProfiles = allProfiles.filter(
    (p) => p.id !== profile.id && p.type === profile.type && p.category === profile.category
  );
  
  // Use profile ID as seed for deterministic randomness (same profile always gets same related profiles)
  const seed = profile.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = seededRandom(seed);
  
  // Shuffle array using Fisher-Yates algorithm with seeded random
  const shuffled = [...sameTypeCategoryProfiles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, limit);
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
