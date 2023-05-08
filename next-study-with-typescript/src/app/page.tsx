import Link from "next/link";
import AuthButton from "@/components/domain/auth/auth-button";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 className="title">간단한 프로젝트 목록입니다.</h4>
      <Link href="/shop" className="link">
        Go Shop!
      </Link>
      <Link href="/posts" className="link">
        Go Post!
      </Link>
      <AuthButton></AuthButton>
    </div>
  );
}
