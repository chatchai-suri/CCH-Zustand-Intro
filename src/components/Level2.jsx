import Level3 from './Level3'

function Level2({user}) {
  console.log('render level2')
  return (
    <div><Level3 user={user} /></div>
  )
}

export default Level2