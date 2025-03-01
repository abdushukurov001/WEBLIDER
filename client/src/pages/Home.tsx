import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container">
          <motion.div 
            className="max-w-3xl"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">{t("home.hero.cta")}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">{t("home.hero.portfolio")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h2 className="text-3xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("home.services.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "services.web.title", desc: "services.web.desc" },
              { icon: Code, title: "services.app.title", desc: "services.app.desc" },
              { icon: Zap, title: "services.marketing.title", desc: "services.marketing.desc" }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: i * 0.2 }}
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t(service.title)}</h3>
                <p className="text-muted-foreground">{t(service.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h2 className="text-3xl font-bold mb-4">{t("home.cta.title")}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
            <Button asChild size="lg">
              <Link href="/contact">
                {t("home.cta.button")} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
