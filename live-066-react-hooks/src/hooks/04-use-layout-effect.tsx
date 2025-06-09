import { Button } from "@/components/ui/button"
import { useEffect, useLayoutEffect, useState } from "react"

// Trigger -> manipulação da vDOM -> useLayoutEffect (sincrono) -> "Pinta a tela" -> useEffect (assincrono)

export const LayoutEffect = () => {
  const [state, setState] = useState(0)
  const [position, setPosition] = useState(0)

  useLayoutEffect(() => {
    setPosition(200)
  }, [])

  function handlePlus() {
    setState((prev) => prev + 1)
  } 

  function handleMinus() {
     setState((prev) => prev - 1)
  }

  return (
    <div>
      <h1>Counter: {state}</h1>
      <div className="absolute bg-teal-500 size-20" style={{
        left: position
      }}/>
      <div className="space-x-1">
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
      </div>
    </div>
  )
}
