import { signIn } from '@/configs/auth.config'

export default function Home() {
  return (
    <div>
      <p>CI/CD is completed on the staging server. OOps </p>
      <form
        action={async () => {
          'use server'
          await signIn()
        }}>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}
