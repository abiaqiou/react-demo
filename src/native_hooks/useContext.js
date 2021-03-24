import React, { useContext } from 'react'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext(themes.light)

const ThemedButton = () => {
  const theme = useContext(ThemeContext)
  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      I am styled by theme context!
    </button>
  )
}

const Toolbar = () => {
  return (
    <div>
      <h2>useContext</h2>
      <ThemedButton />
    </div>
  )
}

const UseContext = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default UseContext
