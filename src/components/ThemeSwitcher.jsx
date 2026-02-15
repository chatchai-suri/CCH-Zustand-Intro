import { useThemeStore } from "../stores/useThemeStore"

function ThemeSwitcher() {
  const theme = useThemeStore((state)=>state.theme)
  const toggleTheme = useThemeStore((state)=>state.toggleTheme)
  return (
    <div className={`
      max-w-xl w-full rounded-lg shadow-xl p-6
      flex flex-col items-center justify-center transition-colors duration-500
      ${theme === 'light' ? 'bg-amber-200 text-black' : 'bg-slate-800 text-white'}
    `}>
      <p>Current Theme:<strong>{theme}</strong></p>
      <button 
      onClick={toggleTheme} 
      className={`btn mt-4 ${theme === 'light' ? 'bg-slate-800 text-white' : 'bg-amber-200 text-black'}`}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default ThemeSwitcher