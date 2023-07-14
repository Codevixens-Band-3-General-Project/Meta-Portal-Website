import React from "react";

const WalletSidebar = () => {


  return (
<div classname="walletbox">
  <div classname="title_holder">
    <h3>Connect Wallet</h3>
    <p>
      Connect with one of our available wallet providers or create a new
      one.
    </p>
  </div>
  <div classname="list_holder">
    <WalletSidebar
    img={require("../images/metamask.png")}
    text={"METAMASK"}/>

    <WalletSidebar
    img={require("../images/coinbase.png")}
    text={"COINBASE"}/>

    <WalletSidebar
    img={require("../images/walletconnect.png")}
    text={"WALLET CONNECT"}/>

    <WalletSidebar
    img={require("../images/venly.png")}
    text={"VENLY"}/>
  </div>
</div>

     
  );
};

export default WalletSidebar;