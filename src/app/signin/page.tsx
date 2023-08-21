"use client"

import React from "react";
import Head from "next/head";
import Input from "@/components/input";
import Navigator from "@/app/signin/navigator";
import {Btn} from "@/app/signin/btn";
import {CloseWindow} from "@/app/icons";

export class SignInForm extends React.Component<{ floating?: boolean }> {
    static defaultProps = {floating: false}
    private hidden = false

    render() {
        let {floating} = this.props;
        return <form
            className={`transition-all duration-700 border shadow hover:shadow-2xl rounded-2xl flex flex-col p-3 ${this.hidden ? "hidden" : ""} ${floating
                ? "fixed z-50 bg-white w-full m-5 top-0 left-0 lg:w-fit lg:m-[unset] lg:left-[unset] lg:top-10 lg:right-2"
                : "w-[400px]"}`}>
            <div className={"basis-1/3 mb-2 flex flex-col"}>
                <p className={"m-1 text-center"}>Sign In</p>
            </div>
            <Navigator className={"absolute w-7 h-7 p-0 top-2 right-2"}>
                <CloseWindow />
            </Navigator>
            <div className={"basis-1/3 mb-2 flex flex-col"}>
                <Input className={"m-1"} type={"Email"} placeHolder={"Email / Username"}></Input>
                <Input className={"m-1"} type={"Password"} placeHolder={"Password"}></Input>
                <Navigator value={"Forgot password?"}></Navigator>
            </div>
            <div className={"basis-1/3 mb-2 flex flex-col"}>
                <div className={"flex flex-row m-1 p-1 justify-between"}>
                    <Navigator value={"Create an account"}/>
                    <Btn value={"Next"}/>
                </div>
            </div>
        </form>;
    }
}

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
