import AuthForm from "@/components/myComponents/AuthForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export  default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}}= await supabase.auth.getSession()

  if(session){
    redirect('/welcome')
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    
        <AuthForm/>
    
    </main>
  )
}
