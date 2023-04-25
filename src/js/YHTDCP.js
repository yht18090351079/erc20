async function login(){
  if (typeof window.ethereum !== 'undefined') {
  let addr=await ethereum.request({ method: 'eth_requestAccounts' });//授权连接钱包
  console.log('用户钱包地址:',addr[0]);
  }else{
  console.log('未安装钱包插件！');
  }
}

login();
if (typeof window.ethereum !== "undefined") {
  console.log("安装插件了");
} else {
  console.log("没安装插件");
}

window.addEventListener('load', function() {
  // Replace with your contract address
  const contractAddress = '0x959DDEaB59ca495e78fe62fD50528c4081Fe76Ea';
  // Replace with your contract ABI
  
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "initialSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "eggname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "_eggBuy",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSymbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDecimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "eggname",
        "type": "string"
      },
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "_buyEgg",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "_updateEgg",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "eggna",
        "type": "string"
      }
    ],
    "name": "calEggNum",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "eggna1",
        "type": "string"
      }
    ],
    "name": "calEggPrice",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "add",
        "type": "address"
      }
    ],
    "name": "getAllBuyerEgg",
    "outputs": [
      {
        "name": "eggnames",
        "type": "string[]"
      },
      {
        "name": "eggnumbers",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
// Load Web3.js library
const web3 = new Web3(window.ethereum || 'http://localhost:8545');

// Load contract instance
const yhtToken = new web3.eth.Contract(contractABI, contractAddress);
var options;
web3.eth.getAccounts().then(function(accounts) {
  options = accounts[0];
  console.log("Current account: " + options);
});
// const options = {
//   from: '0x97B23DA906474c19A75396A1B12E078727fd6F04'
// };
// Update HTML with token details
function updateTokenDetails() {
  yhtToken.methods.getName().call().then(function(name) {
    console.log("Token name: ", name);
    document.getElementById('name').innerHTML = name;
  });
  yhtToken.methods.getSymbol().call().then(function(symbol) {
    console.log("Token symbol: ", symbol);
    document.getElementById('symbol').innerHTML = symbol;
  });
  yhtToken.methods.getDecimals().call().then(function(decimals) {
    console.log("Token decimals: ", decimals);
    document.getElementById('decimals').innerHTML = decimals;
  });
  yhtToken.methods.getTotalSupply().call().then(function(totalSupply) {
    console.log("Token total supply: ", totalSupply);
    document.getElementById('totalSupply').innerHTML = totalSupply;
  });
}
// Update HTML with token details on page load

  updateTokenDetails();

// Get token balance of an address
function getBalance(address) {
  yhtToken.methods.balanceOf(address).call().then(function(balance) {
    document.getElementById('balanceResult').innerHTML = 'Balance: ' + balance;
  });
}

// Handle balance form submission
document.getElementById('balanceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const address = document.getElementById('balanceAddress').value;
  getBalance(address);
});

// Transfer tokens to a recipient
function transferTokens(recipient, amount) {
  yhtToken.methods.transfer(recipient, amount).send({from:options}).then(function(result){
    document.getElementById('transferResult1').innerHTML = 'Transaction Hash: ' + result.transactionHash;
    document.getElementById('transferResult2').innerHTML = 'From: ' + options   +  '<br>' +'To: ' + recipient;
  });
}

// Handle transfer form submission
document.getElementById('transferForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const recipient = document.getElementById('recipientAddress').value;
  const amount = document.getElementById('transferAmount').value;
  transferTokens(recipient, amount);
});

// Approve tokens for a spender
function approveTokens(spender, amount) {
  yhtToken.methods.approve(spender, amount).send({from:options}).then(function(result){
    document.getElementById('approveResult1').innerHTML = 'Transaction Hash: ' + result.transactionHash ;
    document.getElementById('approveResult2').innerHTML = 'Spender: ' + spender + 'Amount: ' + amount;
  });
}

// Handle approve form submission
document.getElementById('approveForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const spender = document.getElementById('spenderAddress').value;
  const amount = document.getElementById('approveAmount').value;
  approveTokens(spender, amount);
});

// Check token allowance of a spender
function checkAllowance(owner, spender) {
  yhtToken.methods.allowance(owner, spender).call().then(function(allowance) {
    document.getElementById('allowanceResult').innerHTML = 'Allowance: ' + allowance;
  });
}

// Handle allowance form submission

document.getElementById('allowanceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const owner = document.getElementById('ownerAddress').value;
  const spender = document.getElementById('spenderAddress').value;
  
  yhtToken.methods.allowance(owner, spender).call().then(function(result) {
    document.getElementById('allowanceResult').innerHTML = "Allowance: " + (result/1000000000000000000).toString();
  }).catch(function(err) {
    console.log(err);
    document.getElementById('allowanceResult').innerHTML = "Error checking allowance";
  });
});

// Transfer tokens from a sender to a recipient
function transferFrom(sender, recipient, amount) {
  yhtToken.methods.transferFrom(sender, recipient, amount).send().then(function(result) {
    document.getElementById('transferFromResult').innerHTML = 'Transaction Hash: ' + result.transactionHash;
  });
}

// Handle transferFrom form submission
document.getElementById('transferFromForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const from = document.getElementById('fromAddress').value;
  const to = document.getElementById('ToAddress').value;
  const amount = document.getElementById('approveAmount').value;
  
  yhtToken.methods.transferFrom(from, to, amount)
  .send({from:options})
  .then(function(result) {
    document.getElementById('transferFromResult').innerHTML = "Transfer successful. " + 'Transaction Hash: ' + result.transactionHash;
  })
  .catch(function(err) {
    console.log(err);
    document.getElementById('transferFromResult').innerHTML = "Error transferring tokens";
  });
});

});


