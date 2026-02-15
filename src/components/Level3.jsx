import React from 'react'
import Level4 from './Level4'

function Level3({user}) {
  console.log('render level3')
  return (
    <div><Level4 user={user}/></div>
  )
}

export default Level3