import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
      {label && <label style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>{label}</label>}
      <input
        {...props}
        style={{
          padding: '0.5rem',
          border: error ? '1px solid red' : '1px solid #f08 ouline-none',
          borderRadius: '4px',
          fontSize: '3rem'
        }}
      />
      {error && <span style={{ color: 'red', marginTop: '0.25rem', fontSize: '0.875rem' }}>{error}</span>}
    </div>
  );
};
