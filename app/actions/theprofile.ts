'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function editProfile(fullname: string){
    const supabase = createServerActionClient({cookies})
    const {data:{session}} = await supabase.auth.getSession()
    try {
        await supabase.from("profiles").update({full_name: fullname}).eq("id", session?.user.id)
        revalidatePath("/welcone")
    } catch (error) {
        console.log("Response add>>>", error)
    }
}