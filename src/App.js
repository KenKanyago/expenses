
import './App.css';
import {Header} from  './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransactions';

function App() {
  return (
    <div>
     <Header />
     <Balance />
     <IncomeExpense />
     <TransactionList /> 
     <AddTransactions />
         
    </div>
  );
}

export default App;
