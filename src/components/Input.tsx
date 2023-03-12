import { ChangeEvent } from 'react';

type InputProps = {
  type: string;
  name: string;
  id: string;
  error: string | undefined;
  value: string;
  label: string;
  placeholder: string;
  onChange?: (e: ChangeEvent) => void;
  required?: boolean;
  autocomplete?: string;
  className?: string;
};
export default function Input({
  type,
  name,
  id,
  error,
  value,
  label,
  placeholder,
  required,
  autocomplete,
  onChange,
  className,
}: InputProps) {
  return (
    <div className="flex flex-col {className}">
      {label && (
        <label htmlFor={name} className="block font-medium text-gray-700 pb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          type={type}
          onChange={onChange}
          value={value}
          className="text-md border font-semibold px-3 py-2 placeholder-slate-300 text-slate-600 bg-white rounded-lg text-sm outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <p className="text-sm pt-1 text-red-600">{error}</p>
    </div>
  );
}
