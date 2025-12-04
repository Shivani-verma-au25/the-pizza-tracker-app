import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2, Pizza } from "lucide-react";

function Login() {
    const[loading ,setLoading] = useState(false);
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-center items-center gap-6  rounded-md mt-10">
        <Card className="w-full max-w-sm">
            <Pizza className='w-full text-red-700'  size={50} />
          <CardHeader >
            <CardTitle className={'text-center text-2xl'}>Login to your account</CardTitle>
            <CardDescription className='text-xs text-gray-500 text-center'>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full cursor-pointer">
              {loading ? <span className="flex justify-center items-center gap-2 "><Loader2 className="animate-spin transition-all duration-300 ease-linear"/>Loading<samp className="animate-pulse transition-all duration-300 ease-linear">...</samp></span> : 'Login'}
            </Button>
            <CardAction className={'flex justify-center items-center gap-1'}>
                <span className="font-normal text-xs text-gray-600">Don't have an Account!</span>
                <Link to={'/signup'} className={'cursor-pointer font-bold text-sm'} variant="link">Sign Up</Link>
              
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
