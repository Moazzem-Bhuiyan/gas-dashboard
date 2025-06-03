import { Tabs } from 'antd';
import OrderTable from './_Component/OrderTable';

export const metadata = {
  title: 'Orders',
  description: 'Orders page',
};
const page = () => {
  return (
    <div className="min-h-screen my-10">
      <Tabs>
        <Tabs.TabPane tab="Fuel Order" key="1">
          <OrderTable orderType="Fuel" />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Emercency Fuel Order" key="2">
          <OrderTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Jump Start Car Battery" key="3">
          <OrderTable orderType="Battery" />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default page;
