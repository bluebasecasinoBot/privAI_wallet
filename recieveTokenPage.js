import { partWalletAdx } from "./functionals.js";
import { manageToken__display, recieveToken__display, selectToken__display, selectToken__wallet_setting_tabs__el__display, updateState, updateState__ } from "./state_check.js";
import { __c, __sC, __SYD, SYD_VAR , __p, sydDOM } from "./sydneyDom_v3.js";

__SYD.recieveToken = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken"]() + recieveToken__display(),
            class:"base__tabs"
        },
        [
            // __SYD.mainPage__topTab(),
            __SYD.recieveToken__wallet_setting_tabs(),
            __SYD.recieveToken__bottom_tab()
        ],
        {
            createState:{
                stateName:"recieveToken",
                state:{
                    search_active:false,
                    search_value:""
                }
            }
        }
    )
}


__SYD.recieveToken__wallet_setting_tabs = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]()
        },
        [
            __SYD.recieveToken__wallet_setting_tabs__el({tokenType:"eth"}),
            __SYD.recieveToken__wallet_setting_tabs__el({tokenType:"base"}),         
            __SYD.recieveToken__wallet_setting_tabs__el({tokenType:"pol"}),         
            __SYD.recieveToken__wallet_setting_tabs__el({tokenType:"sol"}),         
            __SYD.recieveToken__wallet_setting_tabs__el({tokenType:"btc"}),         
        ]
    )
}


__SYD.recieveToken__wallet_setting_tabs__el = ({tokenType = "eth"}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el"](),
            class:"button_hover__sp1"
        },
        [
            __c(
                "div",
                {
                    style:__sC["mainPage__topTab__main_acc_sec"]() + "pointer-events:none;"//re-used
                },
                [
                    //token logo
                    __c("div",{style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el_logo"]({method:"add" , style:{minHeight:"50px",minWidth:"50px",maxHeight:"50px",maxWidth:"50px"}}) + `background-image:url(./assets/${tokenType}_mono.png);`},[],{genericStyle:["bg_cover"]}),
                    //token logo

                    //token name
                    __c(
                        "div",
                        {
                            style:__sC["mainPage__topTab__main_acc_sec_name_acc"]() + "pointer-events:none;"
                        },
                        [
                            __c("p" , {style:`color: #ffffff ;text-transform:capitalize;font-weight:700;`},[`${__p(["container" , "user" , "tokenBal_info" , tokenType , "token_name"] , "")}`]),
                            __c("p" , {class:"adxHolder" , style:`color: ${SYD_VAR.greyTextColor.get()} ;text-transform:capitalize;font-weight:300;`},[`${partWalletAdx(__p(["container","user","walletsAdx",tokenType],""))}`]),
                        ]
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;pointer-events:none;"
                },
                [
                    __c(
                        "div",
                        {
                            style:__sC["recieveToken__wallet_setting_tabs__el_logo"]() + `background-color:${SYD_VAR.bg_dark.get()};`
                        },
                        [
                            __c("i" , {class:"fa-solid fa-copy" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"18px",width:"18px" , fontSize:"18px" , color:SYD_VAR.main_theme_clr_white.get() , textAlign:"center" , pointerEvents:"none"}})},[])
                        ]
                    )
                ]
            )
        ],
        {
            events:{
                onclick: e =>{
                    navigator.clipboard.writeText(__p(["container","user","walletsAdx",tokenType],""))
                    .then(() => {
                        const adxVal = e.target.querySelector(".adxHolder").textContent;
                        e.target.querySelector(".adxHolder").textContent = "copied";
                        const timer = setTimeout(() => {
                            e.target.querySelector(".adxHolder").textContent = adxVal;

                            clearTimeout(timer);
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text:', err);
                    });
                }
            }
        }
    )
}




__SYD.recieveToken__bottom_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]({method:"add" , style:{paddingTop:"10px" , paddingBottom:"10px"}}) + `background-color:${SYD_VAR.main_bg.get()};`
        },
        [
            __SYD.recieveToken__bottom_tab__closeBtn()
        ]
    )
}

__SYD.recieveToken__bottom_tab__closeBtn = () =>{
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
                    "close"
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    updateState({name:"container" , prop:"renderRecieveTokenTab" , value:false});
                    updateState({name:"container" , prop:"renderMainPage" , value:true});
                    updateState({name:"container" , prop:"renderBottomTab" , value:true});
                }
            }
        }
    )
}