import { cache } from 'react';
import Image from "next/image";

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    description: string;
    title: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface YouTubeVideosProps {
  channelId?: string;
}

// Optional: Cache the fetch request
const getYoutubeVideos = cache(async (channelId: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data = await response.json();
    return data.items as YouTubeVideo[];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    throw error;
  }
});

export default async function YouTubeVideos({ channelId = 'UCUaRmNJ987yKZel2EBFA16A' }: YouTubeVideosProps) {
  const videos = (await getYoutubeVideos(channelId)).slice(0, 4);

  return (
    <section className="py-12">
    <h1 className="py-12 text-center text-4xl">Go watch the latest uploaded videos</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div key={video.id.videoId} className="border rounded-lg overflow-hidden shadow-lg">
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <Image 
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full"
              width={400}
              height={225}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{video.snippet.title}</h3>
              <p className="py-3">{video.snippet.description}</p>
              <p className="text-gray-600">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
    </section>
  );
}