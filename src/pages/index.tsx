import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen items-start">
      <Navbar />
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <h1>HOME</h1>
      </div>
    </main>
  );
}
