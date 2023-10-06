import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";

// import { Metadata } from "next";

export const metadata = {
    title: "Prompts.ai",
    description: "Discover & Share AI Prompts",
    icon: "/assets/images/logo.svg",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="./assets/images/logo.svg"
                    type="image/svg+xml"
                    sizes="16x16"
                />
            </head>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <main className="app">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    );
}
