import Avatar from "@/components/avatar";

type SidebarProps = {
    className?: string
}

export default function Sidebar({ className = '' }: SidebarProps) {
    return (
        <div className={`bg-pastel-blue top-0 left-0 h-full ${className}`}>
            <Avatar fileName={"qnurye.png"}></Avatar>
        </div>
    );
}