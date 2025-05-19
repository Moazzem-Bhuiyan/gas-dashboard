'use client';
import { ConfigProvider, Input, Table, Tooltip } from 'antd';
import { Edit, Eye, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import userImage from '@/assets/images/user-avatar-lg.png';
import CheckDetailsModal from './CheckDetailModal';
import AddCheckListQuestionModal from './AddCheckListQuestionModal';

const data = Array.from({ length: 20 }).map((_, inx) => ({
  orderId: inx + 1,
  driverName: 'David Smith',
  driverImg: userImage,
  question: 'How to use the app?',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  time: '11 oct 24, 11.10PM',
}));
const CheckListTable = () => {
  const [searchText, setSearchText] = useState('');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [addquestionOpen, setAddquestionOpen] = useState(false);
  const columns = [
    { title: 'Delivery ID', dataIndex: 'orderId', render: (value) => `#${value}` },
    {
      title: 'Driver Name',
      dataIndex: 'driverName',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Image
            src={record.driverImg}
            alt="User avatar"
            width={1200}
            height={1200}
            className="rounded-full w-10 h-auto aspect-square"
          />
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    { title: 'Question', dataIndex: 'question' },
    { title: 'Comment', dataIndex: 'comment' },
    { title: 'Time', dataIndex: 'time' },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Tooltip title="Show Details">
            <button onClick={() => setProfileModalOpen(true)}>
              <Eye color="#1B70A6" size={22} />
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];
  return (
    <div>
      <ConfigProvider theme={{ token: { colorPrimary: '#5dd3a6', colorInfo: '#5dd3a6' } }}>
        <div className="mb-5 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">CheckList</h2>
          <div className=" flex w-1/2 ml-auto gap-x-5 mb-3">
            <Input
              placeholder="Search by name or email"
              prefix={<Search className="mr-2 text-black" size={20} />}
              className="h-11 !border !rounded-lg !text-base"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div>
              <button
                onClick={() => {
                  setAddquestionOpen(true);
                }}
                className="bg-[#48af99] text-white font-semibold  p-1 text-sm rounded-lg w-40 h-10 flex-center-center gap-x-2 "
              >
                Create Question
              </button>
            </div>
          </div>
        </div>
        <Table
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
          scroll={{ x: '100%' }}
        ></Table>

        <CheckDetailsModal open={profileModalOpen} setOpen={setProfileModalOpen} />

        <AddCheckListQuestionModal open={addquestionOpen} setOpen={setAddquestionOpen} />
      </ConfigProvider>
    </div>
  );
};

export default CheckListTable;
