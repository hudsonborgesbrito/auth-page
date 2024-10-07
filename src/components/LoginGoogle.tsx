import { signIn } from "@/auth"
 
export default function SignInGoogle() {
  return (
    <form name="googleLogin"
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 