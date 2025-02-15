"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function KakaoCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const authCode = searchParams.get("code");

    if (authCode) {
      fetch("http://localhost:8080/api/auth/kakao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: authCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            console.log("로그인 성공!", data);
            localStorage.setItem("token", data.token);
            router.push("/");
          } else {
            console.error("로그인 실패", data);
          }
        });
    }
  }, [searchParams, router]);

  return <div>카카오 로그인 처리 중...</div>;
}
