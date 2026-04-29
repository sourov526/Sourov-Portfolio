import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "./site";

export const contactActions = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Facebook",
    href: siteConfig.facebook,
    icon: Facebook,
    external: true,
  },
  {
    label: "Email",
    href: siteConfig.email,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
    external: true,
  },
] as const;
