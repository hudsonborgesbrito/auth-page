import { signIn } from "@/auth"
 
export default function SignInFacebook() {
  return (
    <form name="fbLogin"
      action={async () => {
        "use server"
        await signIn("facebook")
      }}
    >
      <button type="submit">Signin with Facebook</button>
    </form>
  )
} 