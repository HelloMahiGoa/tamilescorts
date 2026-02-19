"use client";

import { useState, useCallback, useEffect } from "react";

export type StoryItem = {
  title: string;
  author: string;
  year: string;
  story: string;
  tag: string;
};

const STORIES: StoryItem[] = [
  {
    title: "I was so nervous before my first booking",
    author: "R., Chennai",
    year: "2024",
    story:
      "I had a big office dinner coming up and didn’t want to go alone. I’d never used a service like this before, so I was nervous and had a lot of questions. The person I spoke to was really patient and helped me choose someone who’d be a good fit. On the day, she was on time, looked great, and we had a nice evening. Nobody at the table had a clue—they just thought she was a friend. I was relieved and would do it again.",
    tag: "First-time client",
  },
  {
    title: "Exactly what I needed after a long trip",
    author: "K., Bangalore",
    year: "2024",
    story:
      "I travel to South India often for work and used to spend most evenings alone in the hotel. This time I decided to try your service. The girl who came was friendly, spoke my language, and we had a proper dinner and a good chat. Felt like having a friend in the city. No drama, no hassle. I’ve booked again since then.",
    tag: "Regular client",
  },
  {
    title: "She made my birthday evening special",
    author: "M., Hyderabad",
    year: "2024",
    story:
      "I wanted someone nice to join me for my birthday—just dinner and maybe a drink, nothing over the top. You suggested someone who was easy to talk to and well dressed. She got along with my friends and the whole evening felt natural. I got a lot of compliments. Thanks for making it smooth and discreet.",
    tag: "Birthday booking",
  },
];

export default function StoriesCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (next: number) => {
      if (next < 0) {
        setDirection("left");
        setIndex(STORIES.length - 1);
      } else if (next >= STORIES.length) {
        setDirection("right");
        setIndex(0);
      } else {
        setDirection(next > index ? "right" : "left");
        setIndex(next);
      }
    },
    [index]
  );

  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(id);
  }, [index, goTo]);

  const story = STORIES[index];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[var(--accent-gold)]/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[var(--accent-gold)]/20 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
            Stories from Our Heart
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every client has a story, and every story touches our hearts.
          </p>
        </div>

        {/* Sliding card */}
        <div className="relative min-h-[320px] sm:min-h-[280px]">
          <div
            key={index}
            className="bg-[var(--card-bg)] backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl border-l-4 border-[var(--accent-gold)] border border-[var(--border-color)]"
            style={{
              animation: direction === "right"
                ? "slideInFromRight 0.4s ease-out"
                : "slideInFromLeft 0.4s ease-out",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{story.title}</h3>
                <p className="text-sm text-white/60">
                  {story.author} • {story.year}
                </p>
              </div>
              <span className="text-xs font-medium text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-3 py-1 rounded-full">
                {story.tag}
              </span>
            </div>
            <p className="text-white/80 italic leading-relaxed mb-4">"{story.story}"</p>
            <div className="text-xs text-white/50 font-medium">Real Experience</div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:text-[var(--accent-gold)]"
            aria-label="Previous story"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {STORIES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[var(--accent-gold)]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:text-[var(--accent-gold)]"
            aria-label="Next story"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
