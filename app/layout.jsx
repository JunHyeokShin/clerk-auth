import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ko" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (localStorage.theme === "dark") {
                document.documentElement.classList.add("dark")
              } else {
                document.documentElement.classList.remove("dark")
              }
            `,
            }}
          ></script>
        </head>
        <body className="dark:bg-slate-900">
          <Header />
          <main className="container">
            <div className="flex items-start justify-center min-h-screen">
              <div className="mt-20">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
