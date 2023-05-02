"use client";

import React, { useEffect } from "react";
import EmptyState from "./components/EmptyState";

type Props = {
  error: Error;
};

const ErrorState = ({ error }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Something broke"
      subtitle="Please refresh and try again."
    />
  );
};

export default ErrorState;
