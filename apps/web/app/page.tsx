import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold font-ibm-plex-mono">Exness Trading Platform</h1>
      </main>
    </div>
  );
}
