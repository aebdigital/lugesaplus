export default function PageHero({
    title,
    imageSrc = "/web/brány/kovové/000006.jpg", // Default fallback
}: {
    title: string;
    imageSrc?: string;
}) {
    return (
        <div className="relative w-full h-[30vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${imageSrc}')`,
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
