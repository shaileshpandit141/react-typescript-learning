// Define the shape of the video metadata
interface VideoInfo {
  title: string;
  author_name: string;
  thumbnail_url: string;
}

// Function to extract the video ID from a YouTube URL
function getVideoId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Function to fetch video metadata using oEmbed endpoint
export default async function getVideoInfo(url: string): Promise<VideoInfo> {
  const videoId = getVideoId(url);
  if (!videoId) throw new Error("Invalid YouTube URL");

  const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Failed to fetch video info");

  const data = await response.json();
  return {
    title: data.title,
    author_name: data.author_name,
    thumbnail_url: data.thumbnail_url
  };
}
