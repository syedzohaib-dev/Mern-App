import React, { useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

function App() {

  const [role, setRole] = useState('admin')

  const CurrentUser = getUserRole(role)

  return <CurrentUser />
}

export default App