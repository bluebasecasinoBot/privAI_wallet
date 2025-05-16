import { manageToken__display, manageToken__wallet_setting_tabs__el__display, updateState, updateState__ } from "./state_check.js";
import { __c, __sC, __SYD, SYD_VAR , __p, sydDOM } from "./sydneyDom_v3.js";

__SYD.manageToken = () =>{
    return __c(
        "div",
        {
            style:__sC["manageToken"]() + manageToken__display(),
            class:"base__tabs"
        },
        [
            // __SYD.mainPage__topTab(),
            __SYD.manageToken__searchTab(),
            __SYD.manageToken__wallet_setting_tabs(),
            __SYD.manageToken__bottom_tab()
        ],
        {
            createState:{
                stateName:"manageToken",
                state:{
                    search_active:false,
                    search_value:""
                }
            }
        }
    )
}


__SYD.manageToken__searchTab = () =>{
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
                            if(e.target.value.length > 0) updateState({name:"manageToken" , prop:"search_active" , value:true})
                            else updateState({name:"manageToken" , prop:"search_active" , value:false});

                            updateState({name:"manageToken" , prop:"search_value" , value:e.target.value.toLowerCase()})
                        }
                    }
                }
            )
        ]
    )
}


__SYD.manageToken__wallet_setting_tabs = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]()
        },
        [
            __SYD.manageToken__wallet_setting_tabs__el({tokenType:"eth"}),
            __SYD.manageToken__wallet_setting_tabs__el({tokenType:"base"}),         
            __SYD.manageToken__wallet_setting_tabs__el({tokenType:"pol"}),         
            __SYD.manageToken__wallet_setting_tabs__el({tokenType:"sol"}),         
            __SYD.manageToken__wallet_setting_tabs__el({tokenType:"btc"}),         
        ]
    )
}


__SYD.manageToken__wallet_setting_tabs__el = ({tokenType = "eth"}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el"]() + manageToken__wallet_setting_tabs__el__display(__p(["container" , "user" , "tokenBal_info" , tokenType , "token_name"] , "").toLowerCase()),
            // class:"button_hover__sp1"
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
                            __c("p" , {style:`color: #ffffff ;text-transform:capitalize;font-weight:700;`},[`${__p(["container" , "user" , "tokenBal_info" , tokenType , "token_name"] , "")}`]),
                            __c("p" , {style:`color: ${SYD_VAR.greyTextColor.get()} ;text-transform:capitalize;font-weight:500;`},[`${__p(["container" , "user" , "tokenBal_info" , tokenType , "mainBal"] , "0.00")} ${tokenType}`]),
                        ]
                    )
                ]
            ),

            __c(
                "div",
                {
                    style:"display:flex;align-items:flex-end"
                },
                [
                    __SYD.manageToken__wallet_setting_tabs__el__switch(tokenType)
                ]
            )
        ]
    )
}


__SYD.manageToken__wallet_setting_tabs__el__switch = (tokenType) =>{
    return __c(
        "div",
        {
            style:__sC["manageToken__wallet_setting_tabs__el__switch"]() + `background-color:${__p(["container" , "user" , "walletsAdxDisplay" , tokenType],true) ? SYD_VAR.main_theme_clr.get() : SYD_VAR.bg_dark.get()};`
        },
        [
            //Switch ball
            __c(
                "div",
                {
                    style:__sC["manageToken__wallet_setting_tabs__el__switch_ball"]() + `background-color:${__p(["container" , "user" , "walletsAdxDisplay" , tokenType],true) ? "#fff" : SYD_VAR.main_theme_clr_mono.get()};` + `transform:translateX(${__p(["container" , "user" , "walletsAdxDisplay" , tokenType],true) ? "100%" : "0%"});`
                }
            )
            //Switch ball
        ],
        {
            events:{
                onclick: e =>{
                    __p(["container" , "user" , "walletsAdxDisplay" , tokenType],true) ? updateState__({name:"container" , prop:["user" , "walletsAdxDisplay" , tokenType] , value:false}) : updateState__({name:"container" , prop:["user" , "walletsAdxDisplay" , tokenType] , value:true}) 
                }
            }
        }
    )
}





__SYD.manageToken__bottom_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]({method:"add" , style:{paddingTop:"10px" , paddingBottom:"10px"}}) + `background-color:${SYD_VAR.main_bg.get()};`
        },
        [
            __SYD.manageToken__bottom_tab__closeBtn()
        ]
    )
}

__SYD.manageToken__bottom_tab__closeBtn = () =>{
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
                    updateState({name:"container" , prop:"renderManageWalletTab" , value:false});
                    updateState({name:"container" , prop:"renderMainPage" , value:true});
                    updateState({name:"container" , prop:"renderBottomTab" , value:true});
                }
            }
        }
    )
}