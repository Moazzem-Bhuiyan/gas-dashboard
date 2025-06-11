'use client';

import { ConfigProvider, Input, Table } from 'antd';
import userImage from '@/assets/images/user-avatar-lg.png';
import { Tooltip } from 'antd';
import { Eye, Search } from 'lucide-react';
import { useState } from 'react';
import { Tag } from 'antd';
import EarningModal from './EarningModal';
import { useGetTransectionDataQuery } from '@/redux/api/transactionApi';
import moment from 'moment';

export default function EarningsTable() {
  const [showEarningModal, setShowEarningModal] = useState(false);

  // get earning data from api

  const { data: earningData, isLoading } = useGetTransectionDataQuery();

  if (isLoading) return <div>Loading...</div>;

  // Dummy table data
  const data = earningData?.data?.map((item, inx) => ({
    key: inx + 1,
    transactionId: item?.tranId,
    name: item?.user?.fullname,
    amount: item?.amount,
    // accNumber: '1234567890',
    date: moment(item?.createdAt).format('YYYY-MM-DD'),
  }));

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
    // { title: 'ACC Number', dataIndex: 'accNumber' },
    { title: 'Trans. Date', dataIndex: 'date' },

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
