import { Check, Copy, ExternalLink, Linkedin, Mail, Send } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/shadcn/card';

import { SendForm } from '../ui/sendForm';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { ContactItem } from '../ui/contact-item';

export const Contact = () => {
  const { t } = useTranslation('', { keyPrefix: 'contact' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { copy, copied } = useCopyToClipboard();

  return (
    <section id='contact' className='flex h-screen items-center py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>{t('title')}</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            {t('description')}
          </p>
        </motion.div>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8'
          >
            <div>
              <h3 className='mb-6 text-2xl font-semibold'>{t('getInTouch')}</h3>
              <p className='text-muted-foreground mb-8'>
                {t('contactDescription')}
              </p>
            </div>

            <div className='space-y-6'>
              <ContactItem
                index={0}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                icon={<Mail className='text-primary h-5 w-5' />}
                title='Email'
                value='0x33c1c@gmail.com'
                onClick={() => copy('0x33c1c@gmail.com')}
                trailingIcon={
                  copied ? (
                    <motion.div
                      key='check'
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Check />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='copy'
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Copy />
                    </motion.div>
                  )
                }
              />

              <ContactItem
                index={1}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                icon={<Send className='text-primary h-5 w-5' />}
                title='Telegram'
                href='https://t.me/Ox33c1c'
                trailingIcon={<ExternalLink />}
              />
              <ContactItem
                index={2}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                icon={<Linkedin className='text-primary h-5 w-5' />}
                title='LinkedIn'
                href='https://www.linkedin.com/in/0x33c1c/'
                trailingIcon={<ExternalLink />}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <SendForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
