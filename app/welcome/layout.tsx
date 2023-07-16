import { Toaster } from '@/components/ui/toaster'
import React from 'react'

function Otherlayout({children}:{

    children:React.ReactNode
}) {
  return (
    <div>
        {children}
        <Toaster/>
    </div>
  )
}

export default Otherlayout