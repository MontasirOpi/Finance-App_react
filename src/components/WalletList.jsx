import WalletItem from "./WalletItem";

const WalletList = ({ walletItems, type }) => {
  return (
    <div className="bg-blue-100 rounded-md shadow-lg">
      {walletItems.length === 0 ? (
        <div className="flex justify-center items-center h-full p-5">
          <p className="text-lg text-gray-600 text-center font-semibold">
             Add some... {type}
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {walletItems?.map((item) => (
            <WalletItem item={item} type={type} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletList;
