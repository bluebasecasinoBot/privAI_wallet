import { updateState, updateState__ } from "./state_check.js";
import { __p, SYD_VAR } from "./sydneyDom_v3.js";

export const partWalletAdx = (text) =>{
    if(text.length > 6) return `${text.slice(0 , 6)}.......${text.slice(text.length - 6 , text.length)}`;
    else return text
}

export const __bal = (bal , max = 7) =>{
    let getLength = `${bal}`.length < 2 ? 2 : `${bal}`.length;
    getLength = getLength > max ? max : getLength

    return Number(bal).toFixed(getLength)
}

export const username__check = (text) =>{
    return text.length > 5 ? true : false
}

export const email__check = (email) =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const password__check = (password) =>{
    return /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
}

export const fetchWalletBal = async () =>{
    const password = __p(["container" , "user" , "profile" , "password"]);
    const accessToken = __p(["container" , "user" , "accessToken"]);

    console.log("checking balance with balance api")
    
    const balRes = await fetch(SYD_VAR.getWalletBal_api.get(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            accessToken,
            password
        })
    });

    const balData = await balRes.json();

    if(balRes.status === 200)
    {
        updateState__({name:"container" , prop:["user" , "tokenBal_info"] , value:balData.msg.tokenBal_info})

        updateState({name:"container" , prop:"renderInitBal" , value:true});

        const timer = setTimeout(async() => {
            await fetchWalletBal();
            clearTimeout(timer)
        }, 1000 * (60));
    }else alert("a problem occured while fetching wallet balance")
}