import * as bcrypt from 'bcrypt';

const pass = await bcrypt.hash('Senha@123', 10);

console.log(pass);