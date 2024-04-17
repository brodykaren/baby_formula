
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata = {
  title: "Baby Formula APP",
  description: "Locate my baby formula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">


          <Header />
          <main>

            {children}

          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
