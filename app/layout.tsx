import "styles/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>PM</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        />
        <script
          defer
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
