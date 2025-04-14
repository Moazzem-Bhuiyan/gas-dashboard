"use client"
import { Tabs } from 'antd'
import React from 'react'
import SetSubsCriptionPrice from './SetSubsCriptionPrice'
import SetGellaryPrice from './SetGellaryPrice'
import CreateCupone from './CreateCupone'
const { TabPane } = Tabs
const SetPriceConatiner = () => {
    return (
        <div>
            <Tabs>
                <TabPane tab="Pricing for gellary" key="history">
                    <SetGellaryPrice />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default SetPriceConatiner
