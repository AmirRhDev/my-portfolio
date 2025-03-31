import Picture1 from '../../../public/images/1.jpeg';
import Picture2 from '../../../public/images/2.jpeg';
import Picture3 from '../../../public/images/3.jpg';
import Picture4 from '../../../public/images/4.jpg'
import Picture5 from '../../../public/images/5.jpg'
import Picture6 from '../../../public/images/6.jpg'
import Picture7 from '../../../public/images/7.jpeg'
import Image, { StaticImageData } from 'next/image';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { ReactElement, useRef } from 'react';
import classNames from 'classnames';

interface ItemsType {
    src?: StaticImageData,
    scale: MotionValue<number>,
    className: string,
    content?: ReactElement
}

export default function ZoomImageParallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures: ItemsType[] = [
        {
            // src: Picture1,
            scale: scale4,
            className: "w-[25vw] h-[25vh]",
            content: <div className='border h-full'>slm dada :D</div>
        },
        {
            src: Picture2,
            scale: scale5,
            className: "w-[35vw] h-[30vh] left-[5vw] -top-[30vh]"
        },
        {
            src: Picture3,
            scale: scale6,
            className: "w-[20vw] h-[45vh] -left-[25vw] -top-[10vh]"
        },
        {
            src: Picture4,
            scale: scale5,
            className: "w-[25vw] h-[25vh] left-[27.5vw]"
        },
        {
            src: Picture5,
            scale: scale6,
            className: "w-[20vw] h-[25vh] left-[5vw] top-[27.5vh]"
        },
        {
            src: Picture6,
            scale: scale8,
            className: "w-[30vw] h-[25vh] -left-[22.5vw] top-[27.5vh]"
        },
        {
            src: Picture7,
            scale: scale9,
            className: "w-[15vw] h-[15vh] left-[25vw] top-[22.5vh]"
        }
    ]

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen overflow-hidden">
                {
                    pictures.map(({ src, scale, className, content }, index) => {
                        return <motion.div key={index} style={{ scale }} className="absolute w-full h-full top-0 flex items-center justify-center">
                            <div className={classNames('relative', className)}>
                                {src ? <Image
                                    src={src}
                                    fill
                                    // className={classNames('object-cover', {'scale-[.5]': isMain})}
                                    className='object-cover'
                                    alt="image"
                                    placeholder='blur'
                                />
                                    :
                                    content
                                }
                                {/* <div className='border'>{className}</div> */}
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
