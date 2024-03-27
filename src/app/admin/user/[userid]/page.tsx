// "use client";
import axios from "axios";
type Props = {
  params: {
    userid: string;
  };
};

async function fetchCurrentUsers(id: any) {
  // const response = await fetch(
  //   `http://127.0.0.1:8000/api/user/${id}`
  //   //  {
  //   //   next: {
  //   //     revalidate: 60,
  //   //   },
  //   // }
  // );

  const response = await axios({
    method: "get",
    url: `http://127.0.0.1:8000/api/user/${id}`,
  });

  console.log(response);

  return response.data[0];
}

export async function generateMetadata({
  params: { userid },
}: Props): Promise<Metadata> {
  let userData = await fetchCurrentUsers(userid);
  return {
    title: `user ${userData.name}`,
  };
}

import { Metadata } from "next";
import React, { useState } from "react";

const IDUserPage = async ({ params: { userid } }: Props) => {
  let userData = await fetchCurrentUsers(userid);

  // console.log("->", userData.name);

  return (
    <div>
      <h2>Пользователь: {userData.name}</h2>
      <h3>Email {userData.email}</h3>
    </div>
  );
};

export default IDUserPage;
