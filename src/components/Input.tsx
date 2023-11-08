'use client';
import { ChangeEvent } from 'react';

type InputComponentProps = {
  label: string;
  name: string;
  type: string;
  placeholderText: string;
  value: string;
  onInputChange: (name: string, value: string) => void;
};
export const InputComponent = ({
  name,
  label,
  type,
  placeholderText,
  value,
  onInputChange
}: InputComponentProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  return (
    <div className="relative m-auto w-full min-w-[200px] rounded-lg border bg-white p-2 text-center placeholder-opacity-0 focus-within:border-blue-500 focus:placeholder-opacity-0">
      <label
        htmlFor={name}
        className="absolute left-4 top-1 px-2 text-xs font-medium text-gray-500"
      >
        {label}
      </label>
      <input
        className="h-full w-full px-3 py-2 text-base placeholder-gray-500 focus:outline-none"
        id={name}
        name={name}
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
