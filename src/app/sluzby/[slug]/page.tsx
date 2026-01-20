import { services } from "@/data/services";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";
import GasCabinetForm from "@/components/GasCabinetForm"; // Import the form

// Recursive function to get all images
function getImagesRecursively(dir: string, baseDir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return [];

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getImagesRecursively(filePath, baseDir));
        } else {
            // Check for image extensions
            if (/\.(jpg|jpeg|png|webp|gif|JPG|JPEG|PNG|WEBP)$/i.test(file)) {
                // Convert absolute path to public URL
                const relativePath = path.relative(baseDir, filePath);
                results.push(`/web/${relativePath}`);
            }
        }
    });
    return results;
}

function getServiceImages(slug: string): string[] {
    const publicWebDir = path.join(process.cwd(), "public", "web");
    let targetDirName = "";

    switch (slug) {
        case "zabradlia":
            targetDirName = "zábradlia";
            break;
        case "brany-a-oplotenia":
            targetDirName = "brány";
            break;
        case "schodiska":
            targetDirName = "schodiská";
            break;
        case "plynove-skrine":
            targetDirName = "plynové skrinky";
            break;
        default:
            return [];
    }

    const targetDir = path.join(publicWebDir, targetDirName);
    return getImagesRecursively(targetDir, publicWebDir);
}

// Generate static params for all services to be statically optimized
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const images = getServiceImages(service.slug);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 border-b pb-4 text-black">{service.title}</h2>

            <p className="text-xl text-black mb-8 leading-relaxed">
                {service.description}
            </p>

            {/* Features List */}
            <div className="bg-gray-50 p-8 mb-10 border-l-4 border-black">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-black">Čo ponúkame</h3>
                <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-black">
                            <svg className="w-5 h-5 mt-0.5 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Materials */}
                {service.materials && (
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-black">Materiály</h3>
                        <ul className="list-disc list-inside space-y-2 text-black marker:text-black">
                            {service.materials.map((material, index) => (
                                <li key={index} className="text-black">{material}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Finishes */}
                {service.finish && (
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-black">Povrchová úprava</h3>
                        <ul className="list-disc list-inside space-y-2 text-black marker:text-black">
                            {service.finish.map((item, index) => (
                                <li key={index} className="text-black">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Pricing if applicable */}
            {(service.price || service.priceWithVat) && (
                <div className="mt-10 p-6 bg-black text-white inline-block">
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Cena</h3>
                    {service.price && <p className="text-2xl font-bold">{service.price}</p>}
                    {service.priceWithVat && <p className="text-sm opacity-70">s DPH: {service.priceWithVat}</p>}
                </div>
            )}

            {/* Order button for gas cabinets */}
            {service.slug === "plynove-skrine" && (
                <div className="mt-10">
                    <a
                        href="#objednavka"
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    >
                        Mám záujem
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            )}

            {/* Gallery */}
            <ServiceGallery images={images} />

            {/* Conditional Form for Gas Cabinets */}
            {service.slug === "plynove-skrine" && (
                <div id="objednavka" className="mt-16 scroll-mt-24">
                    <GasCabinetForm />
                </div>
            )}
        </div>
    );
}
