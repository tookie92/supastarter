'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FiHome, FiSettings, FiUser } from 'react-icons/fi';

interface SidebarNavItemProps {
  title: string;
  href: string;
  icon: React.ReactElement;
}
function SidebarNavItems({title, href, icon: Icon }: SidebarNavItemProps) {
    const pathname = usePathname()
    return (
        <div className="flex items-center mb-4">
          <div className={cn('flex items-center text-gray-600 hover:text-white', pathname === href
          
          )}>
              {Icon}
              {title}
          </div>
        </div>
      );
}

export default SidebarNavItems