import React from 'react'
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card";
import { Separator } from '@radix-ui/react-dropdown-menu';
import { DottedSeparator } from '@/components/dottted-separator';

const SignInCard = () => {
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none text-center'>
        <CardHeader className='flex items-center justify-center text-center p-7'>
            <CardTitle className='text-2xl'>
                Welcome back!
            </CardTitle>
        </CardHeader>
        <div className='px-7 mb-2'>
            <DottedSeparator/>
        </div>
    </Card>
  )
}

export default SignInCard