interface Props {
    className?: string
}

const AlpineJsIcon = ({ className = "size-10" }: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 234.84"><path fill="#77C1D2" d="M398.22 0L512 113.28 398.22 226.56 284.44 113.28z" /><path fill="#2D3441" d="M113.78 0l235.87 234.84H122.1L0 113.28z" /></svg>
    )
}

export default AlpineJsIcon