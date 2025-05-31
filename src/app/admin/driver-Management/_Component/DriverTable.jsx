'use client';

import { Input, Table } from 'antd';
import { Tooltip } from 'antd';
import { ConfigProvider } from 'antd';
import { Check, Search } from 'lucide-react';
import userImage from '@/assets/images/user-avatar-lg.png';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { message } from 'antd';
import DriverDetailsModal from './DriverDetailsModal';
import { useGetDriverDataQuery } from '@/redux/api/driversApi';

export default function DriverDetailsTable() {
  const [searchText, setSearchText] = useState('');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // ===================Get drivers data from api=======================//

  const { data: driverData, isLoading } = useGetDriverDataQuery();

  // Dummy table Data
  const data = driverData?.data.map((item, inx) => ({
    key: inx + 1,
    name: item?.userId?.fullname,
    userImg: item?.userId?.image,
    email: item?.userId?.email,
    contact: item?.userId?.phoneNumber || 'Not Provided',
    earnings: item?.totalEarnings,
    status: item?.userId?.status,
    address: item?.userId?.address || 'Not Provided',
    todayEarnings: item?.todayEarnings || 0,
  }));

  // ================== Table Columns ================
  const columns = [
    { title: 'Serial', dataIndex: 'key', render: (value) => `#${value}` },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, record) => {
        // Helper function to validate URL
        const isValidUrl = (url) => {
          if (!url) return false;
          return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
        };

        // Get the first letter of the name (uppercase)
        const firstLetter = value ? value.charAt(0).toUpperCase() : '';

        // Determine if the image is valid
        const hasValidImage = isValidUrl(record?.userImg);

        return (
          <div className="flex-center-start gap-x-2">
            {hasValidImage ? (
              <Image
                src={record?.userImg}
                alt="User avatar"
                width={40}
                height={40}
                className="rounded-full w-10 h-auto aspect-square"
              />
            ) : (
              <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#9bddbe] text-white text-lg font-medium">
                {firstLetter}
              </div>
            )}
            <p className="font-medium">{value}</p>
          </div>
        );
      },
    },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Contact', dataIndex: 'contact' },
    {
      title: 'Earnings',
      render: (_, record) => (
        <div className="flex-center-start gap-x-2">
          <Check color="#1B70A6" size={18} />
          <p className="font-medium">{record.earnings}</p>
        </div>
      ),
      dataIndex: 'earnings',
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   render: (value) => (
    //     <Tag color="green" className="!rounded-full !px-4 !py-1 !text-sm">
    //       {value}
    //     </Tag>
    //   ),
    // },
    {
      title: 'Action',
      render: (_, record) => (
        <div className="flex-center-start gap-x-3">
          <Tooltip title="Show Details">
            <button
              onClick={() => {
                setProfileModalOpen(true);
                setSelectedDriver(record);
              }}
            >
              <Eye color="#1B70A6" size={22} />
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1B70A6', colorInfo: '#1B70A6' } }}>
      <div className="w-1/3 ml-auto gap-x-5 mb-3">
        <Input
          placeholder="Search by name or email"
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <Table
        style={{ overflowX: 'auto' }}
        columns={columns}
        dataSource={data}
        scroll={{ x: '100%' }}
        loading={isLoading}
      ></Table>

      <DriverDetailsModal
        open={profileModalOpen}
        setOpen={setProfileModalOpen}
        selectedDriver={selectedDriver}
      />
    </ConfigProvider>
  );
}
