import { useState } from "react";
import Level1 from "./components/Level1";
import { useCounterStore } from "./stores/useCounterStore";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CounterDisplay from "./components/CounterDisplay";
import ButtonPanel from "./components/ButtonPanel";
import HistoryLog from "./components/HistoryLog";

function App() {
  const [user, setuser] = useState({ name: "John" });
  // const count = useCounterStore((state)=>state.count)
  // const increment = useCounterStore((state)=>state.increment)

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-lg flex flex-col items-center">
      {/* <Level1 user={user} /> */}
      {/* <button onClick={increment} className="btn">เพิ่ม</button> */}
      {/* <button onClick={()=>setuser({name: "Ada"})} className="btn">set user</button> */}
      {/* <ThemeSwitcher /> */}
      <CounterDisplay />
      <ButtonPanel />
      <HistoryLog />
    </div>
  );
}

export default App;
