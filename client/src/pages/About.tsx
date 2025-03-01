import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      <div className="container">
        {/* Hero */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl font-bold mb-6">{t("about.title")}</h1>
          <p className="text-xl text-muted-foreground">{t("about.subtitle")}</p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{t("about.mission.title")}</h2>
            <p className="text-muted-foreground">{t("about.mission.desc")}</p>
          </motion.div>

          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{t("about.vision.title")}</h2>
            <p className="text-muted-foreground">{t("about.vision.desc")}</p>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">{t("about.team.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t(`about.team.member${member}.name`)}</h3>
                <p className="text-muted-foreground">{t(`about.team.member${member}.role`)}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
