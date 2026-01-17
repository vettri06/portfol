import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Linkedin, Github, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Language } from "@/lib/utils";

type ContactSectionProps = {
  language: Language;
};

const ContactSection = ({ language }: ContactSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

    try {
      setIsSubmitting(true);

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        toast({
          title: language === "ja" ? "メッセージを送信しました" : "Message Sent!",
          description:
            language === "ja"
              ? "ご連絡ありがとうございます。折り返しご連絡いたします。"
              : "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        const subject =
          language === "ja"
            ? `ポートフォリオからの問い合わせ - ${formData.name || "新しいメッセージ"}`
            : `Portfolio Contact - ${formData.name || "New message"}`;
        const bodyLines = [
          `${language === "ja" ? "名前" : "Name"}: ${formData.name}`,
          `${language === "ja" ? "メール" : "Email"}: ${formData.email}`,
          "",
          formData.message,
        ];
        const mailto = `mailto:velvettri913@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          bodyLines.join("\n"),
        )}`;

        window.location.href = mailto;

        toast({
          title: language === "ja" ? "メールクライアントを開きます" : "Opening email client",
          description:
            language === "ja"
              ? "既定のメールアプリでメッセージを送信できます。"
              : "Your default mail app will be used to send the message.",
        });
      }

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: language === "ja" ? "メッセージを送信できませんでした" : "Unable to send message",
        description:
          language === "ja"
            ? "時間をおいて再度お試しいただくか、表示されているメールアドレスをご利用ください。"
            : "Please try again later or use the email address shown.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/vettrivel-v-b1b16434a", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/vettri06", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">
              {language === "ja" ? "// お問い合わせ" : "// contact"}
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            {language === "ja" ? "お問い合わせ" : "Get In"}{" "}
            {language === "ja" ? null : <span className="gradient-text">Touch</span>}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "ja"
              ? "セキュリティに関するご相談・機会があれば、ぜひご連絡ください。"
              : "Have a security challenge or opportunity? Let's connect."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 glow-border">
              <h3 className="font-mono text-xl font-bold text-foreground mb-6">
                {language === "ja" ? "連絡先情報" : "Contact Information"}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === "ja" ? "メール" : "Email"}
                    </p>
                    <a href="mailto:velvettri913@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      velvettri913@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === "ja" ? "所在地" : "Location"}
                    </p>
                    <span className="text-foreground">Thanjavur, India 613004</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === "ja" ? "電話" : "Phone"}
                    </p>
                    <a href="tel:+919092027263" className="text-foreground hover:text-primary transition-colors">
                      +91 9092027263
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6 glow-border">
              <h3 className="font-mono text-xl font-bold text-foreground mb-6">
                {language === "ja" ? "SNS でつながる" : "Connect With Me"}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-lg hover:glow hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 glow-border">
            <h3 className="font-mono text-xl font-bold text-foreground mb-6">
              {language === "ja" ? "メッセージを送る" : "Send a Message"}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-muted-foreground mb-2">
                  {language === "ja" ? "お名前" : "Name"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder={language === "ja" ? "お名前" : "Your name"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm text-muted-foreground mb-2">
                  {language === "ja" ? "メールアドレス" : "Email"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder={language === "ja" ? "your@email.com"
                    : "your@email.com"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm text-muted-foreground mb-2">
                  {language === "ja" ? "メッセージ" : "Message"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder={language === "ja" ? "メッセージ内容..." : "Your message..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg glow hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting
                  ? language === "ja"
                    ? "送信中..."
                    : "Sending..."
                  : language === "ja"
                    ? "送信する"
                    : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
