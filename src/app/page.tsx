import { auth, signOut } from "@/auth";
import { notFound } from "next/navigation";
import Image from "next/image";

const HomePage = async () => {
 const session = await auth();
 if (!session || !session.user || !session.user.name) return notFound();

 return (
   <main>
    <div>
      <h4>Hello {session.user.name}</h4>
    </div>

     <form
       action={async () => {
         "use server";
         await signOut();
       }}
     >
       <button type="submit">Log Out</button>
     </form>
   </main>
 );
};
export default HomePage;