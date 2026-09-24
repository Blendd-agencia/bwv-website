export const metadata = {
  title: "BWV Business & Tax Advisors",
  description: "BWV website development preview"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
