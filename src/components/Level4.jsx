import { useCounterStore } from "../stores/useCounterStore"

function Level4({user}) {
  console.log('render level4')
  const count = useCounterStore((state)=>state.count)
  return (
    <div>
      <button className="btn">{count}</button>
      <p>Hello, {user.name}</p>
    </div>
  )
}

export default Level4