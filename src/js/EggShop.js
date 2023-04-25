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
const contractABI =[
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
// Get egg names, prices, and numbers from contract and update table
function updateEggTable() {
  const eggNames = ["YangJiDan", "TuJiDan", "WuJunDan", "MaoDan", "HuaiDan"];
  let eggTable = document.getElementById('eggTable').getElementsByTagName('tbody')[0];
  // Clear existing rows from table
  eggTable.innerHTML = '';
  // Add new rows to table
  for (let i = 0; i < eggNames.length; i++) {
    yhtToken.methods.calEggPrice(eggNames[i]).call()
      .then(function(price){
        yhtToken.methods.calEggNum(eggNames[i]).call()
          .then(function(num){
            let row = eggTable.insertRow(-1);
            let nameCell = row.insertCell(0);
            let priceCell = row.insertCell(1);
            let numCell = row.insertCell(2);
            nameCell.innerHTML = eggNames[i];
            priceCell.innerHTML = price;
            numCell.innerHTML = num;
          });
      });
  }
}
updateEggTable();
// // Call updateEggTable() every 5 seconds
// window.setInterval(function() {
//   updateEggTable();
// }, 5000);

// // Call updateEggTable() when page is loaded
// window.addEventListener('load', function() {
//   updateEggTable();
// });
//  getAllEggData();

//买蛋功能
function buyEgg(eggname, num) {
  yhtToken.methods._buyEgg(eggname, num).send({from: options})
    .then(function(result){
      document.getElementById('buyEggResult1').innerHTML = 'Transaction Hash: ' + result.transactionHash;
      document.getElementById('buyEggResult2').innerHTML = 'Egg bought: ' + eggname + '<br>' + 'Number of eggs: ' + num;
    })
    .catch(function(error){
      console.log(error);
      document.getElementById('buyEggResult1').innerHTML = 'Error occurred. Please check console for details.';
    });
}
// Handle buy egg form submission
document.getElementById('buyEggForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const eggname = document.getElementById('eggName').value;
  const num = document.getElementById('numOfEggs').value;
  buyEgg(eggname, num);
});

// Update egg function
function updateEgg(name, price, updatenumber) {
  yhtToken.methods._updateEgg(name, price, updatenumber).send({from: options})
    .then(function(result){
      document.getElementById('updateEggResult').innerHTML = 'Transaction Hash: ' + result.transactionHash;
      document.getElementById('updateEggResult2').innerHTML = 'Egg updated: ' + name + '<br>' + 'Price: ' + price + '<br>' + 'Number of eggs: ' + updatenumber;
    })
    .catch(function(error){
      console.log(error);
      document.getElementById('updateEggResult').innerHTML = 'Error occurred. Please check console for details.';
    });
}
// Handle update egg form submission
document.getElementById('updateEggForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('eggName3').value;
  const price = document.getElementById('eggPrice').value;
  const updatenumber = document.getElementById('numOfEggs2').value;
  updateEgg(name, price, updatenumber);
});

// Get remaining egg number function
function getRemainingEggs(eggremain) {
  yhtToken.methods.calEggNum(eggremain).call()
    .then(function(result){
      document.getElementById('eggNumResult').innerHTML = 'Remaining number of ' + eggremain + ' eggs: ' + result;
    })
    .catch(function(error){
      console.log(error);
      document.getElementById('eggNumResult').innerHTML = 'Error occurred. Please check console for details.';
    });
}

// Handle get remaining egg number form submission
document.getElementById('eggNumForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const eggremain = document.getElementById('eggName2').value;
  getRemainingEggs(eggremain);
});

// Get egg price function
function getEggPrice(eggna1) {
  yhtToken.methods.calEggPrice(eggna1).call()
    .then(function(result){
      document.getElementById('eggPriceResult').innerHTML = 'The price of ' + eggna1 + ' egg is: ' + result;
    })
    .catch(function(error){
      console.log(error);
      document.getElementById('eggPriceResult').innerHTML = 'Error occurred. Please check console for details.';
    });
}

// Handle get egg price form submission
document.getElementById('eggPriceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const eggna1 = document.getElementById('eggName1').value;
  getEggPrice(eggna1);
});


// Get all the eggs bought by a buyer
function getBuyerEggs() {
  const address = document.getElementById('buyerAddress').value;
  yhtToken.methods.getAllBuyerEgg(address).call().then(function(result) {
    const eggNames = result[0];
    const eggNumbers = result[1];
    let html = '';
    for (let i = 0; i < eggNames.length; i++) {
      html += '<li>' + eggNames[i] + ': ' + eggNumbers[i] + '</li>';
    }
    document.getElementById('buyerEggs').innerHTML = '<ul>' + html + '</ul>';
  });
}

// Handle buyer address form submission
document.getElementById('buyerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  getBuyerEggs();
});

});


