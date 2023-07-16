import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Header from "./components/Header"
import SidebarNavItem from "./components/SidebarNavItem"
import Sidebar from "./components/Sidebar"


async function otherlayout() {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession()

  if(!session){
      redirect("/")
  }
  return (
    <div className="flex h-screen ">
      {/* Barre latérale */}
      <div className="w-64 hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1">
        {/* Contenu principal du tableau de bord */}
      </div>
    </div>
  )
}

export default otherlayout