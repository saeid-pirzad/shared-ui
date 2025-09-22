import { InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
export declare const Input: ({ label, error, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
