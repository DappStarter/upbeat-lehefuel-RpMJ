require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift renew noble arrow grid private force gasp'; 
let testAccounts = [
"0x21fbb9b4430bba3ef33553b1bb620a5067487432c3b2de991309a4eb85af7e73",
"0xf749c4351a2f60744fed2801bf066a000004edfe121a513892fb6ff468a4d3b6",
"0x0e61a96be50c0dc1b8d1361b52dd103adce25f1e4a92bf798d62915550fdd45e",
"0x920a264c0623364e4607a5070b0a1e94a3f44ce2448ac2369fa2dd7ef33eedf4",
"0x03b9df8efe84f92dc459836426d6c5dc1ec3cfe7745fb8d8c390d3ec33cc50d8",
"0x8d3dcdd4346f167d1a40f4fc55567e63aac232611ae7f1b7097566ca67754a95",
"0x6d8fec7a900068f6c112b37cd1014f00b3d7a98c0a565641f239cb831859eff6",
"0x36a52dec1783eb4405e916238878c8d8ef5ae47c57a43175cbd31c11e89bdd21",
"0xf84982d780d745c3a2e6516c5cb7c5387654f17ff6b410aac9a2b9d6cdd8743f",
"0x6adfffd0083fe47306edd4f9e229d45baad2ff1efe98c34aa24f1089eed24e54"
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

