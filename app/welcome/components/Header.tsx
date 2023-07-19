'use client'
import { editProfile } from '@/app/actions/theprofile'
import { Button } from '@/components/ui/button'
import React from 'react'

function Headerla() {
  return (
    <Button onClick={()=>{
      editProfile("Joseph Ikinda")
  }}></Button>
  )
}

export default Headerla