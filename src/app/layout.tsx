import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import { PerformanceMonitor } from "@/components/optimization/performance-optimizer";

export const metadata: Metadata = {
  title: "Amitabh Bhandari - Data Science & Analytics Portfolio",
  description: "Portfolio of Amitabh Bhandari, a B.Tech Computer Science (Data Science & Analytics) student building end-to-end analytics and machine learning projects with Python, SQL, and interactive dashboards.",
  keywords: ["Amitabh Bhandari", "Data Science", "Data Analytics", "Machine Learning", "Python", "SQL", "Portfolio", "DIT University"],
  authors: [{ name: "Amitabh Bhandari" }],
  openGraph: {
    title: "Amitabh Bhandari - Data Science & Analytics Portfolio",
    description: "Data Science & Analytics student portfolio featuring end-to-end ML and analytics projects.",
    siteName: "Amitabh Bhandari Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amitabh Bhandari - Data Science & Analytics Portfolio",
    description: "Data Science & Analytics student portfolio featuring end-to-end ML and analytics projects.",
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
