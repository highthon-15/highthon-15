'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useLoginUserMutation } from "@/hooks/useLoginUserMutation";
import MainLayout from "./(main)/layout";
import MainPage from "./(main)/page";

export default function Page() {
  const { data: session } = useSession();
  
  const { mutate } = useLoginUserMutation({
    onSuccess: (data) => {
      console.log("로그인 성공:", data);
    },
    onError: (error) => {
      console.error("로그인 실패:", error);
    }
  });

  useEffect(() => {
    if (session?.user) {
      const userId = session.user.id;
      const userName = session.user.name;

      mutate({ id: userId, name: userName });
    }
  }, [session, mutate]);

  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}
