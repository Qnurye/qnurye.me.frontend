import FavoriteIcon from '@mui/icons-material/Favorite';
import Navigator from "@/app/signin/navigator";
import {SiSimpleicons, SiMaterialdesign, SiGoland, SiGooglefonts, SiNextdotjs, SiReact, SiTailwindcss, SiWebstorm} from "react-icons/si";
import {TbBrandGolang, TbBrandTabler} from "react-icons/tb";

type FooterProps = {
    className?: string
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <div className={`transition-all duration-700 ease-in-out text-2xl flex flex-col space-y-2 text-center text-lavender items-center justify-center mt-10 bg-deep-blue h-screen w-full ${className}`}>
            <span className={`transition-all duration-700 ease-in-out hover:text-white`}>
                Made
                by
                <Navigator value={"Qnurye"} className={"text-lavender"} />
            </span>
            <span className={`transition-all duration-700 ease-in-out hover:text-white`}>
                with <FavoriteIcon className={"hover:cursor-none transition-all duration-700 ease-in-out hover:text-red-700"} /> &nbsp; &
            </span>
            <div className={"text-lg flex flex-row space-x-2"}>
                <Navigator className={"text-lavender"}><SiNextdotjs className={"inline"} /> Next.js</Navigator>
                <Navigator className={"text-lavender"}><SiReact className={"inline"} /> React</Navigator>
                <Navigator className={"text-lavender"}><SiTailwindcss className={"inline"} /> Tailwindcss</Navigator>
                <Navigator className={"text-lavender"}><TbBrandGolang className={"inline"} /> Go</Navigator>
            </div>
            <div className={"text-lg flex flex-row space-x-2"}>
                <Navigator className={"text-lavender"}><SiMaterialdesign className={"inline"} /> Material Icons</Navigator>
                <Navigator className={"text-lavender"}><SiSimpleicons className={"inline"} /> Simple Icons</Navigator>
                <Navigator className={"text-lavender"}><TbBrandTabler className={"inline"} /> Tabler Icons</Navigator>
            </div>
            <div className={"text-lg flex flex-row space-x-2"}>
                <Navigator className={"text-lavender"}><SiGooglefonts className={"inline"} /> Arvo Fonts</Navigator>
            </div>
            <div className={"text-lg flex flex-row space-x-2"}>
                <Navigator className={"text-lavender"}><SiGoland className={"inline"} /> Goland</Navigator>
                <Navigator className={"text-lavender"}><SiWebstorm className={"inline"} /> Webstorm</Navigator>
            </div>
            <br/>
            <span className={`text-sm transition-all duration-700 ease-in-out hover:text-white`}>
                &copy; Qnurye. All Rights Reserved .
            </span>
        </div>
    );
}
