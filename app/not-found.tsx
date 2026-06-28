"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useT();

  const copy =
    lang === "vi"
      ? {
          title: "Không tìm thấy trang",
          body: "Trang bạn tìm không tồn tại hoặc đã được chuyển đi.",
          home: "Về trang chủ",
        }
      : {
          title: "Page not found",
          body: "The page you are looking for doesn't exist or has moved.",
          home: "Back home",
        };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute right-[18%] top-1/4 h-96 w-96 animate-blob rounded-full bg-cyan-500/25 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-1/4 left-[18%] hidden h-96 w-96 animate-blob rounded-full bg-fuchsia-600/25 blur-3xl [animation-delay:8s] sm:block" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-glow shimmer-name text-8xl font-bold leading-none tracking-tight sm:text-9xl"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-2xl font-semibold sm:text-3xl"
      >
        {copy.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-4 max-w-md text-gray-400"
      >
        {copy.body}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10"
      >
        <Link
          href="/"
          className="glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          <ArrowLeft size={16} /> {copy.home}
        </Link>
      </motion.div>
    </main>
  );
}