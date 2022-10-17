import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

// InputHTMLAttributes<HTMLInputElement> = recebe todas as propriedades do HTML Input element
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <input 
      className={clsx(
        'py-4 px-3 rounded bg-gray-800 w-full outline-none text-gray-100 text-xs placeholder:text-gray-400 w-full focus:ring-2 ring-cyan-300'
      )}
      {...props}
    />
  )
}