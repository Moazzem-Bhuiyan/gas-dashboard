'use client';

import { useRef, useState } from 'react';
import { useGetImagesQuery, useUpdateImageMutation } from '@/redux/api/uploadImageApi';
import { ImagePlus } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from 'antd';

const FuelImage = () => {
  const emergencyFileInputRef = useRef(null);
  const discountFileInputRef = useRef(null);
  const [selectedEmergencyImage, setSelectedEmergencyImage] = useState(null);
  const [selectedDiscountImage, setSelectedDiscountImage] = useState(null);

  // get images from api
  const { data, isLoading } = useGetImagesQuery();

  // update image
  const [updateImage, { isLoading: updating }] = useUpdateImageMutation();

  // Handle loading state
  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center p-5">
          <Spin tip="Loading images..." />
        </div>
      </div>
    );
  }

  // Extract the first item from the data array
  const images = data?.data?.[0];

  const handleEmergencyImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedEmergencyImage(file);
    }
  };

  const handleDiscountImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedDiscountImage(file);
    }
  };

  const triggerEmergencyFileInput = () => {
    emergencyFileInputRef.current?.click();
  };

  const triggerDiscountFileInput = () => {
    discountFileInputRef.current?.click();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if (selectedEmergencyImage) {
        formData.append('emergencyFuelBanner', selectedEmergencyImage);
      }
      if (selectedDiscountImage) {
        formData.append('discountBanner', selectedDiscountImage);
      }
      const res = await updateImage(formData).unwrap();
      if (res?.success) {
        toast.success('Image uploaded successfully');
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
      {images?.emergencyFuelBanner && (
        <div className="relative w-[500px]">
          <h1 className="text-xl font-semibold mb-3">Emergency Fuel Banner</h1>
          <Image
            src={
              selectedEmergencyImage
                ? URL.createObjectURL(selectedEmergencyImage)
                : images.emergencyFuelBanner || ''
            }
            alt="Emergency Fuel Banner"
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
          />
          {/* Hidden file input for emergency banner */}
          <input
            type="file"
            accept="image/*"
            ref={emergencyFileInputRef}
            onChange={handleEmergencyImageUpload}
            className="hidden"
          />
          {/* Edit button for emergency banner */}
          <button
            type="button"
            onClick={triggerEmergencyFileInput}
            className="bg-[#e6ce67] p-2 aspect-square rounded-full flex-center text-white/95 absolute bottom याद-0 right-0"
          >
            <ImagePlus size={25} />
          </button>
        </div>
      )}
      {images?.discountBanner && (
        <div className="relative w-[500px]">
          <h1 className="text-xl font-semibold mb-3">Discount Banner</h1>
          <Image
            src={
              selectedDiscountImage
                ? URL.createObjectURL(selectedDiscountImage)
                : images.discountBanner || ''
            }
            alt="Discount Banner"
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
          />
          {/* Hidden file input for discount banner */}
          <input
            type="file"
            accept="image/*"
            ref={discountFileInputRef}
            onChange={handleDiscountImageUpload}
            className="hidden"
          />
          {/* Edit button for discount banner */}
          <button
            type="button"
            onClick={triggerDiscountFileInput}
            className="bg-[#e6ce67] p-2 aspect-square rounded-full flex-center text-white/95 absolute bottom-0 right-0"
          >
            <ImagePlus size={25} />
          </button>
        </div>
      )}
      {/* Submit button */}
      <Button htmlType="submit" type="primary" loading={updating}>
        Submit
      </Button>
    </form>
  );
};

export default FuelImage;
