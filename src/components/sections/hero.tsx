import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/shadcn/button';
import { ArrowDown, Github, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

interface Props {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'hero' });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id='home'
      className='flex min-h-screen items-center justify-center'
    >
      <motion.div
        style={{ y, opacity }}
        className='container mx-auto px-4 text-center'
      >
        <div className='space-y-6'>
          <div className='inline-flex space-x-5 text-4xl font-bold md:text-6xl lg:text-7xl'>
            <motion.h1
              className='to-secondary bg-gradient-to-r from-purple-500 bg-clip-text text-transparent'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Alexei
            </motion.h1>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              href={'https://t.me/Ox33c1c'}
              className='text-muted-foreground transition-color h-fit text-xs underline underline-offset-4 duration-75 hover:text-purple-500 md:text-xl lg:text-2xl'
              target='_blank'
            >
              @0x33c1c
            </motion.a>
          </div>

          <motion.p
            className='text-muted-foreground text-xl md:text-2xl'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {t('title')}
          </motion.p>

          <motion.p
            className='text-muted-foreground mx-auto max-w-2xl text-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className='flex flex-col items-center justify-center gap-4 sm:flex-row'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <Button
              size='lg'
              className='group'
              onClick={() => scrollToSection('contact')}
            >
              {t('getInTouch')}
              <ArrowDown className='ml-2 h-4 w-4 transition-transform group-hover:translate-y-1' />
            </Button>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              className='flex space-x-4'
            >
              <Link
                to='https://github.com/AlexeiGitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outline' size='icon'>
                  <Github className='h-4 w-4' />
                </Button>
              </Link>
              <Link
                to='https://www.linkedin.com/in/0x33c1c/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outline' size='icon'>
                  <Linkedin className='h-4 w-4' />
                </Button>
              </Link>
              <Link
                to='https://t.me/Ox33c1c'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outline' size='icon'>
                  <Send className='h-4 w-4' />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
