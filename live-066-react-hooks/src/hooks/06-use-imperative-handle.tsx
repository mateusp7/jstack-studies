import { Button } from "@/components/ui/button"
import { Input, type InputRef } from "@/components/ui/input"
import { useRef } from "react"

export const ImperativeHandle = () => {
  const inputRef = useRef<InputRef>(null)

  function handleSubmit() {
    inputRef.current?.toggle()
  }


  return (
    <div className="space-x-1">
      <Input ref={inputRef} />

      <Button onClick={handleSubmit}>
        Mostrar input
      </Button>
    </div>
  )
}
