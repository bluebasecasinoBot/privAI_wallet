import { email__check, fetchWalletBal, password__check, username__check } from "./functionals.js";
import { coverScreenState_login_signup_tab_container, header_login_signup_tab, login_sigup_display, paddState_login_signup_tab_container, tabState__login_signup_tab, updateState, updateState__ } from "./state_check.js";
import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.login_signup_main = () =>{
    return __c(
        "div",
        {
            style:login_sigup_display() + __sC["login_signup_main"]()
        },
        [
            __SYD.login_signup__tab_container()
        ]
    )
}

__SYD.login_signup__tab_container = () =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__tab_container"]() + coverScreenState_login_signup_tab_container() + paddState_login_signup_tab_container() + `background-color:${SYD_VAR.main_theme_clr_mono.get()};`
        },
        [
            __SYD.login_signup__tab__signup(),
            __SYD.login_signup__tab__login(),
            __SYD.login_signup__tab__seedPhrase()
        ],
        {
            createState:{
                stateName:"login_signup__tab_container",
                state:{
                    coverScreen:false,
                    renderTab:0,
                    l_info:{email:"" , password:""},
                    s_info:{username:"" , email:"" , password:""},
                    l_info_path:{email:"" , password:"" , accAuth:""},//hold process errors
                    s_info_path:{username:"" , email:"" , password:"" , emailAuth:""},//hold process errors
                    displayEmail:true
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

//General component (used for login and signup tabs)
__SYD.login_signup__header = (textValue) =>{
    return __c(
        "h1",
        {
            style:header_login_signup_tab() + __sC["login_signup__headerFont"]()
        },
        [
            `${textValue}`
        ]
    )
}

__SYD.login_signup__button = ({type = "" , text = "" , action}) =>{
    return __c(
        "button",
        {
            style:__sC["login_signup__submit_button"]()
        },
        [
            `${text}`
        ],
        {
            events:{
                onclick: async e =>{
                    if(action === "sign-up")
                    {
                        const {username , email , password} = __p(["login_signup__tab_container" , "s_info"]);

                        const res = await fetch(`${SYD_VAR.emailAuth_api.get()}${email}`);

                        const json = await res.json();

                        if(res.status === 200)
                        {
                            //set email auth error = ""
                            updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "emailAuth"] , value:""})
                            //set email auth error = ""
                            
                            if(!username__check(username)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "username"] , value:"username must be more than 5 characters"})
                            else if(username__check(username)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "username"] , value:""})


                            if(!email__check(email)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "email"] , value:"Enter a valid email"})
                            else if(email__check(email)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "email"] , value:""})


                            if(!password__check(password)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "password"] , value:"❌ Password must: 🔹 be at least 8 characters 🔹 have 1 uppercase letter 🔹 have 1 lowercase letter 🔹 include 1 number 🔹 include 1 special character (e.g. @#$%^&*)"})
                            else if(password__check(password)) updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "password"] , value:""})


                            if(username__check(username) && email__check(email) && password__check(password))
                            {
                                // temporal request
                                await fetch(SYD_VAR.getSeedPhrase_api.get())
                                .then(async data => await data.json())
                                .then(data => {
                                    updateState({name:"login_signup__tab__seedPhrase" , prop:"phraseArray" , value:data.msg.split(" ")});

                                    updateState({name:"login_signup__tab_container" , prop:"renderTab" , value:2});
                                })
                                // temporal request
                            }
                        }else updateState__({name:"login_signup__tab_container" , prop:["s_info_path" , "emailAuth"] , value:"Email is already in use"})
                    }else if(action === "sign-in")
                    {
                        updateState__({name:"login_signup__tab_container" , prop:["l_info_path" , "accAuth"] , value:""});

                        const {email , password} = __p(["login_signup__tab_container" , "l_info"]);

                        const loginRes = await fetch(SYD_VAR.get_wallet_api.get(), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                // walletsReq:Object.keys(__p(["container" , "user" , "walletsAdx"])),
                                email:__p(["login_signup__tab_container" , "l_info" , "email"]),
                                password:__p(["login_signup__tab_container" , "l_info" , "password"])
                            })
                        });

                        const loginData = await loginRes.json();

                        if(loginRes.status === 200)
                        {
                            updateState__({name:"login_signup__tab_container" , prop:["l_info_path" , "accAuth"] , value:""});

                            const state = __g("container");
                            state.user.profile = {username:loginData.msg.username , ...__p(["login_signup__tab_container" , "l_info"])};
                            state.user.walletsAdx = loginData.msg.walletsAdx;
                            state.user.accessToken = loginData.msg.jwtToken;
                            __u("container" , {type:"a" , value:state});

                            //close login_signup tab
                            updateState({name:"container" , prop:"renderMain" , value:1});
                            //close login_signup tab
                            
                            //fetch wallet balance
                            await fetchWalletBal();
                            //fetch wallet balance
                            
                        }else updateState__({name:"login_signup__tab_container" , prop:["l_info_path" , "accAuth"] , value:"Account Not Found"})
                    }
                }
            }
        }
    )
}

__SYD.login_signup__keep_signed = () =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__keep_signed"]()
        },
        [
            __c(
                "input",
                {
                    style:__sC["login_signup__keep_signed__el"](),
                    type:"checkbox",
                    id:"checkbox_keep_signed"
                }
            ),
            __c("label",{for:"checkbox_keep_signed"},[__c("p",{style:"cursor:pointer;"},["Keep me signed in"])])
        ]
    )
}

__SYD.login_signup__switch_tab = ({type = ""}) =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__switch_tab"]()
        },
        [
            type == "signup" ? __c("p" , {} , ["Already have account? " , __c("span" , {class:"fade_in_out__text" , style:"color: #3375bb ;"},["Sign In"])]) : __c("span" , {class:"fade_in_out__text" , style:"color: #3375bb ;"},[" Create Account "])
        ],
        {
            events:{
                onclick: e =>{
                    type == "signup" ? updateState({name:"login_signup__tab_container" , prop:"renderTab" , value:1}) : updateState({name:"login_signup__tab_container" , prop:"renderTab" , value:0})
                }
            }
        }
    )
}

__SYD.login_signup__process_info_tab = ({path}) =>{
    const render_el = () =>{
        const el = new Array();
        const info = __p(["login_signup__tab_container" , path],{username:"" , email:"" , password:""});
        Object.keys(info).forEach(val =>{
            info[`${val}`].length > 0 ? el.push(
                __c("li",{style:"margin-left:15px;font-size:13px;font-weight:500;color:#dc3545;"},[__c("p",{},[info[`${val}`]])])
            ) : ""
        })

        return el;
    }
    return __c(
        "ul",
        {
            style:`display:${render_el().length > 0 ? "flex" : "none"};gap:10px;flex-direction:column;padding-left:15p`
        },
        [
            ...render_el()
        ]
    )
}
//General component (used for login and signup tabs)

//seed phrase tab

__SYD.login_signup__tab__seedPhrase__container__el = ({value}) =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__tab__seedPhrase__container__el"]() + `background-color:${SYD_VAR.bg_dark.get()};`
        },
        [
            __c("p" , {style:`color:${SYD_VAR.greyTextColor.get()}`},[`${value}`])
        ]
    )
}

__SYD.login_signup__tab__seedPhrase__container__buttons_tab = () =>{
    return __c(
        "div",
        {
            style:__sC["mainPage__bottomTab"]({method:"add" , style:{border:"unset" , position:"static" , paddingTop:"10px" , paddingBottom:"10px" , boxShadow:"unset"}}) + `left:0;transform:unset;background-color:${"transparent"};`
        },
        [
            __SYD.login_signup__tab__seedPhrase__container__buttons_tab__el({value:"copy phrase" , action:"copy"}),
            __SYD.login_signup__tab__seedPhrase__container__buttons_tab__el({value:"I have copied the phrase" , action:"proceed"}),
        ]
    )
}

__SYD.login_signup__tab__seedPhrase__container__buttons_tab__el = ({value , action}) =>{
    return __c(
        "button",
        {
            style:__sC["manageToken__bottom_tab__closeBtn"]() + `background-color:${action === "copy" ? SYD_VAR.bg_dark.get() : SYD_VAR.main_theme_clr.get()};`,
            class:action === "copy" ? "" : "button_hover__sp1"
        },
        [
            __c(
                "p",
                {
                    style:__sC["manageToken__bottom_tab__closeBtn__el"]({method:"add" , style:{fontSize:"14px" , fontWeight:"300"}})
                },
                [
                    `${value}`
                ]
            )
        ],
        {
            events:{
                onclick:async e =>{
                    if(action === "copy")
                    {
                        navigator.clipboard.writeText(__p(["login_signup__tab__seedPhrase" , "phraseArray"],[""]).join(" "))
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
                    }else if(action === "proceed")
                    {
                        updateState({name:"container" , prop:"renderLoaderScreen" , value:true});

                        //send user info to server
                        await fetch(SYD_VAR.generateWallet_api.get(), {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            seedPhrase:__p(["login_signup__tab__seedPhrase" , "phraseArray"],[""]).join(" "),
                            walletsReq:Object.keys(__p(["container" , "user" , "walletsAdx"])),
                            custodial:true,
                            accountInfo:__p(["login_signup__tab_container" , "s_info"])
                        })
                        })
                        .then(response => response.json())
                        .then(async data => {

                            //render wallet data to main page
                            const state = __g("container");
                            state.user.profile = __p(["login_signup__tab_container" , "s_info"]);
                            state.user.walletsAdx = {};
                            data.msg.wallets.forEach(val =>{
                                state.user.walletsAdx[val.type] = val.walletAdx
                            })
                            state.user.accessToken = data.msg.userToken;
                            __u("container" , {type:"a" , value:state});
                            //render wallet data to main page

                            //close loader tab
                            updateState({name:"container" , prop:"renderLoaderScreen" , value:false});
                            //close loader tab


                            //close login_signup tab
                            updateState({name:"container" , prop:"renderMain" , value:1});
                            //close login_signup tab

                            await fetchWalletBal();

                            //store email to local storage
                            localStorage.setItem("PRIVAI_user_email" , `${__p(["container" , "user" , "profile" , "email"])}`);

                            console.log("item stored to local storage")
                            //store email to local storage
                        })
                        .catch(error => {
                            alert(`an Error occured ${error}`)
                        });
                        //send user info to server
                    }
                    // updateState({name:"container" , prop:"renderMainPage" , value:true});
                    // updateState({name:"container" , prop:"renderBottomTab" , value:true});
                }
            }
        }
    )
}


__SYD.login_signup__tab__seedPhrase = () =>{
    const renderPhrase = () =>{
        const el = new Array();
        const phraseArrary = __p(["login_signup__tab__seedPhrase" , "phraseArray"] , ["" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , ""]);

        for(let i = 0; i < phraseArrary.length; i++)
        {
            el.push(
                __SYD.login_signup__tab__seedPhrase__container__el({value:phraseArrary[i]})
            )
        }

        return el
    }
    return __c(
        "div",
        {
            style:tabState__login_signup_tab(2) + __sC["login_signup__tabDesign"]({method:"add" , style:{position:"relative"}}),
            class:"tab_entry"
        },
        [   
            __SYD.login_signup__header("seed phrase"),
            __c(
                "div",
                {
                    style:__sC["login_signup__tab__seedPhrase__container"]()
                },
                [
                    ...renderPhrase()
                ]
            ),
            __SYD.login_signup__tab__seedPhrase__container__buttons_tab()
        ],
        {
            createState:{
                stateName:"login_signup__tab__seedPhrase",
                state:{
                    phraseArray:["" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , ""]
                }
            }
        }
    )
}

//Sign-up tabs components
__SYD.login_signup__tab__signup = () =>{
    return __c(
        "div",
        {
            style:tabState__login_signup_tab(0) + __sC["login_signup__tabDesign"](),
            class:"tab_entry"
        },
        [   
            __SYD.login_signup__header("create account"),
            __SYD.login_signup__tab__signup__inputs(),
            __SYD.login_signup__process_info_tab({path:"s_info_path"}),
            // __SYD.login_signup__keep_signed(),
            __SYD.login_signup__button({text:"Generate seed phrase" , type:"signUp" , action:"sign-up"}),
            __SYD.login_signup__switch_tab({type:"signup"})
        ]
    )
}

__SYD.login_signup__tab__signup__inputs = () =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__tab__inputs"]()
        },
        [
            //username input
            __c(
                "input",
                {
                    style:__sC["login_signup__tab__inputs__el"](),
                    class:"login_signup__input",
                    type:"text",
                    placeholder:"Username"
                },[],{
                    events:{
                        oninput:e =>{
                            updateState__({name:"login_signup__tab_container" , prop:["s_info" , "username"] , value:e.target.value})
                        }
                    }
                }
            ),
            //username input

            //email input
            __c(
                "input",
                {
                    style:__sC["login_signup__tab__inputs__el"](),
                    class:"login_signup__input",
                    type:"email",
                    placeholder:"Email"
                },[],{
                    events:{
                        oninput:e =>{
                            updateState__({name:"login_signup__tab_container" , prop:["s_info" , "email"] , value:e.target.value})
                        }
                    }
                }
            ),
            //email input

            //password input
            __c(
                "input",
                {
                    style:__sC["login_signup__tab__inputs__el"](),
                    class:"login_signup__input",
                    type:"password",
                    placeholder:"Password"
                },[],{
                    events:{
                        oninput:e =>{
                            updateState__({name:"login_signup__tab_container" , prop:["s_info" , "password"] , value:e.target.value})
                        }
                    }
                }
            ),
            //password input
        ]
    )
}
//Sign-up tabs components.


//Login tabs components
__SYD.login_signup__tab__login = () =>{
    return __c(
        "div",
        {
            style:tabState__login_signup_tab(1) + __sC["login_signup__tabDesign"](),
            class:"tab_entry"
        },
        [   
            __SYD.login_signup__header("sign in"),
            __SYD.login_signup__tab__login__inputs(),
            __SYD.login_signup__process_info_tab({path:"l_info_path"}),
            // __SYD.login_signup__keep_signed(),
            __SYD.login_signup__button({text:"Unlock" , type:"signIn" , action:"sign-in"}),
            __SYD.login_signup__switch_tab({type:"signin"})
        ]
    )
}

__SYD.login_signup__tab__login__inputs = () =>{
    return __c(
        "div",
        {
            style:__sC["login_signup__tab__inputs"]()
        },
        [
            //email input
            __c(
                "input",
                {
                    style:__sC["login_signup__tab__inputs__el"]() + `display:${__p(["login_signup__tab_container" , "displayEmail"],true) ? "flex" : "none"};`,
                    class:"login_signup__input",
                    type:"email",
                    placeholder:"Email"
                },[],{
                    events:{
                        oninput:e =>{
                            updateState__({name:"login_signup__tab_container" , prop:["l_info" , "email"] , value:e.target.value})
                        }
                    }
                }
            ),
            //email input

            //password input
            __c(
                "input",
                {
                    style:__sC["login_signup__tab__inputs__el"](),
                    class:"login_signup__input",
                    type:"password",
                    placeholder:"Password"
                },[],{
                    events:{
                        oninput:e =>{
                            updateState__({name:"login_signup__tab_container" , prop:["l_info" , "password"] , value:e.target.value})
                        }
                    }
                }
            ),
            //password input
        ]
    )
}
//Login tabs components
