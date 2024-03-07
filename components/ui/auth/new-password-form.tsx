"use client";

import React, { useState, useTransition } from "react";

import * as z from "zod";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { NewPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Button } from "../button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { reset } from "@/actions/reset";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

export const NewPasswordForm: React.FC<{}> = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isDisabled, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(data, token).then((data) => {
        setError(data?.error ?? "");
        setSuccess(data?.success ?? "");
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Reset your password!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      type="password"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button className="w-full" type="submit" disabled={isDisabled}>
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
