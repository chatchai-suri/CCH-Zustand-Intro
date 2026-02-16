import { create } from "zustand"
import { persist } from "zustand/middleware"

const themeStore_2 = (set) => ({
  theme: 'light',
  toggleTheme: ()=>set((state)=>({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
})

export const useThemeStore_2 = create(
  persist(themeStore_2, {
    name: 'theme-config02'
  }))

