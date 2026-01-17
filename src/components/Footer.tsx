import { Shield } from "lucide-react";
import type { Language } from "@/lib/utils";

type FooterProps = {
  language: Language;
};

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              CYBER<span className="text-primary">SEC</span>
            </span>
          </div>
          
          <p className="font-mono text-sm text-muted-foreground">
            {language === "ja"
              ? `© ${currentYear} すべての権利を保有。セキュリティを第一に設計。`
              : `© ${currentYear} All rights reserved. Built with security in mind.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
