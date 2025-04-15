import { Divider } from "antd";

// components/FuelPrice.jsx
const fuelData = [
    {
      type: "Regular Fuel",
      price: 3.50,
      lastUpdated: "Mar 20, 2025",
    },
    {
      type: "Premium Fuel",
      price: 4.00,
      lastUpdated: "Mar 20, 2025",
    },
    {
      type: "Diesel Fuel",
      price: 3.80,
      lastUpdated: "Mar 20, 2025",
    },
  ];
  
  const FuelPrice = () => {
    return (
      <div className="grid grid-cols-2 gap-10 justify-center p-4">
        {fuelData.map((fuel, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4  bg-gray-50 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-2">{fuel.type}</h3>
            <p className="text-sm font-medium mb-1">Current: ${fuel.price.toFixed(2)}/gal</p>
            <Divider/>
            <p className="text-sm mb-3">Last Updated: {fuel.lastUpdated}</p>
            <button className="bg-[#5dd3a6] text-white px-3 py-1 rounded-md flex items-center gap-1transition w-full text-center  justify-center">
              Edit Price
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default FuelPrice;