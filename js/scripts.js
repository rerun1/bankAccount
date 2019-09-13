// Business logic for Bank Object
function OpeningBalance(name,initialDeposit){
  this.name="",
  this.initialDeposit = 0
}
OpeningBalance.prototype.addOpeningBalanceInfo = function(name,initialDeposit){
  this.name=name,
  this.initialDeposit=initialDeposit;
}
function BankAccount(openingBalance){
  this.newAccount = [],
  this.deposits=[],
  this.withdrawals =[],
  this.currentBalance = 0;
}
BankAccount.prototype.addNewAccount = function(openingBalance){
  var currentBalance = 0;
  this.newAccount.push(openingBalance);
  this.deposits.push(this.newAccount[0].initialDeposit);
  this.currentBalance = this.newAccount[0].initialDeposit;
}
BankAccount.prototype.depositFunds = function(depositAmount){
  var currentBalance = 0;
  this.deposits.push(depositAmount);
  this.deposits.forEach(function(deposit){
    currentBalance += deposit;
  });
  this.withdrawals.forEach(function(withdrawal){
    currentBalance -= withdrawal;
  });
  this.currentBalance = currentBalance;
}
BankAccount.prototype.withdrawFunds = function(withdrawal){
  if (this.currentBalance <= 0){
    alert("balance is 0, no withdrawals possible");
  } else if (withdrawal > this.currentBalance) {
    alert("withdrawal exceeds amount in account");
  }
  this.withdrawals.push(withdrawal);
  this.currentBalance = this.currentBalance - withdrawal;
}
// User interface logic
var openingBalance = new OpeningBalance();
var bankAccount = new BankAccount();

function userOpeningBalance(bankAccountToDisplay){
  var currentUserBalance = bankAccountToDisplay.currentBalance;
  var userName = bankAccountToDisplay.newAccount[0].name;
  $("span.showUserName").html(userName + "'s ");
  $("span.showBalance").html(currentUserBalance);
  $("div#openAccount").hide();
  $("div#currentBalance").show();
  $("div#useAccount").show();
};
function updateBalance(bankAccountToDisplay){
  var currentUserBalance = bankAccountToDisplay.currentBalance;
  var userName = bankAccountToDisplay.newAccount[0].name;
  $("span.showUserName").html(userName + "'s ");
  $("span.showBalance").html(currentUserBalance);
};
function resetForm(){
  $("input#userName").val("");
  $("input#initialDeposit").val("");
  $("input#userDeposit").val("");
  $("input#userWithdrawal").val("");
}
$(document).ready(function(){

  $("form#bankForm").submit(function(event){

    var inputtedUserName = $("input#userName").val();
    var inputtedInitialDeposit = parseInt($("input#initialDeposit").val());

    if (inputtedUserName&&inputtedInitialDeposit) {
      openingBalance.addOpeningBalanceInfo(inputtedUserName,inputtedInitialDeposit);
      bankAccount.addNewAccount(openingBalance);
    }

    console.log(bankAccount);

    userOpeningBalance(bankAccount);

    var inputtedUserDeposit = parseInt($("input#userDeposit").val());
    var inputtedUserWithdrawal = parseInt($("input#userWithdrawal").val());

    if (inputtedUserDeposit) {
    bankAccount.depositFunds(inputtedUserDeposit);
    } else if (inputtedUserWithdrawal) {
      bankAccount.withdrawFunds(inputtedUserWithdrawal);
    }

    updateBalance(bankAccount);

    console.log(bankAccount);

    resetForm();
    event.preventDefault();
  });
});
