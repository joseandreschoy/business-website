import "./globals.css";
import Header from "../components/header"; // Ensure correct path to Header
import Footer from "../components/footer"; // Import the Footer component

export const metadata = {
  title: "Hydrogen Production Info",
  description:
    "A website dedicated to information on hydrogen production methods and benefits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
