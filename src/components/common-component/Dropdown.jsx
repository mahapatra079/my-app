export const Dropdown = ({
  label,
  name,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="flex flex-col mr-2">
      {label && <label className="block mb-2">{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">Select</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};