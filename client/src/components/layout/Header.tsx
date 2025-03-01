import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 w-full border-b dark:border-gray-700 bg-white dark:bg-black z-50 transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <a className="font-bold text-2xl tracking-wide text-black dark:text-white">
            WEBLIDER
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`transition-colors duration-300 text-lg ${
                  location === item.href
                    ? "text-red-600 dark:text-red-500 font-semibold"
                    : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-400"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-black text-black dark:text-white border-l dark:border-gray-700">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className={`text-lg ${
                        location === item.href
                          ? "text-red-600 dark:text-red-500 font-semibold"
                          : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
