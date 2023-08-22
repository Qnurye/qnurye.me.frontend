
import Navigator from "@/app/signin/navigator";
import Input from "@/components/input";
import {Btn} from "@/app/signin/btn";
import { MouseEventHandler } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type SignInFormProps = {
    floating?: boolean
    hidden?: boolean
    onClose?: MouseEventHandler
}

export default function SignInForm({ floating = false, hidden = true, onClose = undefined }: SignInFormProps) {
    return <form
            className={`transition-all md:w-[400px] md:h-fit duration-1000 border shadow hover:shadow-2xl flex flex-col p-3 ${floating
                ? `rounded-lg md:rounded-2xl fixed z-50 bg-white right-5 left-5 md:w-fit md:m-[unset] md:left-[unset] ${hidden
                    ? "sm:-top-full -top-full"
                    : "md:top-10 top-1/4"}`
                : "w-full h-full md:rounded-2xl"}`} >
            <div className={"basis-1/3 mb-2 flex flex-col"}>
                <span className={"m-1 text-center"}>Sign In</span>
            </div>
            <Navigator className={`${floating ? "" : "hidden "}absolute w-7 p-0 sm:w-7 h-7 sm:p-0 text-center top-2 right-2`} onClick={onClose}>
                <CloseOutlinedIcon />
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