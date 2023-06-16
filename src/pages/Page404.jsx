import React from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from '../contexts/UserAuthContext'

function Page404() {
  const {user} = userAuth()
  return (
    <div >
     <strong>404</strong>   Page not found go back {user.role === 1 ?<Link style={{color:'darkseagreen'}} to='/admin'>Home</Link>:<Link style={{color:'darkseagreen'}} to='/'>Home</Link>}
    </div>
  )
}

export default Page404