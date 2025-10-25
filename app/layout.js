import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import MouseGlowEffect from "./components/MouseGlowEffect";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "BASATI",
    description: "Badiul Alam Science and Technology Institute",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div className="min-h-screen bg-background">
                        <Header />
                        {children}
                        <Footer />
                        <MouseGlowEffect />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
