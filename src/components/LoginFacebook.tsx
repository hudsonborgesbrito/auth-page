import { signIn } from "@/auth"
 
export default function SignInFacebook() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("facebook")
      }}
    >
      <button type="submit">Signin with Facebook</button>
    </form>
  )
} 