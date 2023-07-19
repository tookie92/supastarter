'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function getUser(session: string | undefined) {
    'use server'
    const supabase = createServerActionClient({cookies})
    
        const {data, error} = await supabase.from("profiles").select().eq("id", session)
        return data;
    
    
}