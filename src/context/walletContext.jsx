import { createContext, useContext, useReducer } from "react";

const context = createContext();

const initialState = {
  incomes: [],
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "income/add":
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case "income/delete":
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };
    case "expenses/add":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "expenses/delete":
      return {
        ...state,
        expenses: state.expenses.filter(
          (income) => income.id !== action.payload
        ),
      };
    default:
      throw new Error("Unknown Action Type");
  }
};

const calculateTotal = (arr) =>
  arr.reduce((total, current) => total + current.amount, 0);

const WalletProvider = ({ children }) => {
  const [{ incomes, expenses }, dispatch] = useReducer(reducer, initialState);

  const totalIncome = calculateTotal(incomes);
  const totalExpense = calculateTotal(expenses);
  const balance = totalIncome - totalExpense;

  const handleAddIncome = (newIncome) => {
    dispatch({
      type: "income/add",
      payload: newIncome,
    });
  };

  const handleDeleteIncome = (id) => {
    dispatch({
      type: "income/delete",
      payload: id,
    });
  };

  const handleAddExpense = (newExpense) => {
    dispatch({
      type: "expenses/add",
      payload: newExpense,
    });
  };

  const handleDeleteExpense = (id) => {
    dispatch({
      type: "expenses/delete",
      payload: id,
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <context.Provider
        value={{
          totalIncome,
          totalExpense,
          balance,
          incomes,
          expenses,
          handleAddIncome,
          handleDeleteIncome,
          handleAddExpense,
          handleDeleteExpense,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};

export const useWallet = () => {
  const wallet = useContext(context);
  return wallet;
};

export default WalletProvider;
