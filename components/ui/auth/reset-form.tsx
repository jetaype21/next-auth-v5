"use client";

import React, { useState, useTransition } from "react";

import * as z from "zod";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { LoginSchema, ResetSchema } from "@/schemas";
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

export const ResetForm: React.FC<{}> = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isDisabled, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(data).then((data) => {
        setError(data?.error ?? "");
        setSuccess(data?.success ?? "");
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      type="email"
                      placeholder="jhon.doe@example.com"
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
            Send reset email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
