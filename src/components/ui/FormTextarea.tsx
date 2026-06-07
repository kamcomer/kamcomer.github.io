import React, { ChangeEvent } from 'react';
import { motion } from 'framer-motion';

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-muted dark:text-muted-dark text-sm mb-2">
        {label}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 bg-bg dark:bg-bg-dark text-text dark:text-text-dark border border-borderMuted dark:border-borderMuted focus:outline-none focus:border-primary dark:focus:border-primary transition-colors resize-none"
      />
    </div>
  );
}

export default FormTextarea;
