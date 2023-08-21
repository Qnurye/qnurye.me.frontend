import React from "react";

type BtnParams = {
    value?: string,
    className?:string,
    children?: React.ReactNode;
}


export function Btn(params: BtnParams) {
    const className = params.className === undefined ? "" : params.className;
    return <button className={`${className} transition-all duration-500 p-1 pl-4 pr-4 inline-block bg-lavender text-white rounded shadow outline-0 hover:cursor-none hover:shadow-2xl hover:bg-deep-blue focus:shadow-2xl focus:bg-deep-blue`}>
        {params.value}
        {params.children}
    </button>;
}