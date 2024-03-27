import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["cyrillic"] });
export default function Home() {
  return (
    <main className={`mainpage__wrapper ${inter.className}`}>
      <h1>Main page</h1>
    </main>
  );
}
