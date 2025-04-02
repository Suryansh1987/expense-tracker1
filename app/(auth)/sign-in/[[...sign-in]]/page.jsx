import { SignIn } from '@clerk/nextjs'
import Image from "next/image";
export default function Page() {
  return( <section className="h-screen flex">
    {/* Left Side - Image (Smaller & Balanced) */}
    <div className="hidden md:flex w-1/2 bg-gray-100 dark:bg-gray-800 items-center justify-center">
      <Image 
        src="/signin.jpg" 
        alt="Sign-in Visual" 
        width={1000} 
        height={700} 
        className="object-contain"
      />
    </div>
  

    <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-4">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
        </div>
  

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Sign in to your account
        </h1>
  
        <div className="mt-4 flex justify-center">
          <SignIn className="w-full max-w-xs shadow-none border-none bg-transparent" redirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  </section>
  
  
  
   ) 
}