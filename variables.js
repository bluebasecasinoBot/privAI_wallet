import { SYD_VAR, SYD_VAR_constructor } from "./sydneyDom_v3.js";

SYD_VAR.greyTextColor = new SYD_VAR_constructor({value:"rgba(255 , 255 , 255 , .5)"});
SYD_VAR.main_bg = new SYD_VAR_constructor({value:"rgb(31 , 31 , 31)"});
SYD_VAR.bg_dark = new SYD_VAR_constructor({value:" rgb(24, 24, 24) "});
SYD_VAR.main_theme_clr = new SYD_VAR_constructor({value:" #3375bb "});
SYD_VAR.main_theme_clr_mono = new SYD_VAR_constructor({value:" #2a2a2a "});
SYD_VAR.main_theme_clr_white = new SYD_VAR_constructor({value:" #ffffff "});

export const def_token_obj = {
    eth:{
        mainBal:"0.00",
        dollBal:"0.00",
        latestTxn:"0.00",
        token_name:"Ethereum"
    },
    base:{
        mainBal:"0.00",
        dollBal:"0.00",
        latestTxn:"0.00",
        token_name:"Ethereum (base)"
    },
    sol:{
        mainBal:"0.00",
        dollBal:"0.00",
        latestTxn:"0.00",
        token_name:"Solana"
    },
    pol:{
        mainBal:"0.00",
        dollBal:"0.00",
        latestTxn:"0.00",
        token_name:"Polygon"
    },
    btc:{
        mainBal:"0.00",
        dollBal:"0.00",
        latestTxn:"0.00",
        token_name:"Bitcoin"
    },
}

//API var
// SYD_VAR.getSeedPhrase_api = new SYD_VAR_constructor({value:"http://localhost:8080/get_seed_phrase"});
// SYD_VAR.generateWallet_api = new SYD_VAR_constructor({value:"http://localhost:8080/generate_wallet"});
// SYD_VAR.emailAuth_api = new SYD_VAR_constructor({value:"http://localhost:8080/email_auth?email="});
// SYD_VAR.getWalletBal_api = new SYD_VAR_constructor({value:"http://localhost:8080/get_wallet_bal"});
// SYD_VAR.get_wallet_api = new SYD_VAR_constructor({value:"http://localhost:8080/get_wallet"});//serverapi-shy-field-2876.fly.dev
//API var


//API var production
SYD_VAR.getSeedPhrase_api = new SYD_VAR_constructor({value:"https://serverapi-wispy-frog-3643.fly.dev/get_seed_phrase"});
SYD_VAR.generateWallet_api = new SYD_VAR_constructor({value:"https://serverapi-wispy-frog-3643.fly.dev/generate_wallet"});
SYD_VAR.emailAuth_api = new SYD_VAR_constructor({value:"https://serverapi-wispy-frog-3643.fly.dev/email_auth?email="});
SYD_VAR.getWalletBal_api = new SYD_VAR_constructor({value:"https://serverapi-wispy-frog-3643.fly.dev/get_wallet_bal"});
SYD_VAR.get_wallet_api = new SYD_VAR_constructor({value:"https://serverapi-wispy-frog-3643.fly.dev/get_wallet"});
//API var production
