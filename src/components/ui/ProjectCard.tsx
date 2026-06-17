import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  images: string[];
  slug: string;
  type?: string;
};

export default function ProjectCard({ title, images, slug, type }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl">
      {/* IMAGE SLIDER */}
      <div className="relative h-[700px] overflow-hidden sm:h-[440px] lg:h-[520px] ">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={title}
            // loading="eager" and fetchpriority="high" ensures the current image is prioritized
            loading="eager"
            decoding="async"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className={`absolute inset-0 h-full w-full ${
    type === "mobile" ? "object-contain" : "object-cover"
  }`}
          />
        </AnimatePresence>

        {/* PRELOADER: Silently loads the next image in the background to avoid flickering */}
        {images.length > 1 && (
          <img
            key={`preload-${(currentIndex + 1) % images.length}`}
            src={images[(currentIndex + 1) % images.length]}
            style={{ display: "none" }}
            aria-hidden="true"
          />
        )}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /> */}
       <div className="absolute inset-0 h-full w-full transition duration-700 hover:scale-105" />

<div className="absolute top-0 left-0 z-20 w-full bg-white/90 px-5 py-4 backdrop-blur-sm">
  <h3 className="text-xl font-bold text-foreground sm:text-xl lg:text-2xl">
    {title}
  </h3>
</div>
       

        {/* DETAILS BUTTON */}
        <Link
          to={`/projects/${slug}`}
          className="absolute bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/60"
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
