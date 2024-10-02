import React from 'react'
import PersonalInfo from '../form/PersonalInfo'
import Password from '../form/Password'

const Settings = () => {
  return (
    <div className='space-y-8'>
      <PersonalInfo />
      <Password />
    </div>
  )
}

export default Settings
