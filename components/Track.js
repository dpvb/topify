import Image from "next/image";

export default function Track({ track, rank }) {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center flex-none">
        <span className="sm:text-4xl text-lg w-12 text-right pr-4">{rank}</span>
        <Image
          className="rounded-md sm:w-[100px] w-[50px]"
          src={track.imageURL}
          width={100}
          height={100}
          alt={track.album}
        />
      </div>

      <div className="pl-4">
        <h3 className="text-xl font-bold">{track.name}</h3>
        <h4 className="text-gray-300">{track.artists.join(", ")}</h4>
      </div>
    </div>
  );
}
