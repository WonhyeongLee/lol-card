export default function CustomLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="m-auto flex h-screen w-full min-w-fit flex-row items-center justify-center bg-no-repeat px-[220px]">
      {children}
    </main>
  );
}
