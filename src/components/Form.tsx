'use client';
import { useState, FormEvent } from 'react';

import { InputComponent } from './Input';

type FormField = {
  name: string;
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

  //상황에 따라 debounce 적용 고려
  const handleChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-1/2 flex-col">
      {fields.map(field => (
        <InputComponent
          key={field.name}
          name={field.name}
          type={field.type}
          placeholderText={field.placeholder}
          onInputChange={value => handleChange(field.name, value)}
        />
      ))}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
