import Image from "next/image";

export default function Home() {
  return (
  <>
    <div className="text-center">
      <h1 className="text-center text-7xl py-12">Super Amador Brothers</h1>
      <h2 className="text-center text-5xl pb-12">Website Coming soon</h2>
      <Image className="inline-block text-center" src="/sab-logo.png" alt="Super Amador Brothers" width={208} height={208} priority />
    </div>
  </>
  );
}
