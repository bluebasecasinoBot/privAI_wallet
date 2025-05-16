import { bottomNav__display, updateState } from "./state_check.js"
import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js"


//Main bottom tab
__SYD.mainPage__bottomTab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]() + `background-color:${SYD_VAR.main_bg.get()};` + bottomNav__display(),
            class:"base__tabs"
        },
        [
            __SYD.mainPage__bottomTab__el({iconCls:"fa-solid fa-house" , tabType:0 , active:true}),
            __SYD.mainPage__bottomTab__el({iconCls:"fa-solid fa-retweet" , tabType:1}),
            __SYD.mainPage__bottomTab__el({iconCls:"fa-solid fa-clock-rotate-left" , tabType:2}),
            __SYD.mainPage__bottomTab__el({iconCls:"fa-solid fa-magnifying-glass-dollar" , tabType:3}),
        ],
        {
            createState:{
                stateName:"mainPage__bottomTab",
                state:{
                    currentTab:0
                }
            }
        }
    )
}
//Main bottom tab


__SYD.mainPage__bottomTab__el = ({iconCls , tabType , active}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab__el"]() + `${tabType == __p(["mainPage__bottomTab" , "currentTab"],0) ? `border-color:${SYD_VAR.main_theme_clr.get()};` : ""}` + `${!active ? "cursor:not-allowed;opacity:.5;" : ""}`,
            class:active ? "button_hover__sp1" : ""
        },
        [
            __c("i" , {
                class:iconCls , 
                style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"20px",width:"20px" , fontSize:"20px" , pointerEvents:"none"}}) + `${tabType == __p(["mainPage__bottomTab" , "currentTab"],0) ? `color:${SYD_VAR.main_theme_clr.get()};pointer-events:none;` : ""}`
            }),
        ],
        {
            events:{
                onclick:e =>{
                    if(active)updateState({name:"mainPage__bottomTab" , prop:"currentTab" , value:tabType})
                }
            }
        }
    )
}