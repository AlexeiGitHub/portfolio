import { Code, Palette, Zap } from 'lucide-react';
import { useInView, motion } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from '../ui/shadcn/card';
import { Badge } from '../ui/shadcn/badge';
import { useTranslation } from 'react-i18next';

interface Props {
  // props here
}

export const About = ({}: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'about' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code,
      title: t('feature1.title'),
      description: t('feature1.description')
    },
    {
      icon: Palette,
      title: t('feature2.title'),
      description: t('feature2.description')
    },
    {
      icon: Zap,
      title: t('feature3.title'),
      description: t('feature3.description')
    }
  ];

  const technologies = [
    'React',
    'Next.js',
    'Redux Toolkit',
    'Zustand',
    'Tailwind',
    'Styled-components',
    'Material UI',
    'Ant Design',
    'Radix UI',
    'shadcn/ui',
    'RSuite',
    'Formik',
    'Recharts',
    'Nivo',
    'Motion',
    'Web3.js',
    'viem',
    'LedgerHQ',
    'ethers.js',
    'next-intl',
    'i18next',
    'RSBuild',
    'Vite',
    'axios',
    'next-themes',
    'clsx'
  ];

  return (
    <section id='about' className='bg-muted/30 py-20'>
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
            {t('subtitle')}
          </p>
        </motion.div>

        <div className='grid gap-12 md:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='mb-6 text-2xl font-semibold'>{t('story.title')}</h3>
            <div className='text-muted-foreground mb-6 space-y-2 leading-relaxed'>
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
              <p>{t('story.p4')}</p>
            </div>

            <div className='space-y-4'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className='flex items-start space-x-3'
                >
                  <div className='bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg'>
                    <feature.icon className='text-primary h-4 w-4' />
                  </div>
                  <div>
                    <h4 className='font-medium'>{feature.title}</h4>
                    <p className='text-muted-foreground text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardContent className='p-6'>
                <h3 className='mb-4 text-xl font-semibold'>
                  {t('technologies')}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.05
                      }}
                    >
                      <Badge
                        variant='outline'
                        className={
                          'hover:bg-primary hover:text-primary-foreground transition-colors'
                        }
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
