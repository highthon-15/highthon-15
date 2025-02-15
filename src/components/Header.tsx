import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="top-0 z-50 w-full items-center backdrop-blur flex flex-row justify-center">
      <div className="flex-1 flex items-center justify-start p-4 my-7"></div>
      <div className="flex items-center justify-center p-4 my-7">
        <Link href="/">
          <span className="font-extrabold text-6xl">프로젝트 이름</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-end p-4 my-7">
        <Link href="/login">
          <Button>로그인</Button>
        </Link>
      </div>
    </header>
  );
}
