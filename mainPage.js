import { __bal, partWalletAdx } from "./functionals.js";
import { mainPage__display, mainPage__header, mainPage__mainDisplay_1_logo__size, mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el__display, mainPage__topTab__main_wallet_adx_displayState, mainPage__topTab_tab, updateState } from "./state_check.js";
import { __c, __g, __p, __sC, __SYD, __u, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.mainPage = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage"]() + mainPage__display(),
            class:"base__tabs"
        },
        [
            __SYD.mainPage__mainDisplay_1(),
            __SYD.mainPage__mainDisplay_1_buttons_tab(),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec()
        ]
    )
}

__SYD.mainPage__topTab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab"]() + `background-color:${SYD_VAR.main_bg.get()};`,
            class:"base__tabs"
        },
        [
            __SYD.mainPage__topTab__main()
        ],
        {
            createState:{
                stateName:"mainPage__topTab",
                state:{
                    renderTab:0
                }
            }
        }
    )
}


//Main Top tab
__SYD.mainPage__topTab__main = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__tabDesign"]() + mainPage__topTab_tab(0)
        },
        [
            __SYD.mainPage__topTab__main_acc_sec(),
            __SYD.mainPage__topTab__main_maxSize(),
            __SYD.mainPage__topTab__main_wallet_adx_section()
        ]
    )
}

__SYD.mainPage__topTab__main_maxSize = () =>{
    return __c(
        "div",
        {},
        [
            __c("i" , {class:"fa-solid fa-up-right-and-down-left-from-center" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]() + `color:${SYD_VAR.greyTextColor.get()}`}),
        ],
        {
            events:{
                onclick:e =>{
                    if (!document.fullscreenElement) {
                        document.body.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
                        });
                    } else {
                        document.exitFullscreen();
                    }
                }
            }
        }
    )
}

__SYD.mainPage__topTab__main_acc_sec = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_acc_sec"]()
        },
        [
            __SYD.mainPage__topTab__main_acc_sec_logo(),
            __SYD.mainPage__topTab__main_acc_sec_name_acc()
        ],
        {
            events:{
                onmouseover:e =>{
                    updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"ex_bool" , value:true});

                    __p(["mainPage__topTab__main_wallet_adx_section" , "ex_bool"]) ? updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_display" , value:true}) : ""
                },
                onmouseout:e =>{
                    updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"ex_bool" , value:false});

                    !__p(["mainPage__topTab__main_wallet_adx_section" , "ex_bool"]) && !__p(["mainPage__topTab__main_wallet_adx_section" , "self_bool"]) ? updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_display" , value:false}) : ""
                }
            }
        }
    )
}

__SYD.mainPage__topTab__main_acc_sec_logo = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_acc_sec_logo"]() + `background-image:url(./assets/logo.png)`
        },
        [],{genericStyle:["bg_cover"]}
    )
}

__SYD.mainPage__topTab__main_acc_sec_name_acc = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_acc_sec_name_acc"](),
        },
        [
            __c("p" , {style:`color:${SYD_VAR.greyTextColor.get()} `},[`@${__p(["container","user","profile","username"],"username")}`]),
            __SYD.mainPage__topTab__main_acc_sec_wallet_copy_sec()

        ]
    )
}

__SYD.mainPage__topTab__main_acc_sec_wallet_copy_sec = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec"](),
            class:"mainPage__topTab__main_acc_sec_wallet_copy_sec__cls"
        },
        [
            __c("p" , {style:"color: rgba(255 , 255 , 255 , 1);font-weight:600;"},["Accounts"]),
            __c("i" , {class:"fa-solid fa-copy" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]() + `color:${SYD_VAR.greyTextColor.get()}`}),

        ]
    )
}

__SYD.mainPage__topTab__main_wallet_adx_section = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section"]() + mainPage__topTab__main_wallet_adx_displayState(),
            class:"tab_entry"
        },
        [
            __c(
                "ul",
                {
                    style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]()
                },
                [
                    __SYD.mainPage__topTab__main_wallet_adx_section_li_template({walletType:"Ethereum" , walletAdx_ref:"eth"}),
                    __SYD.mainPage__topTab__main_wallet_adx_section_li_template({walletType:"Base" , walletAdx_ref:"base"}),
                    __SYD.mainPage__topTab__main_wallet_adx_section_li_template({walletType:"Polygon" , walletAdx_ref:"pol"}),
                    __SYD.mainPage__topTab__main_wallet_adx_section_li_template({walletType:"Solana" , walletAdx_ref:"sol"}),
                    __SYD.mainPage__topTab__main_wallet_adx_section_li_template({walletType:"Bitcoin" , walletAdx_ref:"btc"}),

                ]
            )
        ],
        {
            createState:{
                stateName:"mainPage__topTab__main_wallet_adx_section",
                state:{
                    self_display:false,
                    self_bool:false,
                    ex_bool:false
                }
            },
            events:{
                onmouseover:e =>{
                    updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_bool" , value:true});

                    __p(["mainPage__topTab__main_wallet_adx_section" , "self_bool"]) ? updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_display" , value:true}) : ""
                },
                onmouseout:e =>{
                    updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_bool" , value:false});

                    !__p(["mainPage__topTab__main_wallet_adx_section" , "ex_bool"]) && !__p(["mainPage__topTab__main_wallet_adx_section" , "self_bool"]) ? updateState({name:"mainPage__topTab__main_wallet_adx_section" , prop:"self_display" , value:false}) : ""
                }
            }
        }
    )
}

__SYD.mainPage__topTab__main_wallet_adx_section_li_template = ({
    walletType = "",
    walletAdx_ref = ""
}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_li_template"]()
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;gap:8px;align-items:center;"
                },
                [
                    __c("span",{style:`min-height:25px;min-width:25px;border-radius:5px;background-image:url(./assets/${walletAdx_ref}_mono.png);`},[],{genericStyle:["bg_cover"]}),
                    __c("p" , {} , [`${walletType}`])
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;gap:5px;align-items:center;cursor:pointer;transition:all linear .3s",
                    class:"mainPage__topTab__main_wallet_adx_section_li_template_walletRef"
                },
                [
                    __c("p" , {style:"pointer-events:none;"} , [`${partWalletAdx(__p(["container","user","walletsAdx",walletAdx_ref],""))}`]),

                    __c("i" , {class:"fa-solid fa-copy" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]() + "pointer-events:none;"},[])
                ],
                {
                    events:{
                            onclick:e =>{
                                navigator.clipboard.writeText(__p(["container","user","walletsAdx",walletAdx_ref],""))
                                .then(() => {
                                    const adxValue = e.target.querySelector("p").textContent;
                                    e.target.querySelector("p").textContent = "copied";
                                    const timer = setTimeout(() => {
                                        e.target.querySelector("p").textContent = adxValue;

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
        ]
    )
}
//Main Top tab

//Main front display panel
__SYD.mainPage__mainDisplay_1 = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1"]()
        },
        [
            __SYD.mainPage__mainDisplay_1_logo(),
            __SYD.mainPage__mainDisplay_1_header(`Welcome @${__p(["container","user","profile","username"],"username")}`),
            __c("p" , {style:`pointer-events:none;text-align:center;width:100%;color:${SYD_VAR.greyTextColor.get()};`} , ["Top up wallet to get started"]),
        ],
        {
            createState:{
                stateName:"mainPage__mainDisplay_1",
                state:{
                    mobileState__font:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<600px" , prop:{mobileState__font:true}}
                ],
                defState:{mobileState__font:false}
            }
        }
    )
}

__SYD.mainPage__mainDisplay_1_logo = () =>{
    return __c(
        "div",
        {
            style:mainPage__mainDisplay_1_logo__size() + "background-image:url(./assets/logo.png);border-radius:20px;"
        },[],{
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.mainPage__mainDisplay_1_header = (textValue) =>{
    return __c(
        "h1",
        {
            style:mainPage__header() + __sC["login_signup__headerFont"]() + "font-weight:900;"
        },
        [
            `${textValue}`
        ]
    )
}
//Main front display panel


//Main buttons tab
__SYD.mainPage__mainDisplay_1_buttons_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_buttons_tab"]()
        },
        [   
            __SYD.mainPage__mainDisplay_1_buttons_tab__el({btnText:"send" , iconCls:"fa-regular fa-paper-plane" , active:true , action:"send"}),
            __SYD.mainPage__mainDisplay_1_buttons_tab__el({btnText:"recieve" , iconCls:"fa-solid fa-qrcode" , active:true , action:"recieve"}),
            __SYD.mainPage__mainDisplay_1_buttons_tab__el({btnText:"swap" , iconCls:"fa-solid fa-retweet"}),
            __SYD.mainPage__mainDisplay_1_buttons_tab__el({btnText:"buy" , iconCls:"fa-solid fa-money-bill-wheat"}),
        ]
    )
}

__SYD.mainPage__mainDisplay_1_buttons_tab__el = ({btnText = "" , btnType = "" , iconCls = "" , active , action}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_buttons_tab__el"]() + `opacity:${active ? "1" : ".5"};cursor:${active ? "pointer" : "not-allowed"};color:${SYD_VAR.greyTextColor.get()}`,
            class:active ? "button_hover__sp1" : ""
        },
        [
            __c("i" , {class:iconCls , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"20px",width:"20px" , fontSize:"20px"}}) + "color: #3375bb ;pointer-events:none;"},[]),
            __c("p",{},[btnText])
        ],
        {
            events:{
                onclick:e =>{
                    if(action === "send")
                    {
                        updateState({name:"container" , prop:"renderSelectWalletTab" , value:true});
                        updateState({name:"container" , prop:"renderMainPage" , value:false});
                        updateState({name:"container" , prop:"renderBottomTab" , value:false});
                    }else if(action === "recieve")
                    {
                        updateState({name:"container" , prop:"renderRecieveTokenTab" , value:true});
                        updateState({name:"container" , prop:"renderMainPage" , value:false});
                        updateState({name:"container" , prop:"renderBottomTab" , value:false});
                    }
                }
            }
        }
    )
}
//Main buttons tab


//Main wallets Adx tab
__SYD.mainPage__mainDisplay_1_walletAdx_sec = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_walletAdx_sec"]()
        },
        [
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__manage_tokens(),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet()
        ]
    )
}

__SYD.mainPage__mainDisplay_1_walletAdx_sec__manage_tokens = () =>{
    return __c(
        "div",
        {style:"display:flex;gap:15px;align-self:flex-end;cursor:pointer;" , class:"mainPage__topTab__main_wallet_adx_section_li_template_walletRef"},
        [
            __c("i" , {class:"fa-solid fa-gears" , style:__sC["mainPage__topTab__main_acc_sec_wallet_copy_sec__copyIcon"]({method:"add",style:{height:"20px",width:"20px" , fontSize:"20px"}})},[]),
            __c("p",{style:`font-size:18px;font-weight:700;`},["Tokens Setting"])
        ],
        {
            events:{
                onclick: e =>{
                    updateState({name:"container" , prop:"renderMainPage" , value:false});
                    updateState({name:"container" , prop:"renderBottomTab" , value:false});
                    updateState({name:"container" , prop:"renderManageWalletTab" , value:true});
                }
            }
        }
    )
}

__SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__topTab__main_wallet_adx_section_ul"]() + "gap:15px;"//re-used
        },
        [
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el({tokenType:"eth"}),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el({tokenType:"base"}),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el({tokenType:"pol"}),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el({tokenType:"sol"}),
            __SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el({tokenType:"btc"}),

        ]
    )
}

__SYD.mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el = ({tokenType = "eth"}) =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__mainDisplay_1_walletAdx_sec__main_wallet_el"]() + mainPage__mainDisplay_1_walletAdx_sec__main_wallet__el__display(tokenType),
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
            ),

            __c(
                "div",
                {
                    style:__sC["mainPage__topTab__main_acc_sec_name_acc"]() + "align-items:flex-end"
                },
                [
                    __c("p" , {class:__p(["container" , "renderInitBal"],false) ? "" : "skeleton-loader" , style:`color: #ffffff ;text-transform:capitalize;font-weight:300;font-size:15px;`},[`${__p(["container" , "renderInitBal"],false) ? "$" : ""}${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "dollBal"] , ""))}`]),


                    __c("p" , {class:__p(["container" , "renderInitBal"],false) ? "" : "skeleton-loader" , style:`color: ${SYD_VAR.greyTextColor.get()} ;text-transform:capitalize;font-weight:300;font-size:15px;`},[`${__p(["container" , "renderInitBal"],false) ? "+$" : ""}${__bal(__p(["container" , "user" , "tokenBal_info" , tokenType , "latestTxn"] , ""))}`]),
                ]
            )
        ]
    )
}
//Main wallets Adx tab