'use client';

import { ConfigProvider, Input, Spin, Table } from 'antd';
import { Tooltip } from 'antd';
import { Eye, Filter, HandCoins, Search } from 'lucide-react';
import { useState } from 'react';
import { Tag } from 'antd';
import EarningModal from './EarningModal';
import {
  useGetTransectionDataQuery,
  useRefundTransectionMutation,
} from '@/redux/api/transactionApi';
import moment from 'moment';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';
import { toast } from 'sonner';
import Image from 'next/image';
import refund from '@/assets/images/refund.png';

export default function EarningsTable() {
  const [showEarningModal, setShowEarningModal] = useState(false);

  // get earning data from api

  const { data: earningData, isLoading } = useGetTransectionDataQuery();

  // refund transaction
  const [refundTransection, { isLoading: isRefundLoading }] = useRefundTransectionMutation();

  if (isLoading)
    return (
      <div>
        <div className="flex justify-center p-5">
          <Spin tip="Loading..." />
        </div>
      </div>
    );

  // Dummy table data
  const data = earningData?.data?.map((item, inx) => ({
    key: inx + 1,
    id: item?._id,
    transactionId: item?.tranId,
    name: item?.user?.fullname,
    type: item?.paymentType,
    status: item?.status,
    amount: Number(item?.amount).toFixed(2),
    date: moment(item?.createdAt).format('lll'),
  }));

  const handleRefund = async (id) => {
    try {
      const res = await refundTransection(id).unwrap();
      if (res?.success) {
        toast.success('Transaction refunded successfully');
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // ================== Table Columns ================
  const columns = [
    { title: 'Trans. ID', dataIndex: 'transactionId', render: (value) => `${value}` },
    { title: 'Name', dataIndex: 'name' },
    {
      title: 'Trans. type',
      dataIndex: 'type',
      filters: [
        { text: 'Subscription', value: 'subscription' },
        { text: 'Order', value: 'order' },
        { text: 'Tip', value: 'tip' },
      ],
      onFilter: (value, record) => record.type === value,
      filterIcon: (filtered) => (
        <Filter
          style={{
            color: filtered ? '#1890ff' : undefined,
            fontSize: '16px',
          }}
        />
      ),
      render: (value) => (
        <Tag color="blue" className="!text-base font-semibold">
          {value}
        </Tag>
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
    // { title: 'ACC Number', dataIndex: 'accNumber' },
    { title: 'Trans. Date', dataIndex: 'date' },

    {
      title: 'Action',
      render: (_, record) => (
        <div className="flex items-center gap-x-3">
          {/* <Tooltip title="Show Details">
            <button onClick={() => setShowEarningModal(true)}>
              <Eye color="#1B70A6" size={22} />
            </button>
          </Tooltip> */}
          {record?.type === 'order' && record?.status !== 'refunded' ? (
            <CustomConfirm
              title="Refund Transaction"
              description="Are you sure you want to refund this transaction?"
              onConfirm={() => {
                handleRefund(record?.id);
              }}
              loading={isRefundLoading}
            >
              <button>
                <Image src={refund} width={28} height={28} alt="refund" />
              </button>
            </CustomConfirm>
          ) : null}
          {record?.type === 'order' && record?.status === 'refunded' ? (
            <Tag color="#F5B5B5" className="!text-base font-semibold !ml-5 cursor-not-allowed">
              Refunded
            </Tag>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1B70A6', colorInfo: '#1B70A6' } }}>
      <div className="w-1/3 ml-auto gap-x-5 mb-3">
        {/* <Input
          placeholder="Search "
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          onChange={(e) => setSearchText(e.target.value)}
        /> */}
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
          }}
        ></Table>
      </section>

      {/* Show earning modal */}
      <EarningModal open={showEarningModal} setOpen={setShowEarningModal} />
    </ConfigProvider>
  );
}
