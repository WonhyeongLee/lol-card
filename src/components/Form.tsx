'use client';
import { useState, FormEvent } from 'react';

import { InputComponent } from '~components/Input';

type FormField = {
  name: string;
  label: string;
  value: string;
  type: string;
  placeholder: string;
};

type FormProps = {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
};

export default function Form({ fields, onSubmit }: FormProps) {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative h-full">
        {fields.map(field => (
          <InputComponent
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            placeholderText={field.placeholder}
            onInputChange={value => handleChange(field.name, value)}
          />
        ))}
      </div>
      <button type="submit" className="absolute inset-y-0 bottom-1 right-0 p-2">
        <svg
          className="h-5 w-5 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15.5 14L19 17.5"></path>
          <circle cx="10" cy="10" r="6"></circle>
        </svg>
      </button>
    </form>
  );
}
