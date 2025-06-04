'use client';

import { ConfigProvider, Input, Table } from 'antd';
import userImage from '@/assets/images/user-avatar-lg.png';
import { Tooltip } from 'antd';
import { Eye, Search } from 'lucide-react';
import { useState } from 'react';
import { Tag } from 'antd';
import EarningModal from './EarningModal';

// Dummy data
const earningStats = [
  { key: 'today', title: "Today's Earning", amount: 500 },
  { key: 'monthly', title: 'This Month', amount: 2000 },
  { key: 'yearly', title: 'This Year', amount: 15000 },
  { key: 'total', title: 'Total Earnings', amount: 350000 },
];

// Dummy table data
const data = Array.from({ length: 7 }).map((_, inx) => ({
  key: inx + 1,
  transactionId: '#357634534',
  name: 'Booxos',
  userImg: userImage,
  status: 'service Provider',
  contact: '+1234567890',
  date: '11 oct 24, 11.10PM',
  amount: 22,
  accNumber: '1234567890',
}));

export default function EarningsTable() {
  const [showEarningModal, setShowEarningModal] = useState(false);

  // ================== Table Columns ================
  const columns = [
    { title: 'Trans. ID', dataIndex: 'transactionId', render: (value) => `${value}` },
    { title: 'Name', dataIndex: 'name' },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   render: (value) => (
    //     <Tag color="blue" className="!text-base font-semibold">
    //       ${value}
    //     </Tag>
    //   ),
    // },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (value) => (
        <Tag color="blue" className="!text-base font-semibold">
          ${value}
        </Tag>
      ),
    },
    { title: 'ACC Number', dataIndex: 'accNumber' },
    { title: 'Join Date', dataIndex: 'date' },

    // {
    //   title: "Pricing Plan",
    //   dataIndex: "pricingPlan",

    //   filters: [
    //     {
    //       text: "Monthly",
    //       value: "monthly",
    //     },
    //     {
    //       text: "Quarterly",
    //       value: "quarterly",
    //     },
    //     {
    //       text: "Yearly",
    //       value: "yearly",
    //     },
    //   ],
    //   filterIcon: () => (
    //     <Filter
    //       size={18}
    //       color="#fff"
    //       className="flex justify-start items-start"
    //     />
    //   ),
    //   onFilter: (value, record) => record.pricingPlan.indexOf(value) === 0,
    // },

    {
      title: 'Action',
      render: () => (
        <Tooltip title="Show Details">
          <button onClick={() => setShowEarningModal(true)}>
            <Eye color="#1B70A6" size={22} />
          </button>
        </Tooltip>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1B70A6', colorInfo: '#1B70A6' } }}>
      <div className="w-1/3 ml-auto gap-x-5 mb-3">
        <Input
          placeholder="Search "
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          // onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Earning table */}
      <section className="my-10">
        <Table
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
          scroll={{ x: '100%' }}
          pagination
        ></Table>
      </section>

      {/* Show earning modal */}
      <EarningModal open={showEarningModal} setOpen={setShowEarningModal} />
    </ConfigProvider>
  );
}
