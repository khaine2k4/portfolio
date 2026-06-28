"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import { Music } from "lucide-react";

export default function Spotify() {
  const { t } = useT();
  const [loaded, setLoaded] = useState(false);

  return (
    <Section id="music" subtitle={t.music.subtitle} title={t.music.title} index="05">
      <Reveal>
        <div className="gradient-border rounded-2xl border border-white/5 p-6">
          <p className="mb-4 flex items-center gap-2 text-gray-400">
            <Music size={18} className="text-accent" />
            {t.music.note}
          </p>
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col gap-4 rounded-xl border border-white/5 bg-surface p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 animate-pulse rounded-lg bg-white/10" />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="h-3 w-2/5 animate-pulse rounded bg-white/10" />
                    <div className="h-3 w-1/4 animate-pulse rounded bg-white/5" />
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-9 w-9 animate-pulse rounded bg-white/10" />
                      <div className="h-3 flex-1 animate-pulse rounded bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <iframe
              title="Spotify Player"
              src={site.spotify}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className={`h-full w-full rounded-xl transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}