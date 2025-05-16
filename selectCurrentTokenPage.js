import { __bal } from "./functionals.js";
import { manageToken__display, selectToken__display, selectToken__wallet_setting_tabs__el__display, updateState, updateState__ } from "./state_check.js";
import { __c, __sC, __SYD, SYD_VAR , __p, sydDOM } from "./sydneyDom_v3.js";

__SYD.selectToken = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken"]() + selectToken__display(),
            class:"base__tabs"
        },
        [
            // __SYD.mainPage__topTab(),
            __SYD.selectToken__searchTab(),
            __SYD.selectToken__wallet_setting_tabs(),
            __SYD.selectToken__bottom_tab()
        ],
        {
            createState:{
                stateName:"selectToken",
                state:{
                    search_active:false,
                    search_value:""
                }
            }
        }
    )
}


__SYD.selectToken__searchTab = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken__searchTab"]() + `background-color:${SYD_VAR.bg_dark.get()}`,
            class:"docs__searchTab"
        },
        [
            __c("i" , {class:"fa-solid fa-magnifying-glass" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"20px",width:"20px" , fontSize:"20px"}})},[]),
            __c(
                "input",
                {
                    style:__sC["manageToken__input"](),
                    placeholder:"Search token",
                    name:"searchTokenInput"
                },[],
                {
                    events:{
                        oninput: e =>{
                            if(e.target.value.length > 0) updateState({name:"selectToken" , prop:"search_active" , value:true})
                            else updateState({name:"selectToken" , prop:"search_active" , value:false});

                            updateState({name:"selectToken" , prop:"search_value" , value:e.target.value.toLowerCase()})
                        }
                    }
                }
            )
        ]
    )
}


__SYD.selectToken__wallet_setting_tabs = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]()
        },
        [
            __SYD.selectToken__wallet_setting_tabs__el({tokenType:"eth"}),
            __SYD.selectToken__wallet_setting_tabs__el({tokenType:"base"}),         
            __SYD.selectToken__wallet_setting_tabs__el({tokenType:"pol"}),         
            __SYD.selectToken__wallet_setting_tabs__el({tokenType:"sol"}),         
            __SYD.selectToken__wallet_setting_tabs__el({tokenType:"btc"}),         
        ]
    )
}


__SYD.selectToken__wallet_setting_tabs__el = ({tokenType = "eth"}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el"]() + selectToken__wallet_setting_tabs__el__display(__p(["container" , "user" , "tokenBal_info" , tokenType , "token_name"] , "").toLowerCase()),
            class:"button_hover__sp1"
        },
        [
            __c(
                "div",
                {
                    style:__sC["mainPage__topTab__main_acc_sec"]()//re-used
                },
                [
                    //token logo
                    __c("div",{style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el_logo"]() + `background-image:url(./assets/${tokenType == "base" ? "eth" : tokenType}_clr.png);`},[
                        tokenType == "base" ? __c("span",{style:`position:absolute;bottom:0px;left:50%;height:25px;width:25px;border-radius:10px;background-image:url(./assets/${tokenType}_mono.png);border:2px solid ${SYD_VAR.main_theme_clr_mono.get()}`},[],{genericStyle:["bg_cover"]}) : ""
                    ],{genericStyle:["bg_cover"]}),
                    //token logo

                    //token name
                    __c(
                        "div",
                        {
                            style:__sC["mainPage__topTab__main_acc_sec_name_acc"]()
                        },
                        [
                            __c("p" , {class:__p(["container" , "renderInitBal"],false) ? "" : "skeleton-loader-long" , style:`color: #ffffff ;text-transform:capitalize;font-weight:700;`},[`${__p(["container" , "user" , "tokenBal_info" , tokenType , "token_name"] , "")}`]),
                            
                            __c("p" , {class:__p(["container" , "renderInitBal"],false) ? "" : "skeleton-loader" , style:`color: ${SYD_VAR.greyTextColor.get()} ;text-transform:capitalize;font-weight:300;font-size:15px;`},[`${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "mainBal"] , ""))} ${__p(["container" , "renderInitBal"],false) ? `${tokenType === "base" ? "eth" : tokenType}`.toUpperCase() : ""}`]),
                        ]
                    )
                ]
            )
        ],
        {
            events:{
                onclick: e =>{
                    updateState({name:"container" , prop:"currentToken" , value:tokenType});
                    updateState({name:"container" , prop:"renderSelectWalletTab" , value:false});
                    updateState({name:"container" , prop:"renderSendTokenTab" , value:true});
                }
            }
        }
    )
}




__SYD.selectToken__bottom_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]({method:"add" , style:{paddingTop:"10px" , paddingBottom:"10px"}}) + `background-color:${SYD_VAR.main_bg.get()};`
        },
        [
            __SYD.selectToken__bottom_tab__closeBtn()
        ]
    )
}

__SYD.selectToken__bottom_tab__closeBtn = () =>{
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
                    updateState({name:"container" , prop:"renderSelectWalletTab" , value:false});
                    updateState({name:"container" , prop:"renderMainPage" , value:true});
                    updateState({name:"container" , prop:"renderBottomTab" , value:true});
                }
            }
        }
    )
}