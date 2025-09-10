interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  required,
  error,
}) => {
  return (
    <div className="field">
      <label className="form-label">
        <div>
          {label} {required && <span className="required">*</span>}
        </div>
        {children}
        {error && <div className="form-error">{error}</div>}
      </label>
    </div>
  );
};
