import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../../config";
import SectionHeading from "../ui/SectionHeading";

interface SocialLink {
  label: string
  url: string
  icon: string
  detail: string
}

const links: SocialLink[] = [
  {
    label: "GitHub",
    url: `https://github.com/${socialLinks.github}`,
    icon: "GH",
    detail: "Code, systems projects, and experiments",
  },
  {
    label: "LinkedIn",
    url: `https://linkedin.com/in/${socialLinks.linkedin}`,
    icon: "LI",
    detail: "Professional background and direct outreach",
  },
  {
    label: "Email",
    url: `mailto:${socialLinks.email}`,
    icon: "@",
    detail: socialLinks.email,
  },
];

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-bg2 dark:bg-bg2-dark border border-borderMuted dark:border-borderMuted p-6"
    >
      <SectionHeading size="md" className="mb-6">
        Contact
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border border-borderMuted bg-bg dark:bg-bg-dark p-5">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary dark:text-primary-dark">
            Reach Out
          </p>
          <p className="text-sm leading-7 text-text dark:text-text-dark">
            Open to software engineering roles, technical collaboration, and thoughtful systems conversations.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted dark:text-muted-dark">
            If something on the site is relevant to your team or project, email is the fastest path. LinkedIn works well for professional outreach, and GitHub is there if you want to inspect code first.
          </p>
        </div>

        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-borderMuted bg-bg px-4 py-4 text-text transition-colors hover:border-primary hover:bg-primary/10 dark:bg-bg-dark dark:text-text-dark dark:hover:border-primary-dark dark:hover:bg-primary-dark/15"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-primary dark:text-primary-dark">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-muted dark:text-muted-dark">
                    {link.detail}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ContactForm;
