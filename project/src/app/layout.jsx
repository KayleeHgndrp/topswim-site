import "./globals.css";

export const metadata = {
  title: "Topswim — Open Water Coaching Amsterdam",
  description:
    "Open water coaching in Amsterdam — trainingen, locaties en aanmelden.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
