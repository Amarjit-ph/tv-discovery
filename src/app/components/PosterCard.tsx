import Image from "next/image";

type Props = {
    title: string;
    posterPath: string | null;
};

export default function PosterCard({ title, posterPath }: Props) {
    const imgUrl = posterPath
        ? `${process.env.TMDB_IMAGE_BASE}/w300${posterPath}`
        : "/placeholder.png";

    return (
        <div className="w-[150px] flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
            <Image
                src={imgUrl}
                alt={title}
                width={150}
                height={225}
                className="rounded-md object-cover"
            />
            <p className="mt-1 text-sm text-gray-300 line-clamp-1">{title}</p>
        </div>
    );
}
