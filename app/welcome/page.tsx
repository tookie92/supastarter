import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { cookies } from "next/headers"
import Hello from "./components/Hello";

import { redirect } from "next/navigation";
import MesCards from "./components/MesCards";





async function welcome() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    redirect("/unauthenticated")
  }
 
  return (
    <div className="flex flex-col w-full p-6 h-full bg-[#ECEFF4] rounded-md">
     
        <Hello />
      <div className=" mt-11">
        <MesCards/>
     </div>
    </div>
    
  )
}

export default welcome