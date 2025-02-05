import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HEC HJRS | Journal Recognition System",
  description:
    "HEC Journal Recognition System is the collection of authentic research journals ranked in scheduled categories on the bases of different ranking parameters. Our website serves as the replacement for the closed official HEC HJRS, offering a comprehensive and searchable repository of HEC-recognized journals with detailed information including categories, JPI scores, and more.",
  keywords: [
    "HEC HJRS",
    "Journal Recognition System",
    "HEC Recognized Journals",
    "Higher Education Commission",
    "Journal Repository",
    "JPI",
    "Research Journals",
    "HEC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-blue-100`}
      >
        {/* Fixed Header */}
        <header className="bg-white shadow fixed top-0 left-0 right-0 z-50 h-16">
          <div className="container mx-auto px-4 h-full flex justify-between items-center">
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-800 hover:text-indigo-500"
              >
                Home
              </Link>
              <Link
                href="/disclaimer"
                className="text-lg font-semibold text-gray-800 hover:text-indigo-500"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-20 pb-20 flex-grow">
          {children}
        </main>

        {/* Fixed Footer */}
        <footer className="bg-gray-200 shadow fixed bottom-0 left-0 right-0 z-50 h-16">
          <div className="container mx-auto px-4 h-full flex justify-center items-center">
            <p className="text-gray-700">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/mudassar-rehman-0224441b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Mudassar Rehman
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
