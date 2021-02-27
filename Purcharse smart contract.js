 pragma solidty 0.5.1;

contract ERC20Token { 
    string public name; 
contract MyContract {
    mapping(address => uint256 ) public balances; 
    address payable wallet; 
    
    
    event Purchase(
        address indexed _buyer,
        uint256 _amount
    );
    constructor(address payable _wallet) public {
        wallet = _wallet; 
        
    }
    
    
    function buyToken() public payable {
        // buy a token 
        balances[msg.sender] += 1;
        // send ether to the wallet 
        wallet.transfer(msg.value); 
        emit Purchas(msg.sender, 1);
    }
