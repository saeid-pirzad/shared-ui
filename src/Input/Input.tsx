import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
      {label && <label style={{ marginBottom: '0.25rem', fontWeight: 'bold'  , color : 'red' }}>{label}</label>}
      <input
        {...props}
        style={{
          padding: '0.5rem',
          border: error ? '5px solid red' : '5px solid #ccc', // اصلاح شد
          borderRadius: '4px',
          fontSize: '1rem' // اصلاح شد از 3rem به 1rem
        }}
      />

      {error && <span style={{ color: 'red', marginTop: '0.25rem', fontSize: '0.875rem' }}>{error}</span>}
    </div>
  );
};
