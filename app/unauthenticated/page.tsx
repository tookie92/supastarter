import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"

async function unauthenticated() {
    const supabase = createServerComponentClient({cookies})
    const {data:{session}} = await supabase.auth.getSession()

    if(session){
        redirect("/welcome")
    }

  return (
    <div>unauthenticated</div>
  )
}

export default unauthenticated