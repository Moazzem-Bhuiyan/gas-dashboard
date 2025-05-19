import { Tabs } from 'antd';
import React from 'react';
import FuelPrice from './_Component/FuelPrice';
import DeliveryFeeAndMendetoryTrip from './_Component/DeliveryFeeAndMendetoryTrip';
const { TabPane } = Tabs;
const page = () => {
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Fuel Price" key="1">
          {/* <FuelPrice /> */}
          <FuelPrice />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Delivery and Mendatory trip" key="2">
          <DeliveryFeeAndMendetoryTrip />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default page;
