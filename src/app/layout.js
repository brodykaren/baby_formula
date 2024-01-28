
import "./globals.css";


export const metadata = {
  title: "Baby Formula APP",
  description: "Locate my baby formula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
