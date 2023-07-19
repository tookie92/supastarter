import { FaHome } from "react-icons/fa"
import{IoMdSettings} from "react-icons/io"
import Logout from "./components/Logout"
import { SidebarNav } from "./components/SidebarNav"
import { Toaster } from "@/components/ui/toaster"
const sidebarNavItems = [
    {
      title: "Profile",
      href: "/welcome",
      icon:<FaHome size={20}/>
    },
    {
      title: "Profile",
      href: "/welcome/testla",
      icon:<FaHome size={20}/>
  
    },
   
   
  ]

function DashboardLayout({children}:{children: React.ReactNode}) {
  return (
      <section className=' mx-auto px-11  min-h-screen'>
          <div className="flex   w-full flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 min-h-screen lg:w-[15%] flex flex-col ">
              <div className='basis-1/4 mt-12 text-2xl font-bold text-center'>
                Logo
              </div>
            <SidebarNav className='basis-1/2' items={sidebarNavItems} />
            <div className='flex basis-1/6 items-end'>
              <Logout/>
            </div>
         </aside>
            <div className="flex-1 mx-auto max-w-full">
                <div className="flex flex-col h-screen p-14 ">
                <div>
                    {children}
                </div>
                </div>
              </div>
             
            
          </div>
          <Toaster/>
      </section>
  )
}

export default DashboardLayout