import Body from "./components/Body"
import Footer from "./components/Footer"
import Perfil from "./components/Perfil"

function App() {

  return (
    <div className="flex h-full flex-col font-outfit dark:bg-zinc-900">
      <Perfil/>
      <Body />
      <Footer />
    </div>
  )
}

export default App
