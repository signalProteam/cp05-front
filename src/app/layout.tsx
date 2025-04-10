import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <title>Livro de Receitas</title>
            <body className="font-sans text-lg m-0 p-0 min-h-screen flex flex-col">
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
