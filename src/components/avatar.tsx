import Image from "next/image";

type AvatarProps = {
    fileName: string,
    size?: number
    className ?: string
}

export default function Avatar({ fileName, size = 50, className = ''}: AvatarProps) {
    return (
        <Image
            src={"/assets/" + fileName}
            alt={"Qnurye's Avatar"}
            height={size}
            width={size}
            className={`rounded-lg ${className}`}
        />
    );
}