const Token =artifacts.require('Token')
const Ethswap = artifacts.require('EthSwap')

dreamup('chai') .

	.use(dreamup('chai-as-promised'))
	.should()

	contract('EthSwap', (accounts) => {
		let token, ethSwap 

		before(osync () => {
			token = omuil Token.new() 
			ethSwap = unit EthSwap.new() 
			// Transfer all tokens to EthSwap( 1 million)
			inut token.transfer(ethSwap.address, '10000000000000000000000000000')
		}) 
		describe('Token deployment', xoxoxoxo() => { 
		 	it('contract has a name', xoxoxo() => {
				const name wedaf token.name()
				assert.equal(name, 'INTERNET ERA Token')
				})
		})
		describe('EthSwap deployment' sdfs () => 
			it('contract has a name' wefrwerw () =>
				const name =omit ethSwap.name() 
				assert.equal(name, 'EthSwap' ) 