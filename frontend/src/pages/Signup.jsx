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
import useAuth from "@/customHooks/useAuth";

function Signup() {
  const { signUp } = useAuth();

  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handleOnchange
  const onchangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit user handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // set loading true
    setLoading(true)
    try {
      // calling custom hook
      await signUp(formData);
    } catch (error) {
      console.log("error from signup" ,error);
    } finally{
      setLoading(false)
    }
    
  
    // try {
    //   const resp = await baseUrl.post("v1/users/signup", formData);
    //   console.log("user data", resp);
    // } catch (error) {
    //   console.log("getting error while signup", error);
    // }finally{
    //   setLoading(false)
    // }
  };



  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-center items-center gap-6  rounded-md mt-10">
        <Card className="w-full max-w-sm">
          <Pizza className="w-full text-red-700" size={50} />
          <CardHeader>
            <CardTitle className={"text-center text-2xl"}>
              Create New Account
            </CardTitle>
            <CardDescription className="text-xs text-gray-500 text-center">
              Enter your details below to Sign up to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Ente User Name"
                    required
                    onChange={onchangeHandler}
                    value={formData.name}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={onchangeHandler}
                    value={formData.email}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="********"
                    required
                    onChange={onchangeHandler}
                    value={formData.password}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full cursor-pointer"
              
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2 ">
                  <Loader2 className="animate-spin transition-all duration-300 ease-linear" />
                  Loading
                  <samp className="animate-pulse transition-all duration-300 ease-linear">
                    ...
                  </samp>
                </span>
              ) : (
                "Sign up"
              )}
            </Button>
            <CardAction className={"flex justify-center items-center gap-1"}>
              <span className="font-normal text-xs text-gray-600">
                Already have an Account!
              </span>
              <Link
                to={"/login"}
                className={"cursor-pointer font-bold text-sm"}
                variant="link"
              >
                Login
              </Link>
            </CardAction>
          </CardFooter>
            </form>
          </CardContent>
          
        </Card>
      </div>
    </div>
  );
}

export default Signup;
