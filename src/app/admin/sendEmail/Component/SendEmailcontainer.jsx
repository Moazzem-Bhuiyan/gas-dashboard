'use client';

import FormWrapper from '@/components/Form/FormWrapper';
import UTextEditor from '@/components/Form/UTextEditor';
import { Button } from 'antd';
import { Edit } from 'lucide-react';

export default function SendEmailContainer() {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Send Email</h3>

      <FormWrapper>
        <UTextEditor
          name="privacyPolicy"
          placeholder="Note: Enter email content here. (e.g How and why did you come up with the idea? etc)"
        />

        <Button type="primary" size="large" className="w-full rounded-xl" icon={<Edit size={18} />}>
          Send
        </Button>
      </FormWrapper>
    </section>
  );
}
