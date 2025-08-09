import React from 'react'
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { DottedSeparator } from '@/components/dottted-separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";


//TypeScript → prevents you from writing code for fields that don’t exist in your schema.
// Zod → prevents users from entering invalid data into those fields.


// This is the skeleton of your form — the rules for what fields exist and what they must look like.
// This is runtime validation logic — Zod will actually check the values later.
const formSchema = z.object({
  email: z.email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});


//type formData is just a compile-time contract for your code.
// When your app runs in the browser, TypeScript’s types don’t exist anymore — they’re stripped out during compilation to plain JavaScript.
type formData = z.infer<typeof formSchema>;

const SignInCard = () => {

    // useForm() is a Hook hence it must be written inside functional component
    // TypeScript enforces your form matches that structure at compile time.
    const form = useForm<formData>({
        resolver: zodResolver(formSchema), // Zod enforces the same rules at runtime.
        defaultValues: {
          email: "",
          password: "",
        },
    });
  

  const onSubmit = (data: formData) => {
    console.log(data);
  };

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
        <CardContent className="p-7 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 '>
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl></FormControl>
                    <Input
                    required
                    type='email'
                    placeholder='Enter email address'
                    {...form.register("email")}
                    disabled={false}
                    />
                    <Input
                    required
                    type='password'
                    placeholder='Enter password'
                    {...form.register("password")}
                    disabled={false}
                    />
                    <Button disabled={false} type='submit' className='w-full'>
                      Sign In
                    </Button>
                  </FormItem>)}
                  ></FormField>
            </form>
          </Form>
        </CardContent>
        
        <div className="px-6">
          <DottedSeparator/>
        </div>
        <CardFooter className='p-7 flex flex-col gap-y-4'>
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

export default SignInCard





// Without Zod, we cna still achieve compile-time safety in react-hook-form by manually defining a Typescript type for the form data insted of inferring it

/*

type formData = {
  email : string;
  password : string;
}

const form = useForm<FormData>({
    defaultValues: {
       email: "",
       password:"",
    },  
});

*/


/*

How React Hook forms help here ?
Without form hooks we would need to manage state for each field separately by useState() like :
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
We need to handle form submission,errors and reset also

But React hook forms Reset, watch, and set values are built-in.
It kind of reduce the boilerplate code and manual state handling, acts as an abstraction.
Its basically a form state automation layer.

*/

