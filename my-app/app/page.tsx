import AudioPlayer from "@/components/musicPlayer";

export default function Home() {
   return (
      <>
         <main className="text-3xl font-bold text-blue-500 p-6">Hello, Tailwind 🎵</main>
         <div className="flex justify-center items-center h-screen bg-gray-100">
            <AudioPlayer songId={1} />
         </div>
      </>
   );
}
