import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

// services
import { UserService } from 'src/app/shared/services/user.service';
import { BankAccountService } from 'src/app/pages/bank-portal/services/bank-account.service';

// interfaces
import { User, BankAccount } from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit, OnDestroy{
  userInfo: User; 
  userBankAccInfo: BankAccount;
  loginSubcription: Subscription;

  constructor(private _UserService: UserService, private _BankAccountService: BankAccountService) {
    this.loginSubcription = this._UserService.LoginObservable$.subscribe(() => {
      this.getUserInfo();
      this.getBankAccInfo();
    })
   }

  ngOnInit() {
    this.getUserInfo();
    this.getBankAccInfo();
  }

  ngOnDestroy(){
    this.loginSubcription? this.loginSubcription.unsubscribe() : null;
  }

  getUserInfo(){
    let user  = this._UserService.getUser();
    this.userInfo = user? user : null;
  }

  getBankAccInfo(){
    let bankAcc = this._BankAccountService.getUserAccBank();
    this.userBankAccInfo = bankAcc? bankAcc : null;
  }
}
