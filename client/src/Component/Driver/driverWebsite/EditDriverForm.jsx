




import React, { useState } from 'react';

const EditDriverForm = ({ driverInfo, onClose, onSubmit }) => {
console.log('driverInfo',driverInfo);

  const [formState, setFormState] = useState(driverInfo);
  console.log('formState',formState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <form
         onSubmit={handleSubmit}
        >
          <label className="block mb-4">
            Driver Username:
            <input
              type="text"
              name="driver_username"
              value={formState.driver_username}
              onChange={handleChange}
              className="border p-2"
            />
          </label>

         
       
          <label className="block mb-4">
            Driver Password:
            <input
              type="text"
              name="driver_password"
              value={formState.driver_password}
              onChange={handleChange}
              className="border p-2"
            />
          </label>

          <label className="block mb-4">
            Driver Status:
            <input
              type="text"
              name="status"
              value={formState.status}
              onChange={handleChange}
              className="border p-2"
            />
          </label>

          <button type="submit" className="bg-my-green text-white p-2 rounded mr-5">
            Update 
          </button>
          <button onClick={onClose} className="mt-2 text-gray-500">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDriverForm;

