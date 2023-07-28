
import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import{HiOutlineBell} from "react-icons/hi"
import { Input } from '@/components/ui/input'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import SearchBar from './SearchBar'




async function Hello() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const { data, error } = await supabase.from("profiles").select().eq('id', session?.user.id).single()
  

  
  
  return (
    <div className='flex w-full  justify-between'>
        <div className='flex flex-col   font-semibold text-xl'>
        <div className='font-semibold text-xl flex gap-3'>
         
          <div>Hello {data?.full_name || "No Name"} ! </div>
          <div className=' animate-wiggle animate-scale'>👋🏾</div>
        </div>
            <div className='font-light text-sm'>Happy to see you</div>
        </div>
        <div className='flex gap-2'>
           <SearchBar/>
        </div>
    </div>
  )
}

export default Hello