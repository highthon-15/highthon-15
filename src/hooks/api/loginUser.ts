import { apiUrl } from "@/components/constants/config";

export interface UserInfo {
    id: string;
    name: string | null;
}

export async function loginUser({ id, name }: UserInfo) {
  const response = await fetch(`${apiUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Number(id),
      name,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("error: ", errorData);
    throw new Error("사용자 로그인에 실패했습니다.");
  }

  return response.json();
}
