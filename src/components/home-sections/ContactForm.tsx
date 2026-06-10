import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../../config";
import SectionHeading from "../ui/SectionHeading";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

const links: SocialLink[] = [
  {
    label: "GitHub",
    url: `https://github.com/${socialLinks.github}`,
    icon: "GH",
  },
  {
    label: "LinkedIn",
    url: `https://linkedin.com/in/${socialLinks.linkedin}`,
    icon: "LI",
  },
  { label: "Email", url: `mailto:${socialLinks.email}`, icon: "@" },
];

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

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

      <div className="flex justify-center gap-4 mb-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-bg dark:bg-bg-dark border border-borderMuted dark:border-borderMuted text-text dark:text-text-dark text-sm font-mono hover:border-primary dark:hover:border-primary-dark transition-colors"
          >
            <span className="text-primary dark:text-primary-dark">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <FormInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <FormTextarea
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 bg-gradient-primary dark:bg-gradient-primary-dark text-white dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {submitted ? "Sent!" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
