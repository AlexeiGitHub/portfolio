import {
  Cpu,
  DatabaseIcon,
  Palette,
  BrushCleaning,
  Bubbles,
  BrickWall,
  AppWindowIcon,
  Boxes,
  Combine,
  Group,
  Ungroup,
  Usb,
  Wrench,
  Drill,
  Hammer,
  GitPullRequestArrowIcon,
  Frame
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/shadcn/card';

import ReactLogo from '@/svg/react.svg?react';
import NextLogo from '@/svg/next.svg?react';
import ShadcnLogo from '@/svg/shadcn.svg?react';

interface Props {
  // props here
}

export const Skills = ({}: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'skills' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Cpu,
      title: t('core'),
      skills: [
        {
          name: 'React',
          icon: <ReactLogo width={24} hanging={24} className='text-primary' />
        },
        {
          name: 'Next.js',
          icon: <NextLogo width={24} hanging={24} className='text-primary' />
        },
        { name: 'Tailwind', icon: <Palette /> },
        { name: 'Zustand', icon: <DatabaseIcon /> }
      ]
    },
    {
      icon: BrushCleaning,
      title: t('ui'),
      skills: [
        {
          name: 'Shadcn/ui',
          icon: <ShadcnLogo width={24} hanging={24} className='text-primary' />
        },
        { name: 'Radix UI', icon: <Bubbles /> },
        { name: 'Ant Design', icon: <BrickWall /> },
        { name: 'Material UI', icon: <AppWindowIcon /> }
      ]
    },
    {
      icon: Boxes,
      title: t('web3'),
      skills: [
        { name: 'Viem', icon: <Combine /> },
        { name: 'LedgerHQ', icon: <Usb /> },
        { name: 'Ethers.js', icon: <Group /> },
        { name: 'Web3.js', icon: <Ungroup /> }
      ]
    },
    {
      icon: Wrench,
      title: t('tools'),
      skills: [
        { name: 'Rsbuild', icon: <Drill /> },
        { name: 'Vite', icon: <Hammer /> },
        { name: 'Git/GitHub', icon: <GitPullRequestArrowIcon /> },
        { name: 'Figma', icon: <Frame /> }
      ]
    }
  ];

  return (
    <section id='skills' className='bg-muted/30 py-20'>
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

        <div className='grid gap-8 md:grid-cols-2'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center space-x-3'>
                    <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                      <category.icon className='text-primary h-5 w-5' />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      className='space-y-2'
                    >
                      <div className='flex items-center justify-between'>
                        <span className='font-medium'>{skill.name}</span>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
