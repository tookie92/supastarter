import { FaHome } from "react-icons/fa"
import Logout from "./components/Logout"
import { SidebarNav } from "./components/SidebarNav"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import SidebarNavDesign from "./components/SidebarNavDesign"
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

export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex h-screen bg-gray-200">
       
       <div className="bg-white w-64 hidden md:flex flex-col p-8">
            <div className="h-16  text-black flex items-start  justify-center p-8 basis-1/4">
                <h1>Logo</h1>
            </div>
        <SidebarNav className=" basis-2/4 mt-11" items={sidebarNavItems} />
        <div className="basis-1/4 flex flex-col justify-end">
          <Logout/>
        </div>
        
        </div>
        
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* <header className="p-4 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Button 1</button>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Button 2</button>
                    </div>
                </div>
            </header> */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container mx-auto px-6 py-8">
                    {/* <h3 className="text-lg font-semibold">Main Content</h3> */}
                    {children}
                </div>
            </main>
      </div>
      <Toaster/>
    </div>
  )
}

