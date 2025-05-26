'use client';

import { Input, Table } from 'antd';
import { Tooltip } from 'antd';
import { ConfigProvider } from 'antd';
import { Check, Search } from 'lucide-react';
import userImage from '@/assets/images/user-avatar-lg.png';
import { Eye } from 'lucide-react';
import { UserX } from 'lucide-react';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import Image from 'next/image';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';
import { message } from 'antd';
import ProfileModal from '@/components/SharedModals/ProfileModal';
import { Tag } from 'antd';
import DriverDetailsModal from './DriverDetailsModal';

// Dummy table Data
const data = Array.from({ length: 50 }).map((_, inx) => ({
  key: inx + 1,
  name: 'David Smith',
  userImg: userImage,
  email: 'justina@gmail.com',
  contact: '+1234567890',
  earnings: '$1000',
  status: 'Online',
}));

export default function DriverDetailsTable() {
  const [searchText, setSearchText] = useState('');
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Block user handler
  const handleBlockUser = () => {
    message.success('User blocked successfully');
  };

  // ================== Table Columns ================
  const columns = [
    { title: 'Serial', dataIndex: 'key', render: (value) => `#${value}` },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Image
            src={record.userImg}
            alt="User avatar"
            width={1200}
            height={1200}
            className="rounded-full w-10 h-auto aspect-square"
          />
          <p className="font-medium">{value}</p>
        </div>
      ),
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
            <button onClick={() => setProfileModalOpen(true)}>
              <Eye color="#1B70A6" size={22} />
            </button>
          </Tooltip>

          {/* <Tooltip title="Block User">
            <CustomConfirm
              title="Block User"
              description="Are you sure to block this user?"
              onConfirm={handleBlockUser}
            >
              <button>
                <UserX color="#F16365" size={22} />
              </button>
            </CustomConfirm>
          </Tooltip> */}
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
      ></Table>

      <DriverDetailsModal open={profileModalOpen} setOpen={setProfileModalOpen} />
    </ConfigProvider>
  );
}
