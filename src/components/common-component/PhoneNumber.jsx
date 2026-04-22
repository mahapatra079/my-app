export const PhoneNumber = ({ title, name, value, onChange }) => {
  return (
    <div className="flex flex-col mr-2">
      <label className="block mb-2">{title}</label>
      <input
        type="text"
        name={name}              
        value={value}           
        onChange={onChange} 
        className="form-control border-0 focus:ring-0 ml-2 cursor-pointer mt-5"
        placeholder="Enter phone number"
      />
    </div>
  );
};