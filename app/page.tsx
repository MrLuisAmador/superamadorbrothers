import Image from "next/image";
import Link from "next/link";
import YouTubeVideos from "./components/youtube";
import PrintifyProducts from "./components/printify";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-4xl mx-auto">
          <Image 
            className="inline-block mb-8" 
            src="/sab-logo.png" 
            alt="Those Amador Bros" 
            width={208} 
            height={208} 
            priority 
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Those Amador Bros
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Meet the talented Amador brothers - Luis, the rising actor, and Evan, the gaming content creator.
          </p>
        </div>
      </section>

      {/* Brothers Showcase */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet the Brothers
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Luis Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                  LA
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Luis Amador</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">Child Actor & Performer</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                A rising star with exceptional talent in acting and performance, bringing characters to life on stage and screen.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Theater & Screen Acting
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Musical Performance
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  School Productions
                </div>
              </div>
              <Link 
                href="/luis" 
                className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
              >
                Learn More About Luis
              </Link>
            </div>

            {/* Evan Card */}
            <div className="bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-4xl font-bold text-white">
                  EA
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Evan Amador</h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-semibold">YouTube Gaming Influencer</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Creating engaging content through reaction videos and epic Minecraft adventures that keep viewers coming back for more.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Minecraft Gameplay
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Reaction Videos
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Creative Builds
                </div>
              </div>
              <Link 
                href="/evan" 
                className="block w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors"
              >
                Learn More About Evan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Components */}
      <YouTubeVideos channelId="UCUaRmNJ987yKZel2EBFA16A" />
      <PrintifyProducts />
    </>
  );
}
