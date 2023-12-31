import React, { useEffect, useState } from 'react'

const EditPopupAdminData = ( {admin, isOpen, onClose, onSubmit} ) => {
    const [editedUser, setEditedUser] = useState(admin); 

  useEffect(() => {
    setEditedUser(admin);
  }, [admin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-96 p-6 rounded-lg z-10">
            <h2 className="text-2xl font-semibold mb-4">Edit Admin</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(editedUser); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">admin_username</label>
                <input
                  type="text"
                  name="admin_username"
                  value={editedUser.admin_username}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">admin_email</label>
                <input
                  type="text"
                  name="admin_email"
                  value={editedUser.admin_email}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">admin_phone_number</label>
                <input
                  type="text"
                  name="admin_phone_number"
                  value={editedUser.admin_phone_number}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* <div className="mb-4">
                <button className="block bg-gray-700 text-sm font-bold mb-2">User Password</button>
               
              </div> */}
             
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-my-green text-white py-2 px-4 rounded-full hover:bg-teal-400 focus:outline-none focus:shadow-outline-blue"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    );
  };
  

  

export default EditPopupAdminData
