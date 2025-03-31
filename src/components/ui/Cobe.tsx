import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";

export const Cobe = () => {
    const canvasRef = useRef<any>(undefined);
    const pointerInteracting = useRef<any>(null);
    const pointerInteractionMovement = useRef<number>(0);

    const [{ r }, api] = useSpring(() => ({
        r: 10,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    useEffect(() => {
        api.start({ r: 10, immediate: true }); // Set initial phi to 10 without animation
        pointerInteractionMovement.current = 10 * 200; // Sync with interaction scaling

        let width = 350;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 10,
            theta: 0.3,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [0 / 255, 184 / 255, 219 / 255],
            glowColor: [1.2, 1.2, 1.2],
            markers: [{ location: [34.7219, 52.3347], size: 0.05 }],
            onRender: (state) => {
                state.phi = r.get()
                state.width = width * 2
                state.height = width * 2
            }
        })
        
        setTimeout(() => canvasRef.current.style.opacity = '1')
        
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])
    return <div className="w-full max-w-xl aspect-square m-auto relative -top-5">
        <canvas
            ref={canvasRef}
            onPointerDown={(e) => {
                pointerInteracting.current =
                    e.clientX - pointerInteractionMovement.current;
                canvasRef.current.style.cursor = 'grabbing';
            }}
            onPointerUp={() => {
                pointerInteracting.current = null;
                canvasRef.current.style.cursor = 'grab';
            }}
            onPointerOut={() => {
                pointerInteracting.current = null;
                canvasRef.current.style.cursor = 'grab';
            }}
            onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                    const delta = e.clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta;
                    api.start({
                        r: delta / 200,
                    });
                }
            }}
            onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                    const delta = e.touches[0].clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta;
                    api.start({
                        r: delta / 100,
                    });
                }
            }}
            style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                contain: 'layout paint size',
                opacity: 0,
                transition: 'opacity 1s ease',
            }}
        />
    </div>
}

// export const Cobe = ({ className }: { className?: string }) => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
   
//     useEffect(() => {
//       let phi = 0;
   
//       if (!canvasRef.current) return;
   
//       const globe = createGlobe(canvasRef.current, {
//         devicePixelRatio: 2,
//         width: 600 * 2,
//         height: 600 * 2,
//         phi: 0,
//         theta: 0,
//         dark: 1,
//         diffuse: 1.2,
//         mapSamples: 16000,
//         mapBrightness: 6,
//         baseColor: [0.3, 0.3, 0.3],
//         markerColor: [0.1, 0.8, 1],
//         glowColor: [1, 1, 1],
//         markers: [
//           // longitude latitude
//           { location: [37.7595, -122.4367], size: 0.03 },
//           { location: [40.7128, -74.006], size: 0.1 },
//         ],
//         onRender: (state) => {
//           // Called on every animation frame.
//           // `state` will be an empty object, return updated params.
//           state.phi = phi;
//           phi += 0.01;
//         },
//       });
   
//       return () => {
//         globe.destroy();
//       };
//     }, []);
   
//     return (
//       <canvas
//         ref={canvasRef}
//         style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//         className={className}
//       />
//     );
//   };