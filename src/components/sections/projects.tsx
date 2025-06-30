import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/shadcn/card';
import { Button } from '../ui/shadcn/button';
import { ExternalLink } from 'lucide-react';
import { Badge } from '../ui/shadcn/badge';
import { useTranslation } from 'react-i18next';

interface Props {
  // props here
}

export const Projects = ({}: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'projects' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Official Fusion website',
      description: t('project1.description'),
      image: '/portfolio/projects/fusion.webp',
      technologies: [
        'React',
        'nivo',
        'styled-components',
        'typescript',
        'rsbuild'
      ],
      /* github: '#', */
      demo: 'https://fusion.org/'
    },
    {
      title: 'FSNscan – Blockchain Explorer',
      description: t('project2.description'),
      image: '/portfolio/projects/fsnscan.webp',
      technologies: [
        'React',
        'axios',
        'bignumber.js',
        'formik',
        'recharts',
        'redux',
        'viem',
        'typescript',
        'rsbuild',
        'antd'
      ],
      /* github: '#', */
      demo: 'https://fsnscan.com/'
    },
    {
      title: 'MyFusionWallet',
      description: t('project3.description'),
      image: '/portfolio/projects/myFusionWallet.webp',
      technologies: [
        'React',
        'rsuite',
        'styled-components',
        'redux',
        'ethereumjs-wallet',
        'bignumber.js',
        'ledgerhq',
        'viem',
        'rsbuild',
        'typescript'
      ],
      /* github: '#', */
      demo: 'https://myfusionwallet.com/'
    }
  ];

  return (
    <section id='projects' className='py-20'>
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

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className=''
            >
              <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image || 'projects/placeholder.svg'}
                    alt={project.title}
                    width={400}
                    height={200}
                    className='h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 flex items-center justify-center space-x-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    {/* {project.github && (
                      <Button size='sm' variant='secondary' asChild>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='mr-2 h-4 w-4' />
                          Code
                        </a>
                      </Button>
                    )} */}
                    <Button size='sm' asChild>
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='mr-2 h-4 w-4' />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='group-hover:text-primary transition-colors'>
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
