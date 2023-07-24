import { MdDelete } from "react-icons/md";
import { useWallet } from "../context/walletContext";

const WalletItem = ({ item, type }) => {
  const { handleDeleteIncome, handleDeleteExpense } = useWallet();

  const handleDelete = () => {
    if (type === "income") handleDeleteIncome(item.id);
    else handleDeleteExpense(item.id);
  };

  return (
    <div className="flex justify-between border-b py-3 px-4 hover:bg-gray-100 transition-colors">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.note}</h3>
        <p className={`text-sm ${type === "income" ? "text-green-600" : "text-red-600"}`}>
          {type === "income" ? "(+)" : "(-)"} ${item.amount.toFixed(2)}
        </p>
      </div>
      <button className="text-2xl text-red-600 hover:text-red-800" onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
};

export default WalletItem;
