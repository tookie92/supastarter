'use client'


interface SidebarNavItemProps{
    text: string;
  icon: string;
  href: ()=> void;
}

function SidebarNavItem({text, icon, href}: SidebarNavItemProps) {
  return (
    <div onClick={href} className="flex items-center py-4 px-6 hover:bg-gray-700">
        {/* Icon */}
        <span className="text-gray-400">{icon}</span>
        {/* Texte */}
        <span className="ml-3 text-gray-400">{text}</span>
    </div>

  )
}

export default SidebarNavItem