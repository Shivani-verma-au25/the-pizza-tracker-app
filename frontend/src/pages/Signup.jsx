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
    role: 'user'
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
    try {
      // calling custom hook
      await signUp(formData);
    } catch (error) {
      console.log("error from signup",error);
    } 
  };

console.log(formData,'signin');


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
                <div className="grid gap-2 py-2 px-2 ">
                  <Label>Select Role</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="user"
                        name="role"
                        value="user"
                        checked={formData.role === "user"}
                        onChange={onchangeHandler}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <Label htmlFor="user" className="cursor-pointer mb-0">User</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="admin"
                        name="role"
                        value="admin"
                        checked={formData.role === "admin"}
                        onChange={onchangeHandler}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <Label htmlFor="admin" className="cursor-pointer mb-0">Admin</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="delivery"
                        name="role"
                        value="delivery"
                        checked={formData.role === "delivery"}
                        onChange={onchangeHandler}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <Label htmlFor="delivery" className="cursor-pointer mb-0">Delivery</Label>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="flex-col gap-2 px-1">
            <Button
              type="submit"
              className="w-full cursor-pointer pt-5 py-5"
              
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
                to={"/signin"}
                className={"cursor-pointer font-bold text-sm"}
                variant="link"
              >
                Signin
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
