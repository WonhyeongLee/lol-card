export default function CustomLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full items-center justify-center">
      <section className="container mx-auto px-5 py-24">{children}</section>
    </main>
  );
}
