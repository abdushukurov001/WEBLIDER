import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";

const Hero = () => {
    const { t } = useTranslation();

    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-white dark:from-gray-900 dark:to-black transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-[1000px] mx-auto text-center text-black dark:text-white"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-80">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-400"
              asChild
            >
              <Link href="/contact">{t("home.hero.cta")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 hover:border-red-700 dark:hover:border-red-300 hover:text-red-700 dark:hover:text-red-300"
              asChild
            >
              <Link href="/portfolio">{t("home.hero.portfolio")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero