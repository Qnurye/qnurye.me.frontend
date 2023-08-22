"use client"

import React from "react";
import Head from "next/head";
import SignInForm from "@/app/signin/signInForm";

export default function Page() {
    return (
        <>
            <Head>
                <meta name="theme-color" content={'#e7eaf6'}/>
            </Head>
            <div className={"flex flex-row items-center justify-center w-full h-full"}>
                <SignInForm floating={false} />
            </div>
        </>
    )
}
