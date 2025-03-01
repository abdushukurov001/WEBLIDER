import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import Hero from "@/components/Hero";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };


  return (
    <div>
      <Hero/>
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("home.services.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "services.web.title", desc: "services.web.desc" },
              { icon: Code, title: "services.app.title", desc: "services.app.desc" },
              { icon: Zap, title: "services.marketing.title", desc: "services.marketing.desc" }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: i * 0.2 }}
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{t(service.title)}</h3>
                <p className="text-muted-foreground">{t(service.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("home.cta.title")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("home.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" asChild>
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