export const metadata = {
  title: "BWV Business & Tax Advisors",
  description: "BWV website",
  icons: { icon: "https://d2ol7oe51mr4n9.cloudfront.net/user_3EtJb11RwjFQR3KZgzMKLKWXBLs/bda6b8d0-82df-4c7e-8eed-b092fe06c664.png" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
