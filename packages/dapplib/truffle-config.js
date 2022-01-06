require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pulp hockey enroll off student'; 
let testAccounts = [
"0x29b9b975662cf5d49c7ebce32d4c80a4b720bf1960a6deafab7d781b89a94495",
"0xaeca3519b5c722bb41d21496aefc45b29f3d6bd37b122fac7c0b6ba8f8483ac5",
"0x3089310ad6792a3c18a201df4ad7686cf72b2a1b6b7eaf96d1d14dfd36f416da",
"0x48ca76c538f6d08019e98fbc8f99a53b6f29f97594c8835220d56bbf474bce2b",
"0x566f6f0f193318b82ee29e9cc0d6ab6e28b52a7f2558d4f1cdc504aa5435a74a",
"0x59f8e0b5c9080bb9ccde54c3b1d141a873698db61bb5c7addfebd4bb73ff3302",
"0x9e71a950c22a8a0f4b5248ed3b09677cc37fa6cf92c0b873132e5e13b5acb907",
"0xbc24493927bec850cb545454bacdeff2c3a0e04d5ba23ae4738b1eb1a9de68a3",
"0xa9ad7e1c703bfac5ee52cd1d855853ddb5e9a5265da9bcf1f2b6fbc525234497",
"0x1c77adf0ca2a3408505639e95fffdc43d4d290a671a62802932d5455926f2a54"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

