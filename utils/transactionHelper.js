const { calcEthereumTransactionParams } = require('@acala-network/eth-providers')
const { ApiPromise, WsProvider } = require('@polkadot/api')
async function txParams() {
  const MANDALA_NODE_URL = 'wss://mandala-tc7-rpcnode.aca-dev.network/ws';
  const wsProvider = new WsProvider(MANDALA_NODE_URL);
  const api = await ApiPromise.create({ provider: wsProvider });

  const storageByteDeposit = (api.consts.evm.storageDepositPerByte).toString();
  const txFeePerGas = (api.consts.evm.txFeePerGas).toString();
  const blockNumber = (await api.rpc.chain.getHeader()).number.toNumber();
  // const blockNumber = 1000000;     // hard coded option
  console.log(blockNumber + 100)
  const { txGasPrice, txGasLimit } = calcEthereumTransactionParams({
    gasLimit: 1300010,
    storageLimit: 64010,
    validUntil: blockNumber + 100,
    txFeePerGas,
    storageByteDeposit,
  });

  return {
    txGasPrice: txGasPrice.toNumber(),
    txGasLimit: txGasLimit.toNumber()
  };
}

module.exports = { txParams };
