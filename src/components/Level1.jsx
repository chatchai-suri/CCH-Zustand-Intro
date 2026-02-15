import Level2 from "./Level2"

function Level1({user}) {
  console.log('render level1')
  return (
    <div><Level2 user={user} /></div>
  )
}

export default Level1