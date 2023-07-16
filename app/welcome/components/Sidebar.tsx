'use client'
import { useAuth } from '@/hooks/profile'
import SidebarNavItem from './SidebarNavItem'

function Sidebar() {
    const {handleSignout} = useAuth()
  return (
    <div className="border-r-2 border-gray-100 flex flex-col  min-h-screen text-white">
      <div className="flex items-center  justify-between py-4 px-6">
        {/* Logo */}
        <div>Logo</div>
        {/* Bouton de fermeture de la barre latérale */}
        <button>x</button>
      </div>
      <div className='flex items-center'>
        <div className="flex flex-col bg-[#F8F9F8] h-[50%] ">
            <SidebarNavItem text="Tableau de bord" icon="..." href={handleSignout} />
        </div>
       {/* Ajoute d'autres éléments de navigation ici */}
      </div>
    </div>
  )
}

export default Sidebar