import SignUp from "@/app/signIn/page";
import SignUpCard from "@/components/SignUp";
import Stories from "@/components/Stories";

import Image from "next/image";
import SignUpPage from "./sIgnUp/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

        {/* <SignUp/> */}
        {/* <Stories/> */}
        <SignUpPage/>
      
    </div>
  );
}
