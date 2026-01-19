import { redirect } from "next/navigation";
import { services } from "@/data/services";

export default function ServicesIndex() {
    if (services.length > 0) {
        redirect(`/sluzby/${services[0].slug}`);
    }
    return null;
}
