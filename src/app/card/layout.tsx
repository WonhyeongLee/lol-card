export default function CardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center">
      <nav></nav>
      <section className="mx-[220px] flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        {children}
      </section>
    </main>
  );
}
