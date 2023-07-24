import { useState } from "react";

const WalletForm = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !note) return;

    const newWalletItem = {
      id: Date.now(),
      amount: Number(amount),
      note,
    };

    onAdd(newWalletItem);
    setAmount("");
    setNote("");
  };

  return (
    <form className="bg-white rounded-md shadow-md p-6 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label htmlFor="amount" className="text-gray-600 font-semibold">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-md text-lg outline-none py-2 px-3 leading-6 w-full focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="note" className="text-gray-600 font-semibold">
          Note
        </label>
        <input
          type="text"
          name="note"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border rounded-md text-lg outline-none py-2 px-3 leading-6 w-full focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="form-btn text-white py-2 px-6 rounded-lg uppercase font-semibold tracking-wider"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default WalletForm;
