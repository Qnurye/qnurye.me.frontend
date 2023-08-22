"use client";

import {MouseEventHandler, useEffect, useState} from "react";
import Link from "next/link";
import Head from "next/head";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SignInForm from "@/app/signin/signInForm";

function IndexPageNavigator({ className = '', title = "",url = "", seperated = false }) {
    return (
        <div className={`${className} inline-flex text-deep-blue transition-all duration-400 ${seperated ? 'text-lg opacity-70' : 'text-5xl'}`}>
            <span className={`transition-all duration-700
            ${seperated ? '-translate-x-72' : ''}`}>/</span>

            <Link href={url} className={`cursor-none text-center hover:outline-2
            hover:outline-dashed hover:outline-deep-blue hover:opacity-100
            hover:bg-lavender hover:rounded-lg hover:translate-x-2 hover:p-2
            transition-all duration-500 hover:shadow-2xl
            ${seperated
                ? 'hover:text-deep-blue'
                : 'hover:text-pastel-blue'}
            `}
            >{title}</Link>
        </div>
    );
}


type ArticleProps = {
    article: {
        id: number,
        title: string,
        body: string,
        date: string,
        words: number
    },
    className?: string,
    seperated?: boolean
}

function Article({article, className = '', seperated = false}: ArticleProps) {
    return (
        <div className={`font-serif ${className} ${seperated
        ? 'mt-14 mb-14 md:ml-32 md:mr-16 ml-5 mr-5'
        : 'mt-10 mb-10 ml-5'
        }`}>
            <div className={`text-deep-blue font-bold ${seperated
            ? 'text-2xl'
            : 'text-xl'
            }`}>
                <Link href={''}>{article.title}</Link>
            </div>
            <div className={`text-deep-blue ${seperated
            ? 'text-xl'
            : 'text-lg'
            }`}>
                {article.body}
            </div>
        </div>
    );
}

function Qnurye({ className = '', seperated = false }) {
    return (
        <text className={`${className} fixed duration-700 drop-shadow-2xl bold italic z-40 text-lavender ${seperated
            ? 'top-6 right-5 text-2xl opacity-30'
            : 'top-12 right-1/3 md:right-1/2 translate-x-1/2 text-3xl md:text-5xl'
        }`}>qnurye.me</text>
    );
}

type QnuryeAvatarProps = {
    className?: string
    seperated?: boolean
    onClick?: MouseEventHandler
}
function ProfileImage({ className = '', seperated = false, onClick = undefined}: QnuryeAvatarProps) {
    return (
        <span className={`${className} text-center text-deep-blue w-fit h-fit cursor-none transition-all duration-700 hover:opacity-100 ${seperated
                ? 'rounded-3xl opacity-5 hover:shadow hover:translate-x-2 hover:translate-y-2'
                : 'hover:shadow-2xl rounded-xl hover:ring-4 hover:ring-lavender hover:translate-x-5 -hover:translate-y-5'}`}
         onClick={onClick}>
            <AccountBoxOutlinedIcon className={`text-[100px]`} />
            <br/>
            <i><b>Sign In</b></i>
        </span>
    );
}

function DockBar({ className = '', seperated = false, onClickProfileImage = undefined }: {
    className?: string
    seperated?: boolean
    onClickProfileImage?: MouseEventHandler
}) {
    return (
        <div className={`${className} grid left-0 bg-pastel-blue sticky content-between transition-all
        duration-700 ease-in-out ${seperated
            ? 'w-[100px] -translate-x-full md:-translate-x-0 h-dock md:ml-5 top-4 rounded-3xl md:drop-shadow-md hover:drop-shadow-2xl hover:-translate-y-2'
            : 'w-full p-10 h-screen top-0'}
        `}>
            <ProfileImage seperated={seperated} onClick={onClickProfileImage} />
            <div className={`col-span-1 flex flex-col transition-all duration-700 text-center items-center justify-between
            content-around h-max${seperated ? '-translate-y-20' :''}`}>
                <IndexPageNavigator className="flex-1" title={"Archives"} seperated={seperated} />
                <IndexPageNavigator className="flex-1 mt-5" title={"Labs"} seperated={seperated} />
                <IndexPageNavigator className="flex-1 mt-5" title={"About"} seperated={seperated} />
            </div>
            <div className='row-span-2' />
        </div>
    );
}

export default function Page() {
    const [sidebarStyle] = useState('w-full p-5');
    const [seperated, setSeperated] = useState(false);
    const [signinHidden, setSigninHidden] = useState(true);

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
            <Head>
                <meta name="theme-color" content={'#e7eaf6'} />
            </Head>
            <div className="w-full h-screen absolute top-0 left-0 bg-deep-blue"></div>
            <div className={"min-h-full h-fit grid"}>
                <Qnurye seperated={seperated} />
                <DockBar seperated={seperated} onClickProfileImage={()=>{
                    setSigninHidden(false)
                }} />

                <div className={`transition-all duration-700 ${seperated
                    ? ''
                    : ''
                }`}>
                    {[{
                        id: 1,
                        title: '用 Go 和 React 全栈搭建自己的博客网站',
                        body: '在当今数字化时代，个人博客网站成为了展示个人才华、分享知识和建立个人品牌的重要平台。随着技术的不断发展，使用全栈开发工具来构建博客网站已经成为一种流行趋势。本文将介绍 ...',
                        date: '2023-07-03',
                        words: 700
                    },{
                        id: 2,
                        title: '三年后再次使用 Arch Linux',
                        body: '时光荏苒，转眼间三年过去了。回顾起我最初尝试使用Arch Linux的经历，当时的我是一个对Linux充满好奇心的新手。然而，面对Arch Linux的高度自定义和学习曲线，我曾一度感到无所适从。然而，三年后的 ...',
                        date: '2023-07-03',
                        words: 700
                    },{
                        id: 3,
                        title: 'Radiohead 之于我',
                        body: "Radiohead是一支英国的另类摇滚乐队，由主唱Thom Yorke、吉他手Jonny Greenwood、贝斯手Colin Greenwood、鼓手Phil Selway和键盘手Ed O'Brien组成。他们的音乐作品富有实验性，融合 ...",
                        date: '2023-07-03',
                        words: 700
                    },{
                        id: 4,
                        title: '我的知识系统sad',
                        body: '在这个信息时代，我们面临着大量的信息和知识，如何有效地获取、整理和应用这些知识成为了一个关键的问题。我的知识系统是我个人在这个领域的探索和实践的结晶，它帮助我在海量的信息中找到方向，并将知识转化为实际行动...',
                        date: '2023-07-03',
                        words: 700
                    }].map(p =>
                        <Article key={p.id} article={p} seperated={seperated}/>
                    )}
                </div>
            </div>
            <SignInForm floating={true} hidden={signinHidden} onClose={()=>{setSigninHidden(true)}} />
            {/*<Footer className={""}></Footer>*/}
        </div>
    )
}
