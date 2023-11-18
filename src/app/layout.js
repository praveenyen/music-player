import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
