import { useCounterStore_2 } from "../stores/useCounterStore_2";

function CounterDisplay() {
  const count = useCounterStore_2((state)=>state.count)
  return (
    <div
      className="max-w-xl w-full rounded-lg shadow-xl p-6 bg-sky-200
      flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-medium">Count: {count}</h1>
      {count >= 100 && <p className="text-red-500">Count reached 100!</p>}
    </div>
  );
}

export default CounterDisplay;
