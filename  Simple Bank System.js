class Bank {
      
      constructor(balance) {
          // Store balances; accounts are 1-indexed, so balance[0] is account 1
          this.balance = balance;
          this.n = balance.length;
      }
  
      transfer(account1, account2, money) {
          // Check account validity
          if (!this._isValid(account1) || !this._isValid(account2)) return false;
          // Check balance
          if (this.balance[account1 - 1] < money) return false;
  
          this.balance[account1 - 1] -= money;
          this.balance[account2 - 1] += money;
          return true;
      }
  
      deposit(account, money) {
          if (!this._isValid(account)) return false;
  
          this.balance[account - 1] += money;
          return true;
      }
  
      withdraw(account, money) {
          if (!this._isValid(account)) return false;
          if (this.balance[account - 1] < money) return false;
  
          this.balance[account - 1] -= money;
          return true;
      }
  
      _isValid(account) {
          return account >= 1 && account <= this.n;
      }
  }