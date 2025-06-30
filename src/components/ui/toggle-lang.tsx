import { useTranslation } from 'react-i18next';

import { languagesLabels } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './shadcn/dropdown-menu';
import { Button } from './shadcn/button';
import { Globe } from 'lucide-react';

interface Props {
  // props here
}

export const ToggleLang = ({}: Props) => {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Globe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languagesLabels.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
