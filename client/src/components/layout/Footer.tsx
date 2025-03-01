import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">WebAgency</h3>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-muted-foreground hover:text-primary">{t("nav.home")}</a></Link></li>
              <li><Link href="/about"><a className="text-muted-foreground hover:text-primary">{t("nav.about")}</a></Link></li>
              <li><Link href="/portfolio"><a className="text-muted-foreground hover:text-primary">{t("nav.portfolio")}</a></Link></li>
              <li><Link href="/pricing"><a className="text-muted-foreground hover:text-primary">{t("nav.pricing")}</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary">{t("nav.contact")}</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@webagency.com</li>
              <li>+998 90 123 45 67</li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.social")}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Telegram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 WebAgency. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
