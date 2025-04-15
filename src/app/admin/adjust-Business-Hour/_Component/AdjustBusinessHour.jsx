import React from 'react';

const AdjustBusinessHour = () => {
  // Dummy data
  const nonSubscriberHours = {
    days: 'Monday-Saturday',
    time: '9 AM - 5 PM',
  };

  const subscriberHours = {
    days: 'Monday-Sunday',
    time: '7 AM - 9 PM',
  };

  return (
    <div className="flex gap-5 justify-center p-5">
      {/* Non-Subscriber Hours Card */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 w-96 py-10">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Non-Subscriber Hours</h3>
        <p className="text-sm text-gray-600">{nonSubscriberHours.days}</p>
        <p className="text-sm text-gray-600 mb-2">{nonSubscriberHours.time}</p>
        <button className="text-white  flex items-center gap-1 text-center justify-center border w-full p-1 rounded-md bg-[#5dd3a6]">
           Edit
        </button>
      </div>

      {/* Subscriber Hours Card */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 w-96 py-10">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Subscriber Hours</h3>
        <p className="text-sm text-gray-600">{subscriberHours.days}</p>
        <p className="text-sm text-gray-600 mb-2">{subscriberHours.time}</p>
        <button className="text-white  flex items-center gap-1 text-center justify-center border w-full p-1 rounded-md bg-[#5dd3a6]">
           Edit
        </button>
      </div>
    </div>
  );
};

export default AdjustBusinessHour;