import { useCounterStore_2 } from "../stores/useCounterStore_2";

function HistoryLog() {
  const history = useCounterStore_2((state) => state.history);
  return (
    <div
      className="max-w-xl w-full rounded-lg shadow-xl p-6 mt-6 bg-sky-200
      flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-medium text-center">History</h1>
      <ul>
        {history.map((el, index) => (
          <li
            key={index}
            className="bg-white/50 rounded px-4 py-1 text-center shadow-sm"
          >
            Added: <span className="font-bold">+{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryLog;
