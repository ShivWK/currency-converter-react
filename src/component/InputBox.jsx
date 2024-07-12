import React, {useId} from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],//default empty array so loop dont give error and app dont crash if api doont give currencies
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    min={0}
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    //first we check whether onAmountChange is passed or not if true then second is returned // we have used Number function because sometime e.target.value returns string but we want number dt, return will be a number but its dt may be string so we have used Number.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    defaultValue={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //first we check whether onCurrencyChange is passed or not if true then second is returned 
                    disabled={currencyDisable}
                >
                    
                {currencyOptions.map((currency) => (
                    <option key={currency} selected={currency === selectCurrency} value={currency}>
                        {currency}
                    </option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

