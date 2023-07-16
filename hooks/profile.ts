import { useToast } from "@/components/ui/use-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


export const useAuth = ()=>{
     const supabase = createClientComponentClient()
     const {toast} = useToast()
     const router = useRouter()


     const handleSignup = async(email:string, password:string)=>{
        try {
            await supabase.auth.signUp({email,password,
            options:{
                emailRedirectTo:`${location.origin}/auth/callback`
            }
            })
           router.refresh()
        } catch (error) {
            
            toast({
                description: "Verifier encore les donnes"
            })
        }
     }
     const handleSignIn = async(email:string, password:string)=>{
        try {
            await supabase.auth.signInWithPassword({email,password})
            .then((reponse)=>{
                if(reponse.error?.status === 400){
                    throw new Error("that's not alright")
                }

                router.push("/welcome")
            })
            
        } catch (error) {
            toast({
                title:`Message`,
                description: `${error}`
            })
        }
     }

     const handleSignout = async()=>{
        try{
            await supabase.auth.signOut()
            router.push("/")
        }catch(error){}
     }

     return{handleSignup, handleSignIn, handleSignout}
}