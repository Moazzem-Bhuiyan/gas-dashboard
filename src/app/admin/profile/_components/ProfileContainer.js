'use client';
import Image from 'next/image';
import adminImg from '@/assets/images/user-avatar-lg.png';
import { ImagePlus } from 'lucide-react';

import { Tabs } from 'antd';
import { ConfigProvider } from 'antd';
import ChangePassForm from './ChangePassForm';
import EditProfileForm from './EditProfileForm';
import { useGetAdminProfileQuery } from '@/redux/api/adminProfileApi';

const { TabPane } = Tabs;

export default function ProfileContainer() {
  // get admin data

  const { data, isLoading } = useGetAdminProfileQuery();

  console.log(data);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1b71a7',
        },
      }}
    >
      <div className="2xl:w-1/2 lg:w-3/4 w-full px-5 lg:px-0 mx-auto">
        {/* Profile pic */}
        <section className="flex-center gap-x-3">
          <div className="relative w-max">
            <Image
              src={adminImg}
              alt="Admin avatar"
              width={1200}
              height={1200}
              className="w-[160px] h-auto aspect-square rounded-full border-2 border-primary-green p-1"
            />

            {/* Edit button */}
            <button className="bg-[#2C50ED] p-2 aspect-square rounded-full flex-center text-white/95 absolute bottom-2 right-2">
              <ImagePlus size={20} />
            </button>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">BOOXOS</h3>
            <p className="font-medium text-primary-blue mt-1 text-lg">Administrator</p>
          </div>
        </section>

        {/* Profile Information Forms */}
        <section className="my-16">
          <Tabs defaultActiveKey="editProfile" centered>
            <TabPane tab="Edit Profile" key="editProfile">
              <EditProfileForm />
            </TabPane>

            <TabPane tab="Change Password" key="changePassword">
              <ChangePassForm />
            </TabPane>
          </Tabs>
        </section>
      </div>
    </ConfigProvider>
  );
}
