// crypto module
import crypto from "crypto";
import fs from 'fs';

const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

const buffer = fs.readFileSync('temp.txt');
const temp = ''

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);
console.log(Securitykey)

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
// let encryptedData = cipher.update(message, "utf-8", "hex");
const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
fs.writeFileSync('encrypted.txt', encrypted);
console.log(encrypted)

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

fs.writeFileSync('decrypted.txt', decrypted);
