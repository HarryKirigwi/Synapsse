"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import universityImage from "../assets/synapsse.jpeg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const LoginSchema = z.object({
  email: z.string().min(3).email(),
  password: z.string().min(8).max(20),
});

// Define field types explicitly
type FieldName = "email" | "password";

const formFields: {
  label: string;
  name: FieldName;
  type: string;
  placeholder: string;
}[] = [
  {
    label: "Username",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    form.reset();
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block w-1/2">
        <img
          className="w-full min-h-screen"
          src={universityImage}
          alt="University Logo"
        />
      </div>

      <div className="relative z-10 max-w-sm w-full mx-auto p-4 min-h-screen pt-20 lg:pt-40">
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-2xl"
          >
            {formFields.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm text-gray-500 cursor-pointer">
              <a href="/register">Don't have an account? Sign up</a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
