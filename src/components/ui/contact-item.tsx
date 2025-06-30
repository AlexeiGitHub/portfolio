import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface ContactItemProps {
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  onClick?: () => void;
  href?: string;
  icon: ReactNode;
  title: string;
  value?: string;
  trailingIcon?: ReactNode;
}

export const ContactItem = ({
  index,
  hoveredIndex,
  setHoveredIndex,
  onClick,
  href,
  icon,
  title,
  value,
  trailingIcon
}: ContactItemProps) => {
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href, target: '_blank' } : {})}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className='hover:bg-muted/50 group relative flex cursor-pointer items-center space-x-4 rounded-lg p-4 transition-colors'
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      onClick={onClick}
    >
      <div className='bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors'>
        {icon}
      </div>
      <div>
        <h4 className='font-medium'>{title}</h4>
        {value && <p className='text-muted-foreground'>{value}</p>}
      </div>
      {trailingIcon && (
        <motion.div
          animate={{
            opacity: hoveredIndex === index ? 1 : 0,
            x: hoveredIndex === index ? 0 : 5
          }}
          transition={{ duration: 0.3 }}
          className='absolute right-4'
        >
          <AnimatePresence mode='wait'>{trailingIcon}</AnimatePresence>
        </motion.div>
      )}
    </Wrapper>
  );
};
