import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

function Navigator({ title = "",url = "", seperated = false }) {
    return (
        <div className={`inline-flex text-deep-blue transition-all duration-400 ${seperated ? 'text-lg opacity-70' : 'text-5xl'}`}>
            <span className={`transition-all duration-700 ${seperated ? '-translate-x-72' : ''}`}>/</span>
            <Link href={url} className={`cursor-none text-center hover:outline-2 hover:outline-dashed hover:outline-deep-blue hover:opacity-100 ${seperated ? 'hover:text-deep-blue' : 'hover:text-pastel-blue'} hover:bg-lavender hover:rounded-lg hover:translate-x-2 hover:p-2 transition-all duration-500 hover:shadow-2xl`}>{title}</Link>
        </div>
    );
}

export default function Index() {
    const [sidebarStyle, setSidebarStyle] = useState('w-screen p-5');
    const [seperated, setSeperated] = useState(false);

    useEffect( () => {
        function handleScroll() {
            if (window.scrollY) {
                setSeperated(true);
            } else {
                setSeperated(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [sidebarStyle]);

    return (
        <div>
        <div className={"h-[1000rem]"}>
            <div className={`grid content-between fixed transition-all duration-700 ease-in-out ${seperated ? 'w-[100px]': 'w-screen p-10'} bg-pastel-blue top-0 left-0 h-full`}>
                <Image
                    src={"/assets/qnurye.png"}
                    alt={"Qnurye's Avatar"}
                    height={100}
                    width={100}
                    className={`cursor-none transition-all duration-700 hover:opacity-100 ${seperated ? 'rounded-3xl p-2 opacity-5 hover:drop-shadow-lg hover:translate-x-2 hover:translate-y-2' : 'hover:drop-shadow-2xl rounded-xl hover:ring-4 hover:ring-lavender hover:translate-x-5 -hover:translate-y-5'}`}
                />
                <div className={`flex flex-col transition-all duration-700 content-around h-max ${seperated ? '-translate-y-20' :''}`}>
                    <div className="flex-1 mt-5">
                        <Navigator title={"Archives"} seperated={seperated} />
                    </div>
                    <div className="flex-1 mt-5">
                        <Navigator title={"Labs"} seperated={seperated} />
                    </div>
                    <div className="flex-1 mt-5">
                        <Navigator title={"About"} seperated={seperated} />
                    </div>
                </div>
                <div />
            </div>
        </div>
        </div>
    )
}
