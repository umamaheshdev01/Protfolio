"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a passionate student deeply immersed in the world of web development, particularly in the MERN stack. My journey has involved creating various web projects, equipping me with a solid foundation in building dynamic and user-friendly web applications..
      </p>

      <p>
      In addition to web development, I'm currently exploring the exciting field of data science. During my free time, you'll find me enjoying movies, reading books, and sharing my thoughts through blogging.
      </p>
    </motion.section>
  );
}
