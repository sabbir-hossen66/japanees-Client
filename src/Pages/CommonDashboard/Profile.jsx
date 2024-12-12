import React, { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProviders';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabSwitch = (tab) => setActiveTab(tab);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const imageFile = form.image.files[0];

    try {
      let photoURL = user.photoURL;
      if (imageFile) {
        photoURL = await uploadImageToImgBB(imageFile); // Replace with your image upload logic
      }

      const { data: res } = await axios.put(`/api/user/${user.id}`, { displayName, photoURL });
      setUser(res.user);
      toast.success('Profile updated successfully');
      handleTabSwitch('profile');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-center my-5 font-bold text-primary text-2xl">User Profile</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg md:w-2/3 lg:w-1/3">
          {/* User Image */}
          <div className="flex justify-center">
            <img
              src={user?.photoURL || '/default-avatar.png'}
              alt="User Avatar"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>

          {/* User Info */}
          <div className="text-center mt-4">
            <h1 className="text-xl md:text-2xl font-bold">{user?.displayName || 'User Name'}</h1>
            <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mt-6">
            <button
              className={`px-4 py-2 text-sm font-semibold ${activeTab === 'profile' ? 'border-b-2 border-blue-500' : 'text-gray-500'
                }`}
              onClick={() => handleTabSwitch('profile')}
            >
              Profile
            </button>
            <button
              className={`ml-4 px-4 py-2 text-sm font-semibold ${activeTab === 'update' ? 'border-b-2 border-blue-500' : 'text-gray-500'
                }`}
              onClick={() => handleTabSwitch('update')}
            >
              Update Profile
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'profile' && (
              <div className="text-center">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Profile Info</h2>
                <p className="text-gray-700">Name: {user?.displayName || 'N/A'}</p>
                <p className="text-gray-700">Email: {user?.email || 'N/A'}</p>
              </div>
            )}

            {activeTab === 'update' && (
              <div className="text-center">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Update Profile</h2>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Update Name</label>
                    <input
                      type="text"
                      name="displayName"
                      defaultValue={user?.displayName}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Update Image</label>
                    <input
                      type="file"
                      name="image"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
