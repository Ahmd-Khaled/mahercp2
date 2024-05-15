import "./globals.scss"
import { Inter, Cairo, Poppins } from "next/font/google"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: 'swap',
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MBN",
  description: "Mahercp website",
}

export default function RootLayout({ children, params }) {
  console.log("--------------------------params.locale", params.locale);

  return (
    <html lang={params.locale} dir={params.locale === 'en' ? 'ltr' : 'rtl' }>
      <body className={`${cairo.className}`}>{children}</body>
    </html>
  );
}
