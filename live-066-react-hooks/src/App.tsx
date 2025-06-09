import { Context } from "./hooks/08-use-context"

const App = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-black text-white">
      <div className="w-full max-w-sm">
        <Context />
      </div>
    </div>
  )
}

export default App