import Track from "@/components/Track";
import { currentUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";

export default async function RecentlyPlayed({ params }) {
  const { term } = params;
  const topTracks = await getTopTracks(term);

  return (
    <div className="mt-8 flex flex-col gap-4 lg:w-7/12 w-full">
      {topTracks.map((track, index) => {
        return <Track key={index} track={track} rank={index + 1} />;
      })}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { term: "short_term" },
    { term: "medium_term" },
    { term: "long_term" },
  ];
}

const getAccessToken = async () => {
  const user = await currentUser();
  const token = await clerkClient.users.getUserOauthAccessToken(
    user.id,
    "oauth_spotify"
  );
  return token[0].token;
};

const getTopTracks = async (term) => {
  const token = await getAccessToken();
  const limit = 10;
  const url = `https://api.spotify.com/v1/me/top/tracks?time_range=${term}&limit=${limit}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const formatted = formatTracks(data.items);
  return formatted;
};

const formatTracks = (tracks) => {
  const formatted = tracks.map((track) => {
    const artists = track.artists.map((artist) => {
      return artist.name;
    });
    return {
      name: track.name,
      artists,
      album: track.album.name,
      imageURL: track.album.images.at(1).url,
    };
  });

  return formatted;
};
