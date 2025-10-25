import Link from "next/link";

export const metadata = {
  title: "Luis Amador | Child Actor & Performer",
  description: "Discover the talent of Luis Amador, an up-and-coming child actor with exceptional performance skills in school productions and theater.",
};

export default function LuisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
              LA
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Luis Amador
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-semibold">
            Child Actor & Performer
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A rising star with exceptional talent in acting and performance, bringing characters to life on stage and screen.
          </p>
        </div>
      </section>

      {/* Skills & Talents */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Talents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Theater Acting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exceptional stage presence with experience in school productions and local theater.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Screen Acting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Natural ability to connect with audiences through camera work and film projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Musical Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Talented in musical theater with strong vocal and dance abilities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Character Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep understanding of character motivation and emotional range.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Public Speaking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Confident and articulate speaker with excellent stage presence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Versatility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adaptable performer comfortable in various genres and styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Performance Highlights
          </h2>

          <div className="text-center mb-12">
            <div className="text-gray-600 dark:text-gray-300">
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/BkmNtujRfwU"
                    title="Luis Amador Performance Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                School Productions
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Lead roles in multiple school plays
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Outstanding performance in musical theater
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Recognition for character development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Consistent dedication to rehearsals
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Achievements
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Student of the Month - Drama Department
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Best Performance Award - School Theater
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Outstanding Commitment to Arts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Peer Recognition for Leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Looking for a talented young actor for your next project? Let&apos;s discuss opportunities and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              href="/evan" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Evan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
