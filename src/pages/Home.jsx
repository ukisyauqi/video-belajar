import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar />
      <div className="flex-1">
        Home
      </div>
    </div>
  );
}
