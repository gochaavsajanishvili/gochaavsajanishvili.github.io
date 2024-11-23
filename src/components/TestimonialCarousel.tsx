"use client";

import React, {useEffect, useRef} from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
};

const Testimonial1 ="\"Gocha was very eager and willing to do this project correctly. He took the time to ask questions and understand the task at hand. Great communicator. Would definitely work with him again.\"";
const Testimonial2 = "\"Excellent engineer, very creative, proposes great solutions and makes everything better. Hope to hire again!\"";
const Testimonial3 = "\"Skilled develop. Will certainly work with him again.\"";
const Testimonial4 = "\"Gocha is amazing! very happy with his work\"";

const TestimonialCarousel: React.FC<PropType> = ({ slides, options }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    const emblaRootRef = useRef<HTMLElement | null>(null); // Ref for the root element

    useEffect(() => {
        const handleResize = () => {
            if (!emblaRootRef.current) return;

            const isSmallScreen = window.innerWidth < 768;

            if (isSmallScreen) {
                emblaRootRef.current.classList.add("embla--disabled");
            } else {
                emblaRootRef.current.classList.remove("embla--disabled");
            }
        };

        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <h2 className="text-xl font-bold my-4">Testimonials</h2>
            <section className="embla" ref={emblaRootRef}>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((text, index) => (
                            <div className="embla__slide rounded-lg border bg-card text-card-foreground shadow-sm"
                                 key={index}>
                                <div className="embla__slide__number text-sm text-muted-foreground">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

// Default options and slides for easy reuse
export const DEFAULT_OPTIONS: EmblaOptionsType = { axis: 'y', loop: true };
export const DEFAULT_SLIDES = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

// Export the component for use in Sidebar or other files
export default TestimonialCarousel;
