'use client'
import { useAuth } from "@/hooks/profile"
import {MdOutlineLogout} from "react-icons/md"

function Logout() {
    const {handleSignout} = useAuth()
  return (
    <div onClick={handleSignout} className="flex gap-2 text-slate-400 cursor-pointer font-semibold hover:text-[#1EB985]">
        <div><MdOutlineLogout size={20}/></div>
        <div>Logout</div>
    </div>
  )
}

export default Logout