"use client";
import React from "react";

const ErrorUserPage = ({ error }: { error: Error }) => {
  console.log("=->", error.message);

  return <div>ErrorUserPage</div>;
};

export default ErrorUserPage;
