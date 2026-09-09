import { useState } from "react";

function VendorPhoneDirectory() {
  const [form, setForm] = useState({
    vendorName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [vendors, setVendors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user corrects the field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Vendor name validation
    if (!form.vendorName.trim()) {
      newErrors.vendorName = "Vendor name is required";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Email validation - only if entered
    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const newVendor = {
      id: Date.now(),
      vendorName: form.vendorName,
      phone: form.phone,
      email: form.email,
    };

    setVendors([...vendors, newVendor]);

    // Clear form
    setForm({
      vendorName: "",
      phone: "",
      email: "",
    });

    setErrors({});
  };

  return (
    <div className="p-8 bg-white">

      {/* Heading */} 
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Vendor Phone Directory
        </h1>

        <p className="mb-6 text-gray-500">
          Add and manage vendor contact details.
        </p>

        {/* Form */}
        <div className="rounded-lg bg-white p-6 shadow-xl">

          <h2 className="mb-5 text-lg font-semibold text-gray-700">
            Add Vendor
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              {/* Vendor Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Vendor Name *
                </label>

                <input
                  type="text"
                  name="vendorName"
                  value={form.vendorName}
                  onChange={handleChange}
                  placeholder="Enter vendor name"
                  className={`w-full rounded-md border px-3 py-2 outline-none ${
                    errors.vendorName
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />

                {errors.vendorName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.vendorName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  maxLength="10"
                  className={`w-full rounded-md border px-3 py-2 outline-none ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className={`w-full rounded-md border px-3 py-2 outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Add Vendor
            </button>

          </form>
        </div>

        {/* Vendor Table */}
        <div className="mt-6 rounded-lg bg-white p-6 shadow-xl">

          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Vendor Directory
          </h2>

          {vendors.length === 0 ? (
            <p className="py-6 text-center text-gray-500">
              No vendors added yet.
            </p>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full border-collapse text-left">

                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b px-4 py-3 text-sm font-semibold">
                      Vendor Name
                    </th>

                    <th className="border-b px-4 py-3 text-sm font-semibold">
                      Phone
                    </th>

                    <th className="border-b px-4 py-3 text-sm font-semibold">
                      Email
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-gray-50">

                      <td className="border-b px-4 py-3">
                        {vendor.vendorName}
                      </td>

                      <td className="border-b px-4 py-3">
                        {vendor.phone}
                      </td>

                      <td className="border-b px-4 py-3">
                        {vendor.email || "-"}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default VendorPhoneDirectory;