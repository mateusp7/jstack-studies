import { Input } from "@/components/ui/input"
import { useRef } from "react"

export const Ref = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <Input ref={inputRef} />
    </div>
  )
}
