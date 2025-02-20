import React, { useState } from "react";
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstname: z.string().min(3, {
    message: "Enter your first name",
  }),
  lastname: z.string().min(3, {
    message: "Enter your last name",
  }),
  password: z.string()
  .min(8, { message: "At least 6 characters" }), 
  
  email: z.string().min(2, {
    message: "Enter your email",
  }),
});

const Shadcn_form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true); 
    setTimeout(() => {
      console.log("Form submitted:", values);
      form.reset();
      setIsSubmitting(false);
    }, 2000); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">User Registration</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">First Name</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Last Name</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 rounded-lg shadow-md transition"
              disabled={isSubmitting} 
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </Button>
  
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Shadcn_form;
