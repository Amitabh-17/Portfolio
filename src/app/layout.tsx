import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import { PerformanceMonitor } from "@/components/optimization/performance-optimizer";

export const metadata: Metadata = {
  title: "Futuristic Portfolio - Creative Professional",
  description: "A visually immersive portfolio website template for creative professionals with advanced 3D elements and smooth UI animations.",
  keywords: ["portfolio", "3D", "futuristic", "creative", "developer", "designer", "template", "Next.js", "Three.js"],
  authors: [{ name: "Creative Professional" }],
  openGraph: {
    title: "Futuristic Portfolio Template",
    description: "Visually immersive portfolio with 3D elements and animations",
    url: "https://portfolio.example.com",
    siteName: "Creative Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futuristic Portfolio",
    description: "Visually immersive portfolio with 3D elements and animations",
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
