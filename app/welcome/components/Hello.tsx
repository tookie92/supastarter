
import { editProfile } from '@/app/actions/theprofile'
import { Button } from '@/components/ui/button'
import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import{HiOutlineBell} from "react-icons/hi"
import getUser from '@/app/actions/getUser'
import { Input } from '@/components/ui/input'

async function Hello() {
    const supabase =createServerComponentClient({cookies})
const {data:{session}} =await supabase.auth.getSession()
  const user = getUser(session?.user.id)
  console.log(user)
  


  return (
    <div className='flex w-full  justify-between'>
        <div className='flex flex-col   font-semibold text-xl'>
            <div className='font-semibold text-xl'>Hello {session?.user.email}! 👋🏾</div>
            <div className='font-light text-sm'>Happy to see you</div>
        </div>
        <div className='flex gap-2'>
            <Input/>
            <Button className='bg-white text-black shadow-sm'><HiOutlineBell size={20}/></Button>
        </div>
    </div>
  )
}

export default Hello