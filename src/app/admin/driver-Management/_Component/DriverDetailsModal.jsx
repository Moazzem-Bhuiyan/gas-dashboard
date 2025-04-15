"use client";

import { Modal } from "antd";
import clsx from "clsx";

export default function DriverDetailsModal({ open, setOpen }) {

    const earnings = [
        {
            title : "Total Earnings",
            amount : "$1000"
        },
        {
           title : "Today Earnings",
           amount:"$50"
        }
    ]
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      width={800}
      className="!w-[90%] md:!w-[800px]"
    >
   <div>
     <h1 className="text-center items-center text-xl font-bold">
     Driver Details 
     </h1>

     <div>
        <h1>
            Earning Details 
        </h1>
        <div className="grid grid-cols-1 gap-7 px-12 py-8 md:grid-cols-2 ">
            {earnings.map((earning, index) => (
                <div key={index} className={clsx("border-2 p-8 rounded-lg bg-[#00AEEF] text-white ",earning.title === "Total Earnings" ? "bg-[#00AEEF]" : "bg-[#409E7A]")}>
                    <h1 className="font-bold text-2xl">{earning.title}</h1>
                    <h1 className=" font-bold text-xl mt-3">{earning.amount}</h1>
                </div>
            ))}
        </div>
        {/* basic info */}
        <h1 className=" items-center text-xl font-bold mt-10">
            Basic Info
        </h1>
        <p className="font-medium text-lg mt-3">
          Driver Id : 1234567890
        </p>
        <p  className="font-medium text-lg mt-3" >
          Driver Name : Justina Ojayluv
        </p>
        <p className="font-medium text-lg mt-3">
          Email : amd@gmail.com
        </p>
        <p className="font-medium text-lg mt-3">
          Contact : +234 813 123 4567
        </p>
        <h1 className=" items-center text-xl font-bold mt-10">
          Performance
        </h1>
        <p className="font-medium text-lg mt-3">
        Deliveries Completed : 100
        </p>
        <p className="font-medium text-lg mt-3">
          Active Orders : 5 Currently
        </p>
        <h2 className="items-center text-xl font-bold mt-10">
          Payment Information
        </h2>
        <p className="font-medium text-lg mt-3">
          Bank Acc : 1234567890
        </p>
     </div>

   </div>
    </Modal>
  );
}
