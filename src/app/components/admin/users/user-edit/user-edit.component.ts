import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../../../Models/User';
import { UserDataService } from '../../../../services/user/user-data.service';
import { Router } from '@angular/router';
import { ResetService } from '../../../../services/reset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @Input()
  user: User;

  formUser: User;
  warningMessage: string;
  password: string;
  password1: string;
  nameIsValid = false;
  isPasswordMatch = false;
  resetUserEventSub: Subscription;
  constructor(private userdataService: UserDataService,
              private router: Router,
              private resetService: ResetService
            ) { }

  ngOnInit() {
    this.initializeUserForm();
    this.resetUserEventSub = this.resetService.resetUserFormEvent.subscribe( (user) => {
      this.user = user;
      this.initializeUserForm();
    });
  }

  initializeUserForm() {
    this.formUser = Object.assign({}, this.user);
    this.isNameValid();
  }

  onSubmitForm() {
    if (!this.formUser.id ) {
      console.log('add user' , this.formUser);
      this.userdataService.addUser(this.formUser, this.password).subscribe((user) => {
        this.router.navigate(['admin', 'users'], { queryParams: {id: user.id, action: 'view'}});
      });
    } else {
      this.userdataService.updateUser(this.formUser).subscribe((user) => {
        this.router.navigate(['admin', 'users'], { queryParams: {id: user.id, action: 'view'}});
      });
    }
  }

  addUser() {
    console.log('submit user', this.formUser);
    this.userdataService.updateUser(this.formUser).subscribe((user) => {
      this.router.navigate(['admin', 'users'], { queryParams: {id: user.id, action: 'view'}});
    });
  }

  isNameValid() {
    this.nameIsValid = this.formUser.name && this.formUser.name.trim().length > 0;
    return this.nameIsValid;
  }

  verifyPassMatch() {
    console.log('password1', this.password1);
    if (this.password === this.password1) {
      this.isPasswordMatch = true;
    }
  }

  ngOnDestroy() {
    this.resetUserEventSub.unsubscribe();
  }

}
