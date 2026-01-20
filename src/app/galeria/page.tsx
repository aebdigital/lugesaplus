import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { galleryItems, categories } from "@/data/gallery";

export default function GalleryPage() {
    return (
        <main>
            <PageHero title="Galéria našich prác" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">
                <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-black">
                    Pozrite si ukážky našich realizácií. Inšpirujte sa kvalitou a precíznosťou našej výroby.
                </p>

                <GalleryGrid initialImages={galleryItems} categories={categories} />
            </div>
        </main>
    );
}
