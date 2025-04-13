interface Props {
    className?: string
}

const ShadcnIcon = ({ className = "size-10 bg-white rounded-md" }: Props) => {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={className}
        >
            <defs>
                <style>
                    {
                        ".st0,.st1{fill: none;}.st1{stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;}"
                    }
                </style>
            </defs>
            <rect className="st0" width={256} height={256} />
            <line className="st1" x1={208} y1={128} x2={128} y2={208} />
            <line className="st1" x1={192} y1={40} x2={40} y2={192} />
        </svg>
    )
}

export default ShadcnIcon