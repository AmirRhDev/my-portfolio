import { ReactNode } from "react";

export type CardType = {
    children: ReactNode,
    id: number
};

const Card = ({ children, id }: CardType) => {
    return (
        <div
            key={id}
            className="group relative h-screen w-screen overflow-hidden"
        >
            <div
                className="absolute inset-0 z-0 transition-transform duration-600 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center border border-red-500">
                {children}
            </div>
        </div>
    );
};

export default Card;