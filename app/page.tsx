import Image from "next/image";
import YouTubeVideos from "./components/youtube";
import PrintifyProducts from "./components/printify";

export default function Home() {

  return (
  <>
    <div className="text-center">
      <h1 className="text-center text-7xl py-12">Those Amador Bros</h1>
      <h2 className="text-center text-5xl pb-12">Website Launching Soon!!</h2>
      <Image className="inline-block text-center" src="/sab-logo.png" alt="Those Amador Bros" width={208} height={208} priority />
    </div>

    <YouTubeVideos />

    <PrintifyProducts />
  </>
  );
}
