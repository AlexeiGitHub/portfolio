import clsx from 'clsx';
import { ToggleLang } from '../ui/toggle-lang';
import { ToggleTheme } from '../ui/toggle-theme';
import { motion } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/shadcn/sheet';
import { Button } from '../ui/shadcn/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'projects' },
  { id: 'skills' },
  { id: 'contact' }
];

export const Header = ({ activeSection, scrollToSection }: Props) => {
  const { t } = useTranslation('', { keyPrefix: 'header' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-background fixed top-0 z-20 w-screen border-b'>
      <div className='container mx-auto flex justify-between p-4'>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className='from-primary to-secondary cursor-pointer bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent'
          onClick={() => scrollToSection('home')}
        >
          @0
        </motion.div>

        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-8 md:flex'>
          {navItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                'hover:text-primary relative cursor-pointer px-3 py-2 text-sm font-medium transition-colors',
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(item.id)}
              {activeSection === item.id && (
                <motion.div
                  layoutId='active'
                  className='bg-primary absolute right-0 bottom-0 left-0 h-0.5'
                  /* initial={false} */
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Controls */}
        <div className='flex gap-2'>
          <ToggleTheme />
          <ToggleLang />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-4 w-4' />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className='mt-8 flex flex-col space-y-4'>
                {navItems.map(item => (
                  <Button
                    key={item.id}
                    variant='ghost'
                    className='justify-start'
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                  >
                    {t(item.id)}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
