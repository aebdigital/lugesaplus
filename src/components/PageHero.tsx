import { galleryItems } from "@/data/gallery";

export default function PageHero({
    title,
    imageSrc,
}: {
    title: string;
    imageSrc?: string;
}) {
    const heroImageSrc = imageSrc || galleryItems[0]?.src || "/web/brány/kovové/000006.jpg";

    return (
        <div className="relative w-full h-[30vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${heroImageSrc}')`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
                    {title}
                </h1>
            </div>
        </div>
    );
}
