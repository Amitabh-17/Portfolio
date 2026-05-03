import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import { PerformanceMonitor } from "@/components/optimization/performance-optimizer";

export const metadata: Metadata = {
  title: "Data Science Portfolio | B.Tech CSE Student",
  description: "Personal portfolio of a 3rd-year B.Tech CSE (Data Science) student showcasing projects, skills, and learning journey.",
  keywords: ["data science portfolio", "B.Tech CSE", "student developer", "Next.js", "TypeScript", "machine learning", "web development"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Data Science Student Portfolio",
    description: "Projects, skills, and achievements in data science and software development",
    url: "/",
    siteName: "Data Science Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futuristic Portfolio",
    description: "Projects, skills, and achievements in data science and software development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="cursor-custom">
      <body
        className="antialiased bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
          <Toaster />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
