"use client";

import { Modal } from "antd";

export default function CheckDetailsModal({ open, setOpen }) {
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
    >
        <h1>
            Check Details
        </h1>
        <div className="grid grid-cols-1 gap-7 px-12 py-8 md:grid-cols-2">
            <div className="text-black">
                <h5 className=" font-bold">Check ID</h5>
                <p className="font-dmSans text-base">12345</p>
            </div>
            <div className="text-black">
                <h5 className=" font-bold">User Name</h5>
                <p className="font-dmSans text-base">John Doe</p>
            </div>
            </div>
            <div>
                <h5 className=" font-bold"> Question</h5>
                <p className="font-dmSans text-base"> Lorem ipsum dolor sit amet.?</p>

            </div>
            <div>
                <h5 className=" font-bold"> Comment</h5>
                <p className="font-dmSans text-base"> Lorem ipsum dolor sit amet.</p>
            </div>
 <div>
 <h5 className=" font-bold"> Date</h5>
 <p className="font-dmSans text-base"> 1-1-2025 </p>
 </div>


    </Modal>
  );
}
