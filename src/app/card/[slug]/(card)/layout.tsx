import CardNav from '~/containers/nav/CardNav';

export default function CardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="relative flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <CardNav />
        {children}
      </div>
    </main>
  );
}
