"use client"
import Exporter from "@/components/Exporter";
import Template from "@/components/Template";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen flex-col items-center justify-center bg-slate-200">
      <Exporter>
        <Template />
      </Exporter>
    </main>
  );
}
