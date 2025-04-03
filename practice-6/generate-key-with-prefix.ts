import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

const PREFIX = 'anza';

function generateKeyWithPrefix(prefix) {
	let attempts = 0;
	while (true) {
		attempts++;
		const keypair = Keypair.generate();
		const publicKeyBase58 = keypair.publicKey.toBase58();

		if (publicKeyBase58.toLowerCase().startsWith(prefix.toLowerCase())) {
			console.log(`Found matching key after ${attempts} attempts!`);
			console.log(`Public Key: ${publicKeyBase58}`);
			console.log(`Private Key (Base58): ${bs58.encode(keypair.secretKey)}`);
			return keypair;
		}

		if (attempts % 10000 === 0) {
			console.log(`Attempts: ${attempts}`);
		}
	}
}

generateKeyWithPrefix(PREFIX);
