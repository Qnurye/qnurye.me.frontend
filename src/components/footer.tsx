
type FooterProps = {
    className?: string
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <div className={`grid bg-lavender h-[200px] w-full ${className}`}>
        </div>
    );
}
