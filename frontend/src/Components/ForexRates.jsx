import React, { useEffect, useState } from 'react';

const keys = process.env.REACT_APP_API_KEY;
const flagUrl = (countryCode) => `https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`; 

const ForexRates = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch exchange rates from a Forex API
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://openexchangerates.org/api/latest.json?app_id=${keys}`
        );
        const data = await response.json();
        setRates(data.rates); // Set rates if the data fetch is successful
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Forex data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-500">Loading current Forex rates...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load Forex rates. Please try again later.</div>;
  }

  if (!rates) {
    return <div className="text-center text-gray-500">No rates data available at the moment.</div>;
  }

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4 shadow-lg">
      <div className="animate-marquee flex space-x-8 items-center">
        {/* 15 Currency Pairs with Flags */}
        {rates.EUR && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('EU')} alt="EUR flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to EUR: {rates.EUR.toFixed(2)}</span>
          </div>
        )}
        {rates.GBP && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('GB')} alt="GBP flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to GBP: {rates.GBP.toFixed(2)}</span>
          </div>
        )}
        {rates.JPY && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('JP')} alt="JPY flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to JPY: {rates.JPY.toFixed(2)}</span>
          </div>
        )}
        {rates.AUD && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('AU')} alt="AUD flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to AUD: {rates.AUD.toFixed(2)}</span>
          </div>
        )}
        {rates.CAD && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('CA')} alt="CAD flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to CAD: {rates.CAD.toFixed(2)}</span>
          </div>
        )}
        {rates.CHF && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('CH')} alt="CHF flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to CHF: {rates.CHF.toFixed(2)}</span>
          </div>
        )}
        {rates.NZD && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('NZ')} alt="NZD flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to NZD: {rates.NZD.toFixed(2)}</span>
          </div>
        )}
        {rates.ZAR && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('ZA')} alt="ZAR flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to ZAR: {rates.ZAR.toFixed(2)}</span>
          </div>
        )}
        {rates.INR && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('IN')} alt="INR flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to INR: {rates.INR.toFixed(2)}</span>
          </div>
        )}
        {rates.SGD && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('SG')} alt="SGD flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to SGD: {rates.SGD.toFixed(2)}</span>
          </div>
        )}
        {rates.HKD && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('HK')} alt="HKD flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to HKD: {rates.HKD.toFixed(2)}</span>
          </div>
        )}
        {rates.RUB && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('RU')} alt="RUB flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to RUB: {rates.RUB.toFixed(2)}</span>
          </div>
        )}
        {rates.MXN && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('MX')} alt="MXN flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to MXN: {rates.MXN.toFixed(2)}</span>
          </div>
        )}
        {rates.SEK && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('SE')} alt="SEK flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to SEK: {rates.SEK.toFixed(2)}</span>
          </div>
        )}
        {rates.NOK && (
          <div className="flex items-center space-x-2">
            <img src={flagUrl('NO')} alt="NOK flag" className="w-6 h-6 rounded-full" />
            <span className="text-blue-600 font-semibold">USD to NOK: {rates.NOK.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForexRates;