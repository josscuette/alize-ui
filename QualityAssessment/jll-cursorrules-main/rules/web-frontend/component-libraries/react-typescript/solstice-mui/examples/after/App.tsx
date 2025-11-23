// After: Solstice MUI App with theme provider (no AppContext needed!)
import { SolsticeThemeProvider } from '@jllt/jll-ds-mui'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <SolsticeThemeProvider>
      {/* ✅ No AppContext needed! Theme tokens are automatically available via useTheme() */}
      <ContactForm />
    </SolsticeThemeProvider>
  )
}

export default App
