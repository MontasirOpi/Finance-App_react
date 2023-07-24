import WalletForm from "../components/WalletForm";
import WalletList from "../components/WalletList";
import { useWallet } from "../context/walletContext";

const Expenses = () => {
  const { handleAddExpense, expenses } = useWallet();

  return (
    <div className="container max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-8">
      <h1 className="page-title text-4xl sm:text-5xl text-center font-semibold text-gray-800 mb-8">
        Expenses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-md shadow-md p-6">
          {expenses.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-lg text-gray-600 text-center font-semibold">
                Nothing to show. Add some expenses
              </p>
            </div>
          ) : (
            <WalletList type="expenses" walletItems={expenses} />
          )}
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <WalletForm onAdd={handleAddExpense} />
        </div>
      </div>
    </div>
  );
};

export default Expenses;

