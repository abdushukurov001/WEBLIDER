import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const filters = [
    { id: "all", label: t("portfolio.filters.all") },
    { id: "web", label: t("portfolio.filters.web") },
    { id: "mobile", label: t("portfolio.filters.mobile") },
    { id: "design", label: t("portfolio.filters.design") },
  ];

  const projects = [
    { id: 1, type: "web", title: "portfolio.projects.1.title", desc: "portfolio.projects.1.desc" },
    { id: 2, type: "mobile", title: "portfolio.projects.2.title", desc: "portfolio.projects.2.desc" },
    { id: 3, type: "design", title: "portfolio.projects.3.title", desc: "portfolio.projects.3.desc" },
    { id: 4, type: "web", title: "portfolio.projects.4.title", desc: "portfolio.projects.4.desc" },
    { id: 5, type: "mobile", title: "portfolio.projects.5.title", desc: "portfolio.projects.5.desc" },
    { id: 6, type: "design", title: "portfolio.projects.6.title", desc: "portfolio.projects.6.desc" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="pt-24">
      <div className="container">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl font-bold mb-6">{t("portfolio.title")}</h1>
          <p className="text-xl text-muted-foreground">{t("portfolio.subtitle")}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {filters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "default" : "outline"}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
            >
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
                <p className="text-muted-foreground">{t(project.desc)}</p>
              </div>
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary">
                  {t("portfolio.viewProject")}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
