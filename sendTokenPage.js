import { __bal } from "./functionals.js"
import { sendTokenPage__display, sendTokenPage__header_font, updateState } from "./state_check.js"
import { __c, __p, __sC, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js"

__SYD.sendTokenPage = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken"]() + sendTokenPage__display(),
            class:"base__tabs"
        },
        [
            __SYD.sendTokenPage__backBtn(),
            __SYD.sendTokenPage__header(`Send ${__p(["container" , "currentToken"],"base").toUpperCase() == "base".toUpperCase() ? "eth".toUpperCase() : __p(["container" , "currentToken"],"base").toUpperCase()}`),
            __SYD.sendTokenPage__tokenLogo(__p(["container" , "currentToken"],"eth")),
            __SYD.sendTokenPage__inputSec(),
            __SYD.sendTokenPage__bottom_tab()
        ],
        {
            createState:{
                stateName:"sendTokenPage",
                state:{
                    coverScreen:false,
                    tokenMode:true
                }
            },
            mediaQuery:{
                query:[
                    {size:"<600px" , prop:{coverScreen:true}}
                ],
                defState:{coverScreen:false}
            }
        }
    )
}


__SYD.sendTokenPage__backBtn = () =>{
    return __c(
        "div",
        {
            style:__sC["sendTokenPage__backBtn"](),
            class:"sendTokenPage__backBtn"
        },
        [
            __c("i" , {class:"fa-solid fa-chevron-left" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"16px",width:"16px" , fontSize:"16px" , color:SYD_VAR.greyTextColor.get() , textAlign:"center" , pointerEvents:"none"}})},[])
        ],
        {
            events:{
                onclick: e =>{
                    updateState({name:"container" , prop:"renderSendTokenTab" , value:false});
                    updateState({name:"container" , prop:"renderSelectWalletTab" , value:true});
                }
            }
        }
    )
}



__SYD.sendTokenPage__header = (textValue) =>{
    return __c(
        "h1",
        {
            style:sendTokenPage__header_font() + __sC["login_signup__headerFont"]() + "text-transform:capitalize;color:#fff;"
        },
        [
            `${textValue}`
        ]
    )
}

__SYD.sendTokenPage__tokenLogo = (tokenType) =>{
    return __c(
        "div",
        {
            style:__sC["sendTokenPage__tokenLogo"]()
        },
        [
            __c(
                "div",
                {
                    style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el_logo"]() + `background-image:url(./assets/${tokenType == "base" ? "eth" : tokenType}_clr.png);`
                },
                [
                    __c("span",{style:`display:${tokenType == "base" ? "flex" : "none"};position:absolute;bottom:0px;left:50%;height:35px;width:35px;border-radius:15px;background-image:url(./assets/${tokenType}_mono.png);border:2px solid ${SYD_VAR.main_theme_clr_mono.get()}`},[],{genericStyle:["bg_cover"]})
                ],
                {
                    genericStyle:["bg_cover"]
                }
            )
        ]
    )
}

__SYD.sendTokenPage__inputSec = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]({method:"add" , style:{gap:"15px"}})
        },
        [
            __SYD.sendTokenPage__inputSec__walletAdx(),
            __SYD.sendTokenPage__inputSec__tokenAmount(),
            __SYD.sendTokenPage__viewBal__switchBalMode()
        ]
    )
}

__SYD.sendTokenPage__viewBal__switchBalMode = () =>{
    let tokenType = __p(["container" , "currentToken"],"eth");
    return __c(
        "div",
        {
            style:__sC["sendTokenPage__viewBal__switchBalMode"]()
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;gap:8px;",
                    class:"mainPage__topTab__main_wallet_adx_section_li_template_walletRef"
                },
                [
                    __c("p" , {style:"font-weight:500;font-size:14px;"},[`~${__p(["sendTokenPage" , "tokenMode"],true) ? `${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "mainBal"] , ""))} ${`${`${tokenType === "base" ? "eth" : tokenType}`.toUpperCase()}`}` : `$${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "dollBal"] , ""))}`}`])
                ],
                {
                    events:{
                        onclick:e =>{
                            __p(["sendTokenPage" , "tokenMode"],true) ? updateState({name:"sendTokenPage" , prop:"tokenMode" , value:false}) : updateState({name:"sendTokenPage" , prop:"tokenMode" , value:true})
                        }
                    }
                }
            ),

            __c(
                "div",
                {
                    style:"display:flex;gap:8px;" + `color:${SYD_VAR.greyTextColor.get()};`,
                },
                [
                    __c("p" , {style:"font-weight:500;font-size:14px;"},[`Available ${__p(["sendTokenPage" , "tokenMode"],true) ? `$${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "dollBal"] , ""))}` : `${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "mainBal"] , ""))} ${`${`${tokenType === "base" ? "eth" : tokenType}`.toUpperCase()}`}`}`])
                ]
            ),
        ]
    )
}

__SYD.sendTokenPage__inputSec__walletAdx = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken__searchTab"]() + `background-color:${SYD_VAR.bg_dark.get()};position:static;`
        },
        [
            //Recipient Ethereum wallet 
            __c(
                "input",
                {
                    style:__sC["manageToken__input"]() + "width:100%;",
                    placeholder:`Enter Recipient ${__p(["container" , "currentToken"],"base") == "base" ? "Base" : __p(["container" , "user" , "tokenBal_info" , __p(["container" , "currentToken"],"base") , "token_name"] , "")} address`,
                    name:"reciepientWalletAdx"
                },[],
                {
                    events:{
                        oninput: e =>{}
                    }
                }
            )
            //Recipient Ethereum wallet 
        ]
    )
}


__SYD.sendTokenPage__inputSec__tokenAmount = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken__searchTab"]({method:"remove",style:["paddingRight"]}) + `background-color:${SYD_VAR.bg_dark.get()};position:static;`
        },
        [
            //Recipient Ethereum wallet 
            __c(
                "input",
                {
                    style:__sC["manageToken__input"]() + "width:100%;",
                    placeholder:`Enter amount (${__p(["container" , "currentToken"],"base") == "base" ? "eth" : __p(["container" , "currentToken"],"base")})`,
                    name:"tokenAmount",

                },[],
                {
                    type:"sendTokenPage__inputSec__tokenAmount__el",
                    events:{
                        oninput: e =>{}
                    }
                }
            ),
            //Recipient Ethereum wallet 

            __c(
                "div",
                {
                    style:"display:flex;gap:5px;align-items:center;"
                },
                [
                    __c("p" , {style:`font-size:17px;font-weight:600;text-transform:uppercase;color:${SYD_VAR.greyTextColor.get()};`},[`${__p(["container" , "currentToken"],"base") == "base" ? "eth" : __p(["container" , "currentToken"],"base")}`]),

                    __c(
                        "div",
                        {
                            style:__sC["manageToken__wallet_setting_tabs__el__switch"]({method:"add" , style:{height:"30px" , width:"50px" , justifyContent:"center"}}) + `background-color:${SYD_VAR.main_theme_clr_mono.get()};`
                        },
                        [
                            __c("p" , {style:`font-size:14px;font-weight:600;color:${SYD_VAR.main_theme_clr_white.get()};`},["Max"])
                        ],
                        {
                            events:{
                                onclick: e =>{
                                    __v["sendTokenPage__inputSec__tokenAmount__el"].value = Number(__p(["container" , "user" , "tokenBal_info" , __p(["container" , "currentToken"],"base") , "mainBal"] , "0.00"))
                                }
                            }
                        }
                    )
                ]
            )
        ]
    )
}



__SYD.sendTokenPage__bottom_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]({method:"add" , style:{paddingTop:"10px" , paddingBottom:"10px"}}) + `background-color:${SYD_VAR.main_bg.get()};`
        },
        [
            __SYD.sendTokenPage__bottom_tab__cancelBtn(),
            __SYD.sendTokenPage__bottom_tab__nextBtn({})
        ]
    )
}

__SYD.sendTokenPage__bottom_tab__cancelBtn = () =>{
    return __c(
        "button",
        {
            style:__sC["manageToken__bottom_tab__closeBtn"]() + `background-color:${SYD_VAR.main_theme_clr_mono.get()};`,
            class:"button_hover__sp1"
        },
        [
            __c(
                "p",
                {
                    style:__sC["manageToken__bottom_tab__closeBtn__el"]()
                },
                [
                    "Cancel"
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    updateState({name:"container" , prop:"renderSendTokenTab" , value:false});
                    updateState({name:"container" , prop:"renderMainPage" , value:true});
                    updateState({name:"container" , prop:"renderBottomTab" , value:true});
                }
            }
        }
    )
}


__SYD.sendTokenPage__bottom_tab__nextBtn = ({active}) =>{
    return __c(
        "button",
        {
            style:__sC["manageToken__bottom_tab__closeBtn"]() + `background-color:${SYD_VAR.main_theme_clr_mono.get()};` + `opacity:${active ? "1" : ".5"};cursor:${active ? "unset" : "not-allowed"}`,
            class:active ? "button_hover__sp1" : ""
        },
        [
            __c(
                "p",
                {
                    style:__sC["manageToken__bottom_tab__closeBtn__el"]()
                },
                [
                    "Send"
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    if(active)
                    {
                        //send token here

                        //send token here
                    }
                }
            }
        }
    )
}