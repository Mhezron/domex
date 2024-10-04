import React, { useState, useEffect } from 'react';

// Helper function to fetch the flag image URL
const flagUrl = (countryCode) => `https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`;


const keys = process.env.REACT_APP_API_KEY;

const CurrencyConverter = () => {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);
  
    // Fetch exchange rates on mount
    useEffect(() => {
      const fetchRates = async () => {
        try {
          const response = await fetch(
            `https://openexchangerates.org/api/latest.json?app_id=${keys}`
          );
          const data = await response.json();
          setRates(data.rates);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Forex data:', error);
          setError(true);
          setLoading(false);
        }
      };
      fetchRates();
    }, []);
  
    // Calculate the converted amount
    useEffect(() => {
      if (rates && fromCurrency && toCurrency && amount) {
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];
        const converted = (amount / fromRate) * toRate;
        setConvertedAmount(converted.toFixed(2));
      }
    }, [rates, fromCurrency, toCurrency, amount]);
  
    if (loading) {
      return <div className="text-center text-blue-500">Loading current Forex rates...</div>;
    }
  
    if (error) {
      return <div className="text-center text-red-500">Failed to load Forex rates. Please try again later.</div>;
    }
  
    if (!rates) {
      return <div className="text-center text-gray-500">No rates data available at the moment.</div>;
    }
  
    // Currency options for the dropdowns
    const currencyOptions = Object.keys(rates);
  
    return (
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Currency Converter</h2>
  
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0 mb-6">
          <div className="flex flex-col w-full">
            <label htmlFor="from-currency" className="mb-2 text-gray-700 font-semibold">From Currency</label>
            <select
              id="from-currency"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
  
          <div className="flex flex-col w-full">
            <label htmlFor="to-currency" className="mb-2 text-gray-700 font-semibold">To Currency</label>
            <select
              id="to-currency"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
  
        <div className="mb-6">
          <label htmlFor="amount" className="block mb-2 text-gray-700 font-semibold">Amount</label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
  
        <div className="flex items-center justify-center space-x-2">
          {fromCurrency && (
            <img
              src={flagUrl(fromCurrency.slice(0, 2))} // Flag for fromCurrency
              alt={`${fromCurrency} flag`}
              className="w-10 h-10 rounded-full shadow-md"
            />
          )}
          <span className="text-3xl font-semibold text-blue-600">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </span>
          {toCurrency && (
            <img
              src={flagUrl(toCurrency.slice(0, 2))} // Flag for toCurrency
              alt={`${toCurrency} flag`}
              className="w-10 h-10 rounded-full shadow-md"
            />
          )}
        </div>
      </div>
    );
  };
  
  export default CurrencyConverter;
  
  