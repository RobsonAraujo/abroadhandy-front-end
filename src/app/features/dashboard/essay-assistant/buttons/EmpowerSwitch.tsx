import "./EmpowerSwitch.css";

interface EmpowerSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function EmpowerSwitch({
  checked = false,
  onChange,
}: EmpowerSwitchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className="relative group">
      <label className="switch">
        <input
          className="cb"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="toggle">
          <span className="left">off</span>
          <span className="right">on</span>
        </span>
      </label>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
        When ON, you can input information to empower your essay
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}
