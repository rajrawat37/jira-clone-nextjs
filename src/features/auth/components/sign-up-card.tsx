import React from 'react'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { DottedSeparator } from '@/components/dottted-separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import Link from 'next/link';


const SignUpCard = () => {
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none text-center'>
        <CardHeader className='flex flex-col items-center justify-center text-center p-7'>
            <CardTitle className='text-2xl'>
                Sign Up
            </CardTitle>
            <CardDescription>
                By signing up, you agree to our {" "} 
                <Link href="/privacy" className='text-blue-700 hover:underline'>Privacy Policy</Link>
            </CardDescription>{" "}
            <CardDescription>
                and {" "}
                <Link href="/terms" className='text-blue-700 hover:underline'>Terms of Service</Link>
            </CardDescription>{" "}
        </CardHeader>
        <div className='px-7 -mt-6'>
            <DottedSeparator/>
        </div>
        <CardContent className="p-7 -mt-7">
           <form action="" className='space-y-4 '>
            <Input
             required
             type='email'
             value={""}
             placeholder='Enter email address'
             onChange={() => {}}
             disabled={false}
            />
            <Input
             required
             type='password'
             value={""}
             placeholder='Enter password'
             onChange={() => {}}
             disabled={false}
            />
            <Button disabled={false} type='submit' className='w-full'>
              Sign In
            </Button>
           </form>
        </CardContent>
        <div className="px-6 -mt-5">
          <DottedSeparator/>
        </div>
        <CardFooter className='p-7 -mt-4 flex flex-col gap-y-4'>
         <Button variant="secondary" className='w-full'>
           <FcGoogle className="size-5" />
           Login with Google
         </Button>
         <Button variant="secondary" className='w-full'>
           <FaGithub className="size-5" />
           Login with GitHub
         </Button>
        </CardFooter>
    </Card>
  )
}

export default SignUpCard