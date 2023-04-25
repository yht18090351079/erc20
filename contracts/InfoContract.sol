pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract InfoContract is IERC20 {
    string public constant name = "YHT Digital Collectible Points";//代币的名称
    string public constant symbol = "YHTDCP";//代币的符号
    uint8 public constant decimals = 18;//代币小数
    uint256 public  constant initialSupply = 1000000 * (10 ** uint256(decimals));//代币小数
    mapping (address => uint256) public  balances;//每个地址拥有的代币余额
    mapping (address => mapping (address => uint256)) private allowed;//每个地址授权给其他地址的代币数量

    address constant OwnerEgg = 0x6B1BB5f44496fAB190a1E51CB65C78031BCDBB05;

    mapping(string => uint) EggNN;//鸡蛋品种 数量
    mapping(string => uint) EggNP;//鸡蛋品种 价格

    mapping(address => string) BuyerName;//购买鸡蛋品种
    mapping(address => mapping(string => uint)) BuyerEgg;//购买鸡蛋品种和购买数量

    event _eggBuy(address buyer,string eggname,uint num);//购买者购买的名字和数量

    string YangJiDan="YangJiDan";
    string TuJiDan = "TuJiDan";
    string WuJunDan = "WuJunDan";
    string MaoDan = "MaoDan";
    string HuaiDan = "HuaiDan";

    string[] EggNames = [YangJiDan, TuJiDan, WuJunDan, MaoDan, HuaiDan];


    constructor() public {
        balances[msg.sender] = initialSupply;
        emit Transfer(address(0), msg.sender, initialSupply);

        EggNN[YangJiDan]=100;
        EggNN[TuJiDan]=100;
        EggNN[WuJunDan]=100;
        EggNN[MaoDan]=100;
        EggNN[HuaiDan]=100;

        EggNP[YangJiDan]=10;
        EggNP[TuJiDan]=20;
        EggNP[WuJunDan]=30;
        EggNP[MaoDan]=15;
        EggNP[HuaiDan]=12;
    }
    function getName() public view returns (string memory) {
        return name;
    }

    function getSymbol() public view returns (string memory) {
        return symbol;
    }

    function getDecimals() public view returns (uint8) {
        return decimals;
    }

    function getTotalSupply() public view returns (uint256) {
        return initialSupply;
    }
//每个地址授权给其他地址的代币数量
    function totalSupply() public view returns (uint256) {
        return initialSupply;
    }
//每个地址授权给其他地址的代币数量
    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
//将代币从合约调用者的地址发送到另一个地址
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value && _value > 0);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
//当用户将代币授权给交易所时，交易所就可以在用户的授权范围内进行代币转移操作
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
//查询某个地址（通常是持有者）授权给其他地址（通常是代币交易所）可以转移的代币数量
    function allowance(address _owner, address _spender) public view returns (uint256) {
        return allowed[_owner][_spender];
    }
//transferFrom 函数是由被授权转移代币的地址 spender 发起的，而不是代币持有者 owner。
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0);
        balances[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

     //买蛋功能
    function _buyEgg(string memory eggname,uint num) public  returns (bool){
        require(EggNN[eggname]>=num);
        require(balances[msg.sender]>=(num*EggNP[eggname]));
        transfer(OwnerEgg,num*EggNP[eggname]);
        EggNN[eggname]=EggNN[eggname]-num;
        BuyerName[msg.sender]=eggname;
        BuyerEgg[msg.sender][eggname] += num;
        emit _eggBuy(msg.sender,eggname,num);
        return true;
    }

    function _updateEgg(string memory name,uint price,uint number) public  returns (bool){
        require(msg.sender==OwnerEgg);
        EggNP[name]=price;
        EggNN[name]=number;
        return true;
    }

    //查询剩余
    function calEggNum(string memory eggna) public view returns (uint){
        return EggNN[eggna];
    }
    //查询价格
    function calEggPrice(string memory eggna1) public view returns (uint){
        return EggNP[eggna1];
    }
    

    //查询该地址购买的所有鸡蛋
    function getAllBuyerEgg(address add) public view returns (string[] memory eggnames, uint[] memory eggnumbers) {
        string memory buyerEggname = BuyerName[add];
        uint eggCount = 0;
        for (uint i = 0; i < EggNames.length; i++) {
            if (BuyerEgg[add][EggNames[i]] > 0) {
                eggCount++;
            }
        }
        eggnames = new string[](eggCount);
        eggnumbers = new uint[](eggCount);
        uint index = 0;
        for (uint i = 0; i < EggNames.length; i++) {
            if (BuyerEgg[add][EggNames[i]] > 0) {
                eggnames[index] = EggNames[i];
                eggnumbers[index] = BuyerEgg[add][EggNames[i]];
                index++;
            }
        }
        return (eggnames, eggnumbers);
    }

}




