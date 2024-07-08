import React, { useEffect, useState } from "react";
import CostFilter from "./CostFilter";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";
import HomeHeader from "./HomeHeader";
import IncomeFilter from "./IncomeFilter";
import IncomeList from "./IncomeList";
import Modal from "./Modal";
import Tracker from "./Tracker";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [incomes, setIncomes] = useState(0);
  const [costs, setCosts] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [filteredIncomes, setFilteredIncomes] = useState([]);
  const [filteredAmount, setFilteredAmount] = useState(0);
  const [filteredPercentage, setFilteredPercentage] = useState(0);
  const [filteredAmountIncome, setFilteredAmountIncome] = useState(0);
  const [filteredPercentageIncome, setFilteredPercentageIncome] = useState(0);


  const addExpense = (amount, category) => {
    const newExpense = { cost: amount, category: category };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setCosts(costs - amount);
    setWallet(wallet - amount);
  };

  const addIncome = (amount, category) => {
    const newIncome = { income: amount, category: category };
    setIncome((prevIncome) => [...prevIncome, newIncome]);
    setIncomes(incomes + Number(amount));
    setWallet(wallet + Number(amount));
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    const filteredExpenses = expenses.filter(
      (expense) => expense.category === category
    );
    const filteredIncomes = income.filter(
      (income) => income.category === category
    );
    setFilteredExpenses(filteredExpenses);
    const filteredAmount = filteredExpenses.reduce(
      (total, expense) => total + Number(expense.cost),
      0
    );
    setFilteredIncomes(filteredIncomes);
    const filteredAmountIncome = filteredIncomes.reduce(
      (total, income) => total + Number(income.income),
      0
    );
    setFilteredAmount(filteredAmount);
    const filteredPercentage = (filteredAmount / -costs) * 100 || 0;
    setFilteredPercentage(filteredPercentage);

    setFilteredAmountIncome(filteredAmountIncome);
    const filteredPercentageIncome =
      (filteredAmountIncome / incomes) * 100 || 0;
    setFilteredPercentageIncome(filteredPercentageIncome);
  };

  return (
    <div className="flex flex-col h-screen">
      <HomeHeader incomes={incomes} costs={costs} wallet={wallet} />
      <div className="flex justify-around bg-teal-150 dark:bg-olive-750 p-3 ">
        <Tracker
          content="Incomes Tracker"
          filter={
            <Filter
              percentage={filteredPercentageIncome}
              total={filteredAmountIncome}
              filterType={
                <IncomeFilter onCategoryFilter={handleCategoryFilter} />
              }
            />
          }
        />
        <Modal title="Add Income" onAdd={addIncome} oneAdd={addExpense} />
        <Tracker
          content="Costs Tracker"
          filter={
            <Filter
              percentage={filteredPercentage}
              total={filteredAmount}
              filterType={
                <CostFilter onCategoryFilter={handleCategoryFilter} />
              }
            />
          }
        />
      </div>
      <div className="bg-amber-100 dark:bg-[#0f2923] h-full flex justify-around p-3">
        <div className="w-1/3 -translate-x-12 ">
          {income.map((incomeItem, index) => (
            <IncomeList key={index} {...incomeItem} />
          ))}
        </div>
        <div className="w-1/3 translate-x-12">
          {expenses.map((expenseItem, index) => (
            <ExpenseList key={index} {...expenseItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
