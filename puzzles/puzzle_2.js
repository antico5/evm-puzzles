const { setup } = require("./setup");

const puzzleCode = [
  "36", // CALLDATASIZE
  "38", // CODESIZE
  "03", // SUB
  "56", // JUMP
  "fdfd", // REVERT REVERT
  "fdfd", // REVERT REVERT
  "5b", // JUMPDEST
].join("");

// Enter your solution here

// async function main(){
// for (let index = 0; index < 30; index++) {
//   let data ='0x'
//   for (let o = 0; o<=index; o++) {
//     data = data + '01';
//   }
//   console.log(index)
//   const solution = {
//     data,
//     value: 0,
//   };
// }
// }

const solution = {
    data: '0x01',
    value: 0,
  };
setup(puzzleCode, solution);
