import { privAi__loader__main__display } from "./state_check.js";
import { __SYD, __c, __sC } from "./sydneyDom_v3.js";

__SYD.privAi__loader__main = () =>{
    return __c(
        "div",
        {
            style:__sC["privAi__loader__main"]() + privAi__loader__main__display()
        },
        [
            __SYD.privAi__loader__main__el()
        ]
    )
}

__SYD.privAi__loader__main__el = () =>{
    return __c(
        "div",
        {
            style:__sC["privAi__loader__main__el"]()
        }
    )
}