import Link from "next/link";
import YouTubeVideos from "../components/youtube";

export const metadata = {
  title: "Evan Amador | YouTube Gaming Influencer",
  description: "Meet Evan Amador, a talented YouTube content creator specializing in reaction videos and Minecraft gameplay with an engaging personality.",
};

export default function EvanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
              EA
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Evan Amador
          </h1>
          <p className="text-2xl md:text-3xl text-red-600 dark:text-red-400 mb-8 font-semibold">
            YouTube Gaming Influencer
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Creating engaging content through reaction videos and epic Minecraft adventures that keep viewers coming back for more.
          </p>
        </div>
      </section>

      {/* Content Specialties */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Content Specialties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Minecraft Gameplay</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Epic builds, survival challenges, and creative adventures in the world of Minecraft.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">😱</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reaction Videos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Genuine, entertaining reactions to trending videos, memes, and viral content.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Creative Builds</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Showcasing impressive Minecraft constructions and architectural masterpieces.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Gaming Challenges</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exciting gaming challenges and competitions that keep viewers on the edge of their seats.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community Engagement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a strong community through interactive content and viewer participation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Social Media</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Active presence across multiple platforms with consistent, engaging content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Stats & Achievements */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Channel Highlights
          </h2>

          <div className="text-center mb-12">
            <div className="text-gray-600 dark:text-gray-300">
              <YouTubeVideos channelId="UCzZbB27vufl-VKEBjKqGtzg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Popular Content
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Minecraft Survival Series
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Viral Video Reactions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Creative Building Tutorials
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Gaming Challenge Videos
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Community Impact
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Growing subscriber base
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  High engagement rates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Positive community feedback
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Consistent upload schedule
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Setup */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Gaming & Content Creation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Gaming Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized in Minecraft with deep knowledge of game mechanics, building techniques, and community trends.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📹</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-quality video production with clear audio, engaging visuals, and professional editing techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Authentic, energetic, and entertaining personality that resonates with gaming audiences of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Adventure!
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Subscribe to Evan&apos;s channel for the latest Minecraft builds, reaction videos, and gaming content that will keep you entertained!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@makermate2025" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Subscribe on YouTube
            </a>
            <Link 
              href="/luis" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Meet Luis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
