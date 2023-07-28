import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'

function SearchBar() {
  return (
      <>
           <Input/>
            <Button className='bg-white text-black shadow-sm'><HiOutlineBell size={20}/></Button>
      </>
  )
}

export default SearchBar