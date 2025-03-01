import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="  py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-bold text-2xl mb-4">WEBLIDER</h3>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">{t("nav.home")}</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">{t("nav.about")}</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">{t("nav.portfolio")}</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">{t("nav.pricing")}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@weblider.com</li>
              <li>+998 90 123 45 67</li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t("footer.social")}</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Telegram</a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 WEBLIDER. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
