
import React, { useEffect, useState } from 'react';
import heroImage from '../../Images/heroImage.jpg';
import locationIcon from '../../Images/location.png'
import manHoldBox from '../../Images/manHoldBox.webp';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Hero = () => {

  const { t } = useTranslation();
  
 
  const [showPopup, setShowPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState(null);
  const [trackingId, setTrackingId] = useState(''); // Add state to store trackingId

  const handleTrackClick = async (e) => {
    e.preventDefault();
  
    try {
      // Use the trackingId entered by the user
      const response = await axios.get(`http://localhost:3001/users/order/user/${trackingId}`, {
        headers: {
          Authorization: `${Cookies.get('token')}`, // Include the user's authentication token
        },
      });
  
      console.log("trackingId", trackingId);
  
      if (response.data[0].status  ) {
      //   Swal.fire({
      //     icon: 'warning',
      //     title: 'No Status',
      //     text: 'There is no order status available.',
      //     confirmButtonColor: '#3085d6',
      //     confirmButtonText: 'OK',
      //   });
      // } else {
        setOrderStatus(response.data[0].status);
        console.log(response.data[0].status);
        setShowPopup(true);
        setError(null); 
        setTrackingId('')// Reset error if it was previously set
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:"The Order ID Doesn't Exist :("})
      setOrderStatus(null);
      setShowPopup(false);
      setTrackingId('')
    }
  };
  


  const handleClosePopup = () => {
    setShowPopup(false);
  };

   
    
    return (
        <>
            {/* HERO SECTION  */}
   
  <div className="relative mb-40" >
    <img
      src="https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="absolute inset-0 h-full w-full object-cover "
      alt=""
    />
    <div className="relative bg-black  bg-opacity-50">
      <svg
        className="absolute inset-x-0 -bottom-1 text-white  "
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>
      <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
              {t('hero.title')}
            </h2>
            <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
               {t('hero.description')}

            </p>
            <a
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
            >
               {t('hero.btnText')}

              <svg
                className="ml-2 inline-block w-3"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:w-5/12 xl:px-8 mt-60">
            <div className="overflow-hidden rounded-xl border-t-4 border-my-green  bg-white p-7 shadow-md shadow-emerald-300 sm:p-10">
              <h3 className="mb-4 text-xl font-bold text-my-green  sm:mb-6 sm:text-center sm:text-2xl">
              {t('hero.trackTitle')}

               </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="trackingId"
                    className="mb-1 inline-block font-medium text-my-green "
                  >
              {t('hero.trackingId')}
                  </label>
                  <input
                    placeholder="123"
                    required=""
                    type="text"
                    className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                    id="trackingId"
                    name="trackingId"
                    value={trackingId} // Set the value from the state
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
              
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                   type="button" 
                   onClick={handleTrackClick}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#219C90]  px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-[#53bbb1]  focus:outline-none focus:ring"
                  >
                 {t('hero.trackBtn')}

                  </button>
                </div>
             
              </form>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 {/* Popup */}
 {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"  onClick={handleClosePopup}>
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-xl text-center font-bold  text-gray-800 w-52 h-14"> Order Status: 
           <p className='font-semibold text-my-green pb-8'>{orderStatus}</p> 
            </p>
           
          </div>
        </div>
      )}

            {/* END HERO SECTION  */}
        </>
    );
};

export default Hero;
