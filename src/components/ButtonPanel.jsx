import { useCounterStore_2 } from "../stores/useCounterStore_2"

function ButtonPanel() {
  const updateCount = useCounterStore_2((state)=>state.updateCount)
  const reset = useCounterStore_2((state)=>state.reset)
  return (
    <div className="max-w-xl mt-8 w-full bg-sky-200 rounded-xl shadow-lg p-6 flex justify-between items-center">
      <button className="btn btn-accent" onClick={()=>updateCount(1)}>+1</button>
      <button className="btn btn-accent" onClick={()=>updateCount(5)}>+5</button>
      <button className="btn btn-accent" onClick={()=>updateCount(10)}>+10</button>
      <button className="btn btn-accent" onClick={reset}>Reset</button>
    </div>
  )
}

export default ButtonPanel