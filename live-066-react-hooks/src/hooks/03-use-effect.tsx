import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export const Effect = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('entrou')
    if (state === 10) {
      alert('Chegou no 10')
    }
  }, [state])

  function handlePlus() {
    setState((prev) => prev + 1)
  } 

  function handleMinus() {
     setState((prev) => prev - 1)
  }

  return (
    <div>
      <h1>Counter: {state}</h1>
      <div className="space-x-1">
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
      </div>
    </div>
  )
}
