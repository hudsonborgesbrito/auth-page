import SignInFacebook from "@/components/LoginFacebook";
import SignInGoogle from "@/components/LoginGoogle";

const LoginPage = () => {
 return (
   <div>
    <p><SignInGoogle /></p>
    <p><SignInFacebook /></p>
   </div>
   );
};

export default LoginPage;