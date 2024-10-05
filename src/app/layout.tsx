import Counter from "@/components/Counter"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h3>NextJS learning playground</h3>
        </header>
        {children}
        <footer className="site-footer">
          <p>All rights reserved</p>
          <nav>
            <ul>
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/about"}>About us</Link></li>
              <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  )
}