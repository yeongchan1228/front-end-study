import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/posts">Post</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
