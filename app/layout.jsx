import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";

// import { Metadata } from "next";

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
    image: "/assets/images/logo.svg",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <main className="app">
                        <Navbar />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}
