"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";

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
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { LoginSchema } from "@/schema";
import { Separator } from "@/components/ui/separator";

export default function SignInForm({
  className,
}: React.ComponentProps<"form">) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    // setError("");
    // setSuccess("");
    // startTransition(() => {
    //   login(values).then((data) => {
    //       setError(data.error);
    //       setSuccess(data.success)
    //   });
    // });
    console.log(values);
  };
  return (
    <div className="mx-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/** Form Email-- Start */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl />
                  <Input
                    {...field}
                    placeholder="name@clickride.com"
                    type="email"
                    disabled={isPending}
                  />
                  <FormControl />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Form Email-- End */}
            {/** Form Password-- Start */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl />
                  <Input
                    {...field}
                    placeholder="******"
                    type="Password"
                    disabled={isPending}
                  />
                  <FormControl />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Form Password-- End */}
          </div>
          {/** Need to add Toast Here */}

          <Button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-400"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
      <div className="mx-6">
        <Separator className="my-4" />
      </div>
      <div className="my-4">
        <Button className="w-full" variant="outline">
          <FcGoogle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}
