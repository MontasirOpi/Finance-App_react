import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { useWallet } from "../context/walletContext";

const Summary = () => {
  const { balance, totalIncome, totalExpense } = useWallet();

  return (
    <div className="summary py-8 md:py-12 mt-6">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between text-white">
          <div className="text-center sm:text-left">
            <p className="text-xl sm:text-lg mb-2 text-white/80">Total Balance</p>
            <h2 className="text-5xl sm:text-4xl font-semibold">
              ${balance !== 0 ? balance.toFixed(2) : "0.00"}
            </h2>
          </div>

          <div className="w-full sm:w-auto flex justify-around gap-8 md:gap-12">
            <div className="flex items-center gap-3 md:gap-5">
              <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl sm:text-lg bg-green-500">
                <BsGraphUpArrow />
              </span>
              <div className="">
                <p className="text-lg sm:text-base mb-1 text-white/80">Total Income</p>
                <h2 className="text-3xl sm:text-2xl font-semibold">
                  ${totalIncome > 0 ? totalIncome.toFixed(2) : "0.00"}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl sm:text-lg bg-red-500">
                <BsGraphDownArrow />
              </span>
              <div className="">
                <p className="text-lg sm:text-base mb-1 text-white/80">Total Expenses</p>
                <h2 className="text-3xl sm:text-2xl font-semibold">
                  ${totalExpense > 0 ? totalExpense.toFixed(2) : "0.00"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
