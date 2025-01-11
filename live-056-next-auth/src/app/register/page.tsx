import { RegisterForm } from "@/components/register-form"
import { db } from "@/lib/db"
import { hash } from "bcryptjs"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email('Insira um email válido'),
  password: z.string().min(8)
})

export default function Page() {
  async function registerAction(formData: FormData) {
    'use server'
    console.log('formData', formData)
    const { success, data } = schema.safeParse(Object.fromEntries(formData))

    if (!success) return

    const { email, name, password } = data

    const hashedPassword = await hash(password, 12)

    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    })

  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm registerAction={registerAction}/>
      </div>
    </div>
  )
}
