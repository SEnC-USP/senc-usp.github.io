import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-start bg-rose-200">
      <Navbar />
      <div className="flex w-full min-h-screen items-center justify-center">
        <h1>PROGRAMACAO</h1>
      </div>
    </div>
  );
}
