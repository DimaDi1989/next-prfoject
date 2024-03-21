import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["cyrillic"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Main page</h1>
    </main>
  );
}
