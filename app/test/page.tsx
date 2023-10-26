import React from 'react'
import { cookies } from 'next/headers'

export default function page() {
    const auth = cookies().get('access_token')?.value
  return (
    <div>
        {auth}
        
    </div>
  )
}
