import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from '../../../services/user/user-data.service';
import { User } from '../../../Models/User';
import { ActivatedRoute,  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResetService } from '../../../services/reset.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: Array<User>;
  selectedUser: User;
  querySubscription: Subscription;
  action: string;

  constructor(private userService: UserDataService,
              private route: ActivatedRoute,
              private router: Router,
              private resetService: ResetService
            ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
   this.querySubscription = this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.action = params['action'];
      if (id) {
        this.selectedUser = this.users.find( u => u.id === +id);
      } else {
        this.selectedUser = new User();
      }
    });
  }

  setUser(id: number) {
    this.router.navigate(['admin', 'users'] , {  queryParams : { id: id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'] , {  queryParams : { action: 'add'}});
    this.resetService.resetUserFormEvent.emit(this.selectedUser);
    }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
