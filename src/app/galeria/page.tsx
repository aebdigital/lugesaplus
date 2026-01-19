import GalleryGrid from "@/components/GalleryGrid";

import PageHero from "@/components/PageHero";

export default function GalleryPage() {
    return (
        <main>
            <PageHero title="Galéria našich prác" imageSrc="/web/zábradlia/nerezové/DSCN3473.JPG" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">
                <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
                    Pozrite si ukážky našich realizácií. Inšpirujte sa kvalitou a precíznosťou našej výroby.
                </p>

                <GalleryGrid />
            </div>
        </main>
    );
}
