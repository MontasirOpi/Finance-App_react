import {Navigate,Route,BrowserRouter as Router,Routes,} from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import WalletProvider from "./context/walletContext";
import Expenses from "./pages/expenses";
import Income from "./pages/income";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gray-200">
          <Header />
          <div className="container max-w-6xl mx-auto px-4 sm:px-8 md:px-10">
            <Summary />
            <Routes>
              <Route path="/" element={<Navigate replace to="/income" />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WalletProvider>
  );
};

export default App;
