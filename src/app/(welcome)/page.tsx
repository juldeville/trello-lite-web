"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function WelcomePage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">Welcome to Trello Lite</h1>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Your lightweight project management tool.
        </p>
        <div className="flex gap-4 mt-2">
          <Button asChild size="2xl" variant="brand">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild size="2xl" variant="outline">
            <Link href="/signin">Log In</Link>
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default WelcomePage;
