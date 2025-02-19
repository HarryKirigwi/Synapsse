"use client";
import { z } from "zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormField,
  FormMessage,
  FormLabel,
  FormControl,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import universityImage from "../assets/synapsse.jpeg";

const RegisterSchema = z.object({
  firstName: z.string().min(3).max(20),
  otherName: z.string().min(3).max(20),
  surName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8).max(20),
});

function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      otherName: "",
      surName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    form.reset();
    
  };

  type FieldName =
    | "firstName"
    | "otherName"
    | "surName"
    | "email"
    | "password"
    | "confirmPassword";

  const formFields: {
    label: string;
    name: FieldName;
    type: string;
    placeholder: string;
  }[] = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "First Name",
    },
    {
      label: "Other Name",
      name: "otherName",
      type: "text",
      placeholder: "Other Name",
    },
    { label: "Surname", name: "surName", type: "text", placeholder: "Surname" },
    { label: "Email", name: "email", type: "email", placeholder: "Email" },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Passord",
    },
  ];

  return (
    <>
      <div className="flex justify-between h-screen">
        <div className="hidden lg:block w-1/2">
          <img
            className="w-full min-h-screen"
            src={universityImage}
            alt="University Logo"
          />
        </div>

        <div className="relative z-10 max-w-sm w-full mx-auto p-4 min-h-screen pt-4 lg:pt-20">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {formFields.map((formField) => {
                return (
                  <FormField
                    key={formField.name}
                    control={form.control}
                    name={formField.name}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>{formField.label}</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type={formField.type}
                              placeholder={formField.placeholder}
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                );
              })}
              <Button type="submit" className="w-full mt-4 mb-4">
                Login
              </Button>
              <p className="text-center text-sm text-gray-500 cursor-pointer">
                <a href="/login">Do you have an account? Sign In</a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
