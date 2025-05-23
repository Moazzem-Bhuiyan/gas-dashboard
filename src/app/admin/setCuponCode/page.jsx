import CouponCodeContainer from './Component/CuponeCodeComtainer';

export const metadata = {
  title: 'Set Cupon Code',
  description: 'Set Cupon Code page',
  icons: {
    icon: '/favicon.ico',
  },
};

const page = () => {
  return (
    <div>
      <CouponCodeContainer />
    </div>
  );
};

export default page;
