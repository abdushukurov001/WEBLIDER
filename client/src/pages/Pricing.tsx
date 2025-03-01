import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const plans = [
    {
      name: "pricing.basic.name",
      price: "pricing.basic.price",
      description: "pricing.basic.description",
      features: [
        "pricing.basic.features.f1",
        "pricing.basic.features.f2",
        "pricing.basic.features.f3",
        "pricing.basic.features.f4"
      ]
    },
    {
      name: "pricing.professional.name",
      price: "pricing.professional.price",
      description: "pricing.professional.description",
      features: [
        "pricing.professional.features.f1",
        "pricing.professional.features.f2",
        "pricing.professional.features.f3",
        "pricing.professional.features.f4",
        "pricing.professional.features.f5"
      ],
      popular: true
    },
    {
      name: "pricing.enterprise.name",
      price: "pricing.enterprise.price",
      description: "pricing.enterprise.description",
      features: [
        "pricing.enterprise.features.f1",
        "pricing.enterprise.features.f2",
        "pricing.enterprise.features.f3",
        "pricing.enterprise.features.f4",
        "pricing.enterprise.features.f5",
        "pricing.enterprise.features.f6"
      ]
    }
  ];

  return (
    <div className="pt-24">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl font-bold mb-6">{t("pricing.title")}</h1>
          <p className="text-xl text-muted-foreground">{t("pricing.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-lg p-8 bg-card ${plan.popular ? 'border-2 border-primary' : 'border border-border'}`}
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: i * 0.2 }}
            >
              {plan.popular && (
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{t(plan.name)}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{t(plan.price)}</span>
                <span className="text-muted-foreground ml-2">{t("pricing.perMonth")}</span>
              </div>
              <p className="text-muted-foreground mb-6">{t(plan.description)}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                <Link href="/contact">
                  {t("pricing.getStarted")}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
