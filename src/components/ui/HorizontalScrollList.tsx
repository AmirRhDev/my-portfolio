// @ts-nocheck
'use client';
import Image from 'next/image';
import { JSX, useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';
import { Cobe } from './Cobe';
import ContactMeList from './ContactMeList';
import InfinitMovingCards from './InfinitMovingCards';
import { CardStack } from './CardStack';

interface slidesType {
    content: JSX.Element
}

const DEFAULT_SLIDES: slidesType[] = [
    {
        content: <li className='animatedListItem h-screen w-screen flex flex-col overflow-hidden items-center gap-8'>
            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold'>
                Who Am I
            </h2>
            <div className='w-3/4'>
                <p className='text-2xl text-slate-200 leading-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem architecto iste commodi praesentium dolorem aliquid cumque eveniet optio illo voluptatibus quam, quia est maxime culpa minus autem? Ad, facilis!
                    Soluta magni magnam tenetur iste dignissimos
                </p>

                <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                    <InfinitMovingCards />
                </div>
            </div>
        </li>
    },
    {
        content: <li className='animatedListItem h-screen w-screen flex flex-col overflow-hidden items-center gap-8'>
            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold'>
                About Me
            </h2>
            <div className='w-3/4 max-h-96 flex gap-5 items-center'>
                <div className='w-1/2 h-full flex flex-col gap-5'>
                    <div className="w-full shrink border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                        <div className='flex items-center gap-2 text-slate-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <h2>Contact</h2>
                        </div>
                        <div className='pl-3'>
                            <ContactMeList />
                        </div>
                    </div>
                    <div className='h-1/2 w-full flex gap-5'>
                        <div className="h-full w-1/2 border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-slate-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                <h2>Contact me</h2>
                            </div>
                            <div className='pl-3'>
                                2222
                            </div>
                        </div>
                        <div className="h-full w-1/2 border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-slate-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                                </svg>
                                <h2>Lines of code</h2>
                            </div>
                            <div className='font-bold text-5xl text-center mt-3'>
                                64258
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full  border border-slate-900 rounded-md flex flex-col gap-4 p-4 overflow-hidden">
                    <div className='flex items-center gap-2 text-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h2>Location</h2>
                    </div>
                    <Cobe />
                </div>
            </div>
        </li>
    },
    {
        content: <li className='animatedListItem h-screen w-screen flex flex-col overflow-hidden items-center gap-12'>
            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold'>
                Nemidonam
            </h2>
            <div className='w-3/4 flex items-center gap-10'>
                <div className='flex flex-col gap-5 w-3/5'>
                    <h2 className='text-4xl text-white font-semibold'>may coperations, many experiences</h2>
                    <p className='text-slate-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aliquam quam. Veniam unde earum dignissimos dolore error, eveniet, placeat doloribus incidunt explicabo itaque harum inventore accusantium corporis minima. Optio, exercitationem!</p>
                </div>
                <CardStack />
            </div>
        </li>
    }
]

interface Props {
    slides?: slidesType[]
}

export default function HorizontalScroll({ slides = DEFAULT_SLIDES }: Props): JSX.Element {
    const ulRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const items = ulRef.current?.querySelectorAll('.animatedListItem') || [];

        if (ulRef.current) {
            ulRef.current.style.width = `${items.length * 100}vw`;

            const controls = animate(
                ulRef.current,
                {
                    transform: ['none', `translateX(-${items.length - 1}00vw)`],
                    //   transform: ['none', `translateX(-${(items.length - 1) * 100}vw)`],
                },
                { easing: spring() }
            );
            scroll(controls, { target: document.querySelector('section') });
        }

        const segmentLength = 1 / items.length;
        items.forEach((item, i) => {
            const header = item.querySelector('.animatedHeader');

            scroll(animate([header], { x: [400, -400] }), {
                target: document.querySelector('section'),
                offset: [
                    [i * segmentLength, 1],
                    [(i + 1) * segmentLength, 0],
                ],
            });
        });
    }, []);

    return (
        <>
            <article>
                {/* TODO: change header */}
                <header className='text-white relative  w-full bg-slate-950  grid place-content-center h-[80vh]'> 
                    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

                    <h1 className='text-6xl font-bold text-center tracking-tight'>
                        I know You Love to Scroll <br />
                        So Scroll
                    </h1>
                </header>

                <section className='h-[500vh] relative'>
                    <ul ref={ulRef} className='flex sticky top-0'>
                        {slides.map((item: slidesType) => item.content)}
                    </ul>
                </section>
            </article>
        </>
    );
}