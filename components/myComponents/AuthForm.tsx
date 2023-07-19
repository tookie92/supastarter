'use client'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'
import { useAuth } from '@/hooks/profile'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
 type Variant = "REGISTER" | "LOGIN"
function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN")
  const {toast} = useToast()
  const {handleSignup, handleSignIn} = useAuth()

  const toggleVariant = useCallback(()=>{
    if(variant === "LOGIN"){
      setVariant("REGISTER")
    }else{
      setVariant("LOGIN")
    }
  },[variant])

  const {
    handleSubmit,
    register,
    reset,
    formState:{
      errors
    }
  }= useForm<FieldValues>({
    defaultValues:{
      email:"",
      password:""
    }
  })

  const onSubmit: SubmitHandler<FieldValues>= (data)=>{
     if(variant === "LOGIN"){
      handleSignIn(data.email, data.password)

    }else{
       handleSignup(data.email, data.password)

     }
  }
  return (
    <div className=' w-full lg:w-[50%] flex flex-col justify-center'>
      <div className='text-center flex flex-col gap-3'>
        <div className=' text-5xl font-bold'>SicherHeim</div>
        <div className=' mt-8 text-3xl font-semibold'>Hello Again !</div>
        <div className=' font-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
      </div>
      <Card className=" border-none shadow-none">
      <CardHeader>
        {/* <CardTitle>SicherHeim</CardTitle>
        <CardDescription> {variant==="LOGIN"? "Please sign in":"Please Sign up"}</CardDescription> */}
      </CardHeader>
      <CardContent>
      <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input {...register("email")}/>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input {...register("password")} type='password'/>
        </div>
        
          <Button className='w-full mt-11' type='submit' variant="primary">submit</Button>
        
      </form>
      <div className=' mt-6 flex flex-col gap-2'>
        <hr/>
        <div className='flex gap-2'>
            <div>
              {variant==="LOGIN"? "Creer un compte?":"Deja un compte?"}
            </div>
            <div onClick={toggleVariant} className='hover:underline cursor-pointer hover:text-sky-500'>
              {variant==="LOGIN"? "Sign up":"Sign in"}
            </div>
        </div>
      </div>
      </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default AuthForm