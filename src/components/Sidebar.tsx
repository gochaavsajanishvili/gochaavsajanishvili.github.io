import { Profile } from "./Profile";
import TestimonialCarousel, { DEFAULT_OPTIONS, DEFAULT_SLIDES } from "@/components/TestimonialCarousel";
import {Skills} from "@/components/Skills";


export const Sidebar = () => {
    return (
        <aside className="md:col-span-1">
            {/* Profile Section */}
            < Profile/>
            <div className="md:hidden">
                <Skills/>
            </div>
            < TestimonialCarousel slides={DEFAULT_SLIDES} options={DEFAULT_OPTIONS}/>
        </aside>
    )
}
