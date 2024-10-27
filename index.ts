import inquirer from "inquirer"

const currency: any ={
 USD:1,
 EUR:0.91,
 GBP:74.57,
 INR:74.57,
 PKR:280,
};

let user_answer = await inquirer.prompt([
    {
       name:'from',
       message:"Enter from currency",
       type:"list",
       choices:['USD','EUR','GBP','INR','PKR']
},
{
     name:"to",
     message:"Enter to currency",
     type:"list",
     choices:['USD','EUR','GBP','INR','PKR']
},
{
   name:"Amount",
   type:"number",
   message:"Enter your amount",
}
])
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let Amount = user_answer.Amount
let baseamout =fromAmount / Amount
let converterAmount =baseamout * toAmount
console.log(converterAmount);