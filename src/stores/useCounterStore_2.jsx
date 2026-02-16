import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCounterStore_2 = create(
  devtools((set) => ({
    count: 0,
    history: [],
    updateCount: (amount) =>
      set((state) => {
        const newCount = state.count + amount;
        return {
          count: newCount,
          history: [...state.history, `${amount}`],
        };
      }),
    reset: () => set((state) => ({ count: 0, history: [] })),
  }), {name: 'counter-store2'}),
);
