export default function CardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center">
      <nav></nav>
      <div className="flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        {children}
      </div>
    </main>
  );
}
