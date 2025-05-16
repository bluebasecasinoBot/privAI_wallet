import { __c, __g, __m, __sC, __SYD, __u, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"
import "./login_signup.js"
import "./state_check.js"
import "./styleComponents.js"
import "./variables.js"
import "./mainPage.js"
import "./selectCurrentTokenPage.js"
import "./sendTokenPage.js"
import "./recieveTokenPage.js"
import "./pheripherals.js"
import "./bottomNav.js"

import "./manageTokenPage.js"
import { def_token_obj } from "./variables.js"
import { updateState, updateState__ } from "./state_check.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC["container"]() + `background-color:${SYD_VAR.main_bg.get()}`
        },
        [
            __SYD.subContainer()
        ],
        {
            createState:{
                stateName:"container",
                state:{
                    renderMain:0,
                    count:0,
                    renderMainPage:true,
                    renderBottomTab:true,
                    renderManageWalletTab:false,
                    renderSelectWalletTab:false,
                    renderSendTokenTab:false,
                    renderRecieveTokenTab:false,
                    renderLoaderScreen:false,

                    //render balance animation check
                    renderInitBal:false,
                    //render balance animation check
                    currentToken:"",
                    user:{
                        profile:{username:"username" , email:"useremail@gmail.com" , password:""},
                        walletsAdx:{eth:"" , sol:"" , pol:"" , btc:"" , base:""},
                        walletsAdxDisplay:{eth:true , sol:true , pol:true , btc:true , base:true},
                        tokenBal_info:{
                            eth:{
                                mainBal:"",
                                dollBal:"",
                                latestTxn:"",
                                token_name:""
                            },
                            base:{
                                mainBal:"",
                                dollBal:"",
                                latestTxn:"",
                                token_name:""
                            },
                            sol:{
                                mainBal:"",
                                dollBal:"",
                                latestTxn:"",
                                token_name:""
                            },
                            pol:{
                                mainBal:"",
                                dollBal:"",
                                latestTxn:"",
                                token_name:""
                            },
                            btc:{
                                mainBal:"",
                                dollBal:"",
                                latestTxn:"",
                                token_name:""
                            },
                        },
                        accessToken:""
                    }
                }
            }
        }
    )
}

__SYD.subContainer = () =>{
    return __c(
        "div",
        {
            style:__sC["subContainer"]() + `background-color:${SYD_VAR.main_bg.get()}`
        },
        [
            __SYD.privAi__loader__main(),
            __SYD.login_signup_main(),
            __SYD.mainPage__topTab(),
            __SYD.mainPage(),
            __SYD.manageToken(),
            __SYD.selectToken(),
            __SYD.sendTokenPage(),
            __SYD.recieveToken(),
            __SYD.mainPage__bottomTab()
        ]
    )
}
__m(__SYD.container() , async()=>{
    manage_mediaQuery(window.innerWidth);

    //get email from local storage if stored
    const email__localStorage = localStorage.getItem("PRIVAI_user_email");

    // console.log("LOCAL STORAGE: " , email__localStorage)
    if(email__localStorage !== null)
    {
        updateState({name:"login_signup__tab_container" , prop:"renderTab" , value:1})
        updateState({name:"login_signup__tab_container" , prop:"displayEmail" , value:false});

        updateState__({name:"login_signup__tab_container" , prop:["l_info" , "email"] , value:email__localStorage})
    }
    //get email from local storage if stored
});