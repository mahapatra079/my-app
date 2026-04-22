export const TextArea = ({ name, value, onChange }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="break-word cursor-pointer border border-gray-300 rounded-md p-2 w-full"
      rows="4"
      placeholder="Enter your message"
    />
  );
};