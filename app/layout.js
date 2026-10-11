export const metadata = {
  title: "BWV Business & Tax Advisors",
  description: "BWV website",
  icons: { icon: "https://drive.google.com/thumbnail?id=1kXFoi7lVomHOfxoIuY5c1U2kXuZSSFA5&sz=w128" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
