import React from "react";
import { WalletCard } from "./Cards";

const LeftSidebar = ({ isOpen, onClose }) => {
  const handleWalletSelection = () => {
    onClose();
  };
  return (
    isOpen && (
      <div className="walletbox text-white">
        <div className="title_holder">
          <h1 className="pb-8 sm:textl md:text-2xl">Connect Wallet</h1>
          <p>Connect with one of our available wallet</p>
          <p className="pb-8">providers or create a new one.</p>
        </div>
        <div className="list_holder flex flex-col items-center justify-between gap-y-6 pb-8">
          <div>
            <WalletCard
              img={require("../images/walletconnect.png")}
              text={"WALLET CONNECT"}
              onClick={handleWalletSelection}
            />
          </div>
          <div>
            <WalletCard
              img={require("../images/venly.png")}
              text={"VENLY"}
              onClick={handleWalletSelection}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default LeftSidebar;
