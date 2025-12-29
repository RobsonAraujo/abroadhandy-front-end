import "./input.css";

interface InputProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  name = "text",
  placeholder = "Type here...",
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        className="input"
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
