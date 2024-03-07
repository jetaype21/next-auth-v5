"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("No token provided");
      return;
    }

    newVerification(token)
      .then((res) => {
        setSuccess(res.success);
        setError(res.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirm you verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <section className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        {!success && <FormError message={error} />}
        <FormSuccess message={success} />
      </section>
    </CardWrapper>
  );
};
