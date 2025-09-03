import Navbar from "@/layout/navbar/Navbar";
import Sidebar from "@/layout/SideBar";
import MainContent from "@/layout/home/MainContent";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-1 min-h-0 0">
        <aside className="w-80 md:w-96 shrink-0  ">
          <Sidebar />
        </aside>
        <main className="flex-1 min-w-0 ">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
