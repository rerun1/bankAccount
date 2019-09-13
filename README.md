
#### Bank Account
#### _**by Suzi Rubino — September 12th, 2019**_
<br>

## Description
Webpage uses constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. The user is able to make multiple deposits into account and multiple withdrawals up to the amount in the account.

Webpage has a BankAccount constructor and prototypes that include methods for deposit and withdrawal and displaying balance.

Behavior — plain English	Input	Output
Program contains script to record an Initial deposit that establishes user Bank Account	$0 Opening Balance

Suzi Rubino
Initial Deposit: $400.00	$0 Opening Balance

Account Name: Suzi Rubino
Account Balance: $400.00
Program functionality allows user to deposit additional funds and displays new balance	Account Name: Suzi Rubino
Deposit Amount: $100.00
Account Balance: $300.00	Account Name: Suzi Rubino
Deposit Amount: $100.00
Account Balance: $400.00
Program allows user to withdraw from account and displays balance after withdrawal up to amount in Account but not over that amount.	Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $400.00	Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $300.00
Program functionality allows user to make multiple deposits of any amount.	Account Name: Suzi Rubino
Deposit Amount: $100.00
Account Balance: $200.00

Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $300.00	Account Name: Suzi Rubino
Deposit Amount: $100.00
Account Balance: $300.00

Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $400.00
Program functionality allows user to make multiple withdrawals up to but not over $0 balance	Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $400.00

Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $300.00	Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $300.00

Account Name: Suzi Rubino
Withdrawal Amount: $100.00
Account Balance: $200.00
Program user interface accepts user input to open an account and make an initial deposit	user name and user initial deposit	Account Name: userName
Initial Deposit: userInitialDeposit
Program user interface displays new account and initial deposit amount with a new balance	Account Name: userName
Initial Deposit: userInitialDeposit	Account Name: userName
Initial Deposit: userInitialDeposit
Balance: $200.00
Program user interface allows input for new deposits of any amount and displays new balance to user	Account Name: userName
Deposit Amount: $300.00
Balance: $200.00	Account Name: userName
Deposit Amount: $300.00
Balance: $500.00
Program user interface allows input for withdrawal up to the amount in account	Account Name: userName
Withdrawal Amount: $200.00
Balance: $200.00	Account Name: userName
Withdrawal Amount: $200.00
Balance: $0.00
Program user interface returns error message that withdrawals can’t be made that are larger than balance	Account Name: userName
Withdrawal Amount: $200.00
Balance: $0.00	Account Name: userName
Balance is 0, no additional withdrawals can be made



<br>

## Objectives
- [x] JavaScript business logic and user interface logic are separate.
- [x] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [x] Application implements a for loop and works as expected.
All previous objectives have been met.
- [x] Project is broken down into "plain English" specs, listed in README.
- [x] Project is in a presentable, portfolio-quality state.
- [] Practice styling with imagery

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/bankAccount/master/img/screenShot9-12-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
 There are no known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
