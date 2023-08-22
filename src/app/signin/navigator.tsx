import Link from "next/link";
import React, {MouseEventHandler} from "react";

interface NavigatorParams {
    className?: string
    value?: string
    children?: React.ReactNode
    onClick?: MouseEventHandler
}

export default function Navigator(params: NavigatorParams) {
    return (
        <Link className={`${params.className} hover:cursor-none transition-all duration-500 w-fit inline-block text-deep-blue outline-0 hover:bg-pastel-blue rounded hover:rounded-lg focus:bg-pastel-blue focus:rounded-lg p-2`}
              onClick={params.onClick}
            href={"#"}>
            {params.value}
            {params.children}
        </Link>);
}
