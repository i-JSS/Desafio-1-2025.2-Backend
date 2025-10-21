const UNIT_AMOUNT = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const RETURN_TYPE = {
  "OPN": "OPEN",
  "CLD": "CLOSED",
  "INS": "INSUFFICIENT_FUNDS",
};

function checkCashRegister(price, cash, cid) {
  let dif = cash-price;
  let total = 0;

  for (let i = 0; i < cid.length; i++)
    total += cid[i][1];

  if (total === dif) {
    return { 
      status: RETURN_TYPE.CLD, 
      change: cid 
    };
  };

  const changeArr = [];
  const reversedCID = cid.slice().reverse();

  for (let [unit, amount] of reversedCID) {
    let unitValue = UNIT_AMOUNT[unit];
    let amountToReturn = 0;

    while (dif >= unitValue && amount > 0) {
      amount -= unitValue;
      amountToReturn += unitValue;
      dif -= unitValue;
      dif = Math.round(dif*100)/100;
    }

    if (amountToReturn > 0) changeArr.push([unit, amountToReturn]);   
  }

  if (dif > 0) {
    return { 
      status: RETURN_TYPE.INS, 
      change: [] 
    };
  };

  return { 
    status: RETURN_TYPE.OPN, 
    change: changeArr 
  };
}
