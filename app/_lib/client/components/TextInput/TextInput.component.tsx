import "./TextInput.styles.scss";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: "text" | "password" | "email";
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  type = "text",
  required = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      className="cb-text-input"
      placeholder={props?.placeholder}
      id={id}
      name={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};
