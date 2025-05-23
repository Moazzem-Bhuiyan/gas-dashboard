'use client';

import HeaderContainer from '@/components/shared/HeaderContainer/HeaderContainer';
import SidebarContainer from '@/components/shared/SidebarContainer/SidebarContainer';
import { useMediaQuery } from '@react-hook/media-query';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const { Content } = Layout;

export default function AdminLayout({ children }) {
  const screenSizeLessThan1300 = useMediaQuery('only screen and (max-width: 1300px)');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(screenSizeLessThan1300);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && screenSizeLessThan1300 && !sidebarCollapsed) {
      toast.success(
        "Small screen detected! If content doesn't fit better please collapse the sidebar by clicking the menu button on top-left",
        { duration: 2500 }
      );
    }
  }, [isClient, screenSizeLessThan1300, sidebarCollapsed]);

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <SidebarContainer collapsed={sidebarCollapsed}></SidebarContainer>

      <Layout>
        <HeaderContainer
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        ></HeaderContainer>

        <Content
          style={{
            minHeight: '100vh',
            overflow: 'auto',
            backgroundColor: '#F5F5F5',
            paddingInline: '70px',
            paddingTop: '20px',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
