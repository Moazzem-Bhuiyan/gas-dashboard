'use client';

import { ConfigProvider, Input, Table } from 'antd';
import { Tooltip } from 'antd';
import { Check, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Tag } from 'antd';

import moment from 'moment';
import { useGetWithdrawRequestQuery } from '@/redux/api/withdrwaApi';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';

export default function WithdrawReqTable() {
  // Get earning data from API
  const { data: earningData, isLoading } = useGetWithdrawRequestQuery();

  if (isLoading) return <div>Loading...</div>;

  // Map table data with image and status
  const data = earningData?.data?.map((item, inx) => ({
    key: inx + 1,
    requestId: item?._id,
    driverName: item?.userId?.fullname,
    amount: Number(item?.withdrawAmount).toFixed(2),
    requestDate: moment(item?.createdAt).format('MMM DD, YYYY, hh:mm A'),
    status: item?.status || 'Pending', // Assuming status exists, fallback to 'Pending'
  }));

  // ================== Table Columns ================
  const columns = [
    // { title: 'Request ID', dataIndex: 'requestId', render: (value) => `${value}` },
    {
      title: 'Driver Name',
      dataIndex: 'driverName',
      render: (name) => (
        <div className="flex items-center gap-2">
          <span>{name}</span>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (value) => (
        <Tag color="blue" className="!text-base font-semibold">
          ${value}
        </Tag>
      ),
    },
    { title: 'Request Date', dataIndex: 'requestDate' },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        let color;
        switch (status.toLowerCase()) {
          case 'pending':
            color = 'orange';
            break;
          case 'disbursed':
            color = 'blue';
            break;
          case 'rejected':
            color = 'red';
            break;
          default:
            color = 'gray';
        }
        return (
          <Tag color={color} className="!text-base font-semibold">
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      render: (_, record) => (
        <div className="flex items-center gap-2">
          {record.status === 'Pending' ? (
            <Tooltip title="Approve Request">
              <CustomConfirm
                title="Are you sure you want to approve this request?"
                onConfirm={() => {
                  handleConfirm(record.requestId);
                }}
              >
                <Check color="#1B70A6" size={20} />
              </CustomConfirm>
            </Tooltip>
          ) : null}
          <Tooltip title="Delete Request">
            <CustomConfirm
              title="Are you sure you want to delete this request?"
              onConfirm={() => {
                handleDelete(record.requestId);
              }}
            >
              <Trash2 color="#FF4D4F" size={20} />
            </CustomConfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1B70A6', colorInfo: '#1B70A6' } }}>
      <div className="w-1/3 ml-auto gap-x-5 mb-3">
        <Input
          placeholder="Search"
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          // onChange={(e) => setSearchText(e.target.value)} // Uncomment and add setSearchText state if needed
        />
      </div>

      {/* Earning table */}
      <section className="my-10">
        <Table
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
          scroll={{ x: '100%' }}
          loading={isLoading}
          className="rounded-lg shadow-sm"
          rowClassName="hover:bg-gray-50"
          pagination={{
            pageSize: 10,
            showSizeChanger: false,
            total: earningData?.data?.length || 0,
            showTotal: (total) => `Total ${total} transactions`,
            itemRender: (page, type, originalElement) => {
              if (type === 'prev') {
                return <a className="text-gray-600">⟨</a>;
              }
              if (type === 'next') {
                return <a className="text-gray-600">⟩</a>;
              }
              return originalElement;
            },
          }}
        />
      </section>

      {/* Show earning modal */}
    </ConfigProvider>
  );
}
