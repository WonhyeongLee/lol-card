export default function CustomLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex h-full items-center justify-center">
      <section className="container relative mx-auto px-40 py-24">
        <div className="absolute left-8 top-1/2 flex flex-col justify-between">
          <span>챔피언</span>
          <span>라인</span>
          <span>성향</span>
        </div>
        {children}
      </section>
    </main>
  );
}
