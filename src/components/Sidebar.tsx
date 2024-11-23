import { Profile } from "./Profile";
import TestimonialCarousel, { DEFAULT_OPTIONS, DEFAULT_SLIDES } from "@/components/TestimonialCarousel";
import {Skills} from "@/components/Skills";


export const Sidebar = () => {
    return (
        <aside className="md:col-span-1">
            {/* Profile Section */}
            < Profile />
            < Skills className="md:hidden" />
            < TestimonialCarousel slides={DEFAULT_SLIDES} options={DEFAULT_OPTIONS} />
        </aside>
    )
}