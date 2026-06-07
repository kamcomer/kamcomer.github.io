import React, { ChangeEvent } from 'react';
import { motion } from 'framer-motion';

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

function FormInput({
  label,
  name,
  value,
  onChange,
  required = false,
  type = 'text',
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-muted dark:text-muted-dark text-sm mb-2">
        {label}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-bg dark:bg-bg-dark text-text dark:text-text-dark border border-borderMuted dark:border-borderMuted focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
      />
    </div>
  );
}

export default FormInput;
