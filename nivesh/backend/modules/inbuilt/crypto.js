// The crypto module in Node.js is used for performing cryptographic operations. Cryptography is essential for ensuring security in applications, such as encrypting data, verifying integrity, and generating secure tokens.

// const crypto = require("crypto");
import crypto from "crypto"

// const password = "mysecretpassword";
// const hash = crypto.createHash("sha256").update(password).digest("hex");

// console.log(`Hashed password: ${hash}`);



//  Password Verification with HMAC
// Ensure data hasn't been tampered with during transmission.

// const crypto = require("crypto");

// const key = "secretKey";
// const data = "Sensitive data";

// // Create HMAC
// const hmac = crypto.createHmac("sha256", key).update(data).digest("hex");

// console.log(`HMAC: ${hmac}`);


// Generating Secure Tokens
// Useful for session management or API key generation

// const crypto = require("crypto");

// const generateToken = () => {
//   return crypto.randomBytes(32).toString("hex");
// };

// console.log(`Token: ${generateToken()}`);



// Digital Signatures
// Sign and verify messages or documents to ensure authenticity.


// const crypto = require("crypto");

// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2048,
// });

// const message = "This is a secret message";

// // Sign the message
// const sign = crypto.sign("sha256", Buffer.from(message), privateKey);
// console.log(`Signature: ${sign.toString("hex")}`);

// // Verify the signature
// const isVerified = crypto.verify(
//   "sha256",
//   Buffer.from(message),
//   publicKey,
//   sign
// );
// console.log(`Verified: ${isVerified}`);
