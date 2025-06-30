import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './shadcn/form';
import { Input } from './shadcn/input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from './shadcn/button';
import { Textarea } from './shadcn/textarea';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  // props here
}

const fields = [
  { name: 'subject', type: 'input' },
  { name: 'message', type: 'textarea' }
] as const;

export const SendForm = ({}: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'contact' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = yup.object({
    subject: yup.string().required(t('error.subjectRequired')),
    message: yup.string().required(t('error.messageRequired'))
  });

  const form = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (values: yup.InferType<typeof formSchema>) => {
    setIsSubmitting(true);

    window.open(
      `mailto:0x33c1c@gmail.com?subject=${values.subject}&body=${values.message}', '_blank`
    );

    await new Promise(resolve => setTimeout(resolve, 2000));
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {fields.map(({ name, type }) => (
          <FormField
            control={form.control}
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium'>
                  {t(name)}
                </FormLabel>
                <FormControl>
                  {type === 'textarea' ? (
                    <Textarea className='h-32' {...field} />
                  ) : (
                    <Input {...field} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type='submit' className='w-full'>
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear'
              }}
              className='h-4 w-4 rounded-full border-2 border-current border-t-transparent'
            />
          ) : (
            <>
              <Mail className='mr-2 h-4 w-4' />
              {t('sendButton')}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
