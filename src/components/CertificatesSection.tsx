import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Language } from "@/lib/utils";

type CertificateItem = {
  key: string;
  imageSrc: string;
  labels: {
    ja: string;
    en: string;
  };
};

type CertificateCategory = {
  code: string;
  titles: {
    ja: string;
    en: string;
  };
  provider: {
    ja: string;
    en: string;
  };
  items: CertificateItem[];
};

const certificateCategories: CertificateCategory[] = [
  {
    code: "COURSE",
    titles: {
      ja: "Coursera コース修了証",
      en: "Coursera Course Certificates",
    },
    provider: {
      ja: "Coursera",
      en: "Coursera",
    },
    items: [
      {
        key: "ai-course",
        imageSrc: "/img/ai.png",
        labels: {
          ja: "AI コース修了証",
          en: "AI Course Certificate",
        },
      },
      {
        key: "daa-course",
        imageSrc: "/img/DAA_Coursera_page-0001.jpg",
        labels: {
          ja: "DAA コース修了証",
          en: "DAA Course Certificate",
        },
      },
      {
        key: "dbms-course",
        imageSrc: "/img/dbms.png",
        labels: {
          ja: "DBMS コース修了証",
          en: "DBMS Course Certificate",
        },
      },
    ],
  },
  {
    code: "COMP",
    titles: {
      ja: "コンペティション・イベント認定証",
      en: "Competition & Event Certificates",
    },
    provider: {
      ja: "各種主催",
      en: "Various Organizers",
    },
    items: [
      {
        key: "adobe-hackathon",
        imageSrc: "/img/adobe india hackathon.jpg",
        labels: {
          ja: "Adobe India Hackathon",
          en: "Adobe India Hackathon",
        },
      },
      {
        key: "inovertex-vit",
        imageSrc: "/img/inovertex_vit.jpg",
        labels: {
          ja: "Inovertex VIT",
          en: "Inovertex VIT",
        },
      },
      {
        key: "osint-challenge",
        imageSrc: "/img/osint challenge.jpg",
        labels: {
          ja: "OSINT Challenge",
          en: "OSINT Challenge",
        },
      },
      {
        key: "osint-firstedition",
        imageSrc: "/img/osint_challenge _firstedition.jpg",
        labels: {
          ja: "OSINT Challenge First Edition",
          en: "OSINT Challenge First Edition",
        },
      },
    ],
  },
  {
    code: "BS DS",
    titles: {
      ja: "デュアルディグリー: IITM BS Data Science",
      en: "Dual Degree: IITM BS Data Science",
    },
    provider: {
      ja: "IIT マドラス",
      en: "IIT Madras",
    },
    items: [
      {
        key: "bsds-foundation",
        imageSrc: "/img/iitmbsdatascience_foundation_page-0001.jpg",
        labels: {
          ja: "Foundation 修了証",
          en: "Foundation Certificate",
        },
      },
    ],
  },
];

type CertificatesSectionProps = {
  language: Language;
};

const CertificatesSection = ({ language }: CertificatesSectionProps) => {
  const [activeImage, setActiveImage] = useState<CertificateItem | null>(null);

  const sectionTitle = language === "ja" ? "認定証" : "Certificates";
  const sectionSubtitle =
    language === "ja"
      ? "AI、データサイエンス、セキュリティ分野で取得したコース・イベントの認定証です。"
      : "Course and event certificates across AI, data science, and security.";

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">
              {language === "ja" ? "// 認定証" : "// certificates"}
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">{sectionTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificateCategories.map((category) => (
            <Card key={category.code} className="glass glow-border border-none bg-card/60">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    {category.code}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {category.provider[language]}
                  </span>
                </div>
                <CardTitle className="font-mono text-lg md:text-xl">
                  {category.titles[language]}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {language === "ja"
                    ? "コース修了証と関連イベントの認定証をまとめて表示しています。"
                    : "Course certificates paired with related event and challenge certificates."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.key}
                      className="space-y-2 group cursor-pointer"
                      onClick={() => setActiveImage(item)}
                    >
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.labels[language]}
                      </p>
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          <img
                            src={item.imageSrc}
                            alt={item.labels[language]}
                            className="h-full w-full object-cover bg-secondary transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-4 py-2 rounded-full bg-background/80 text-xs font-mono text-foreground shadow-lg">
                              {language === "ja" ? "画像を表示" : "View image"}
                            </span>
                          </div>
                        </div>
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!activeImage}
        onOpenChange={(open) => {
          if (!open) {
            setActiveImage(null);
          }
        }}
      >
        <DialogContent className="max-w-3xl">
          {activeImage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-mono text-base">
                  {activeImage.labels[language]}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={activeImage.imageSrc}
                    alt={activeImage.labels[language]}
                    className="h-full w-full rounded-lg object-contain bg-secondary"
                  />
                </AspectRatio>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
