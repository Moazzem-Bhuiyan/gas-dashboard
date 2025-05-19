'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/authSchema';
import FormWrapper from '@/components/Form/FormWrapper';
import UInput from '@/components/Form/UInput';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import logo from '@/assets/images/logo.png';
import login from '@/assets/images/login.png';
import Image from 'next/image';

export default function LoginForm() {
  const router = useRouter();

  const onLoginSubmit = (data) => {
    console.log(data);

    router.push('/admin/dashboard');
  };

  return (
    <div className="px-6 py-8 shadow-none shadow-primary-blue/10 w-full bg-white rounded-md">
      <section className="mb-8 space-y-2">
        <Image src={logo} alt="logo" width={100} height={100} />
        <h4 className="text-3xl font-semibold">Welcome back!</h4>
        <p className="text-dark-gray">Sign in to your account</p>
      </section>

      <FormWrapper onSubmit={onLoginSubmit} resolver={zodResolver(loginSchema)}>
        <UInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          size="large"
          className="!h-10"
        />

        <UInput
          name="password"
          label="Password"
          type="password"
          placeholder="*************"
          size="large"
          className="!h-10 !mb-0"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="w-full !font-semibold !h-10"
        >
          Log In
        </Button>

        <Link
          href="/forgot-password"
          className="text-primary-blue text-center block mt-2 font-medium hover:text-primary-blue/85"
        >
          I forgot my password
        </Link>
      </FormWrapper>
    </div>
  );
}
