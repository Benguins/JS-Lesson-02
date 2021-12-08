// Think it is done. It handles every error I can think of, 0, -values, empty, strings and not enough of the monies. 
// One issue is that ever since introducing NaN it will not let the user cancel the action as cancel is not a number lol.  

  let accountObject = {
      accountName: "Name of account: Ben Beaumont",
      balance: 100,
      getBalance: function () { 
        return this.balance;
      },
      deposit: function () { 
        const howMuch = parseFloat(prompt('How much would you like to deposit'));
        if(howMuch === 0 || (isNaN(howMuch))){ 
          alert("Please enter a value or a value greater than 0");
          this.deposit();
        }else{
          accountObject.balance = accountObject.balance + howMuch;
          alert(`Your balance is now ${accountObject.balance}`)
          return accountObject.balance,  atm(); 
        }
      },
      withdrawl: function () {
        const howMuchWithdrawal = parseFloat(prompt('How much would you like to withdraw'));
        if(howMuchWithdrawal === 0 || (isNaN(howMuchWithdrawal)) || ((howMuchWithdrawal < 0))){
          alert("Please enter a value or a value greater than 0");
          this.withdrawl();
        }else if(howMuchWithdrawal > accountObject.balance){
          alert("You can't withdraw that amount.");
          this.withdrawl();
        }else{
          accountObject.balance = accountObject.balance - howMuchWithdrawal; 
          alert(`Your balance is now ${accountObject.balance}`)
          return accountObject.balance,  atm(); 
        }
       },
  };

function atm() {
    const seeBalanceString = "1.) see balance";
    const makeDepositString = "2.) make a deposit";
    const makeWithdrawalString = "3.) make a withdrawal";
    const getAccountNameString = "4.) get account name";
    const exitString = "5.) Exit";

    const choice = parseInt(prompt(`Select a choice ${seeBalanceString} ${makeDepositString} ${makeWithdrawalString} ${getAccountNameString} ${exitString}`));
    console.log(choice);

    if(choice === 1){
      alert(accountObject.getBalance());
      atm();
    }else if (choice === 2){
      alert(accountObject.deposit());
    }else if(choice === 3){
      alert(accountObject.withdrawl());
    }else if(choice === 4){
      alert(accountObject.accountName);
      atm();
    }else if(choice === 5){
      alert("Goodbye");
      window.close();
    }else{
      alert("Please pick an option");
      atm();
    }
}

atm();




