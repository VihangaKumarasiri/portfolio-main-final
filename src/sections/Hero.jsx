
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(()=> {
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1.3,
                stagger:0.3,
                ease:'power2.inOut',
            }
            )
        })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                {/*Left:Hero Content*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col">
                        <div className="hero-text">
                        <h1 className="text-white-50">
                            Shaping
                            <span className="slide absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                        ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1 className="md:text-6xl">that Deliver Results</h1>
                        </div>
                    </div>

                     <p className="text-white-50 md:text-xl relative z-10
                     pointer-events-none pt-5">
                        Hi, I'm Vihanga, a developer based in Srilanka with a passion
                        for code.
                    </p>
                    <Button
                        className="md:w-80 md:h-16 w-60 h-12 pt-5"
                        id="button"
                        text="See my Work"
                    />
                </header>
                {/*RIGHT: 3D MODEL*/}
                <figure>
                    <div className="hero-3d-layout">
                    <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter/>
        </section>
    )
}
export default Hero
