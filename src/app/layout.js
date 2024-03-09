
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Baby Formula APP",
  description: "Locate my baby formula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <main>

     {children}

      </main>
    

      </body>
    </html>
  );
}
