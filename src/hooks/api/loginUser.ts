export interface UserInfo {
    id: string;
    name: string | null;
}

export async function loginUser({ id, name }: UserInfo) {
  const response = await fetch(`http://192.168.0.73:8080/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("error: ", errorData)
    throw new Error("사용자 로그인에 실패했습니다.");
  }

  return response.json();
}