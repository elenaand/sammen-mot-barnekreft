import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Hei</h1>
        <Link href="/about">About</Link>
      </main>
    </div>
  );
}
