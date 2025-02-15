"use client";

export default function Page() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-semibold">로그인</h1>

      <button
        onClick={handleKakaoLogin}
        className="flex items-center justify-center bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg w-60"
      >
        카카오로 로그인하기
      </button>
    </div>
  );
}
