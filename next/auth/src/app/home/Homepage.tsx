"use client"

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Homepage = () => {
  const session = useSession()
  return (
    <div>
      <p>Welcome, {session?.data?.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default Homepage