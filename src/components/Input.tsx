'use client';
import { useState, ChangeEvent } from 'react';

type InputComponentProps = {
  name: string;
  type: string;
  placeholderText: string;
  onInputChange: (value: string) => void;
};
export const InputComponent = ({
  name,
  type,
  placeholderText,
  onInputChange
}: InputComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <input
      name={name}
      type={type}
      className="m-auto mb-4 w-full min-w-[200px] rounded-lg border p-2 text-center placeholder-opacity-0 focus:placeholder-opacity-0"
      placeholder={placeholderText}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
