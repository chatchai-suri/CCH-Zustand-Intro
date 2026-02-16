import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const themeStore_2 = (set) => ({
  theme: 'light',
  toggleTheme: ()=>set((state)=>({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
})

export const useThemeStore_2 = create(
persist(  devtools(themeStore_2, {
    name: 'theme-devtool'
  }), {name: 'theme-config2'})
)

