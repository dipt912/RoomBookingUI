import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../Models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../../../services/user/user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor( private route: ActivatedRoute,
                private router: Router,
                private userService: UserDataService
              ) { }

  ngOnInit() {
  }

  editUser() {
    console.log('editUser' , this.user);
    this.router.navigate(['admin', 'users'], { queryParams : { action: 'edit', id: this.user.id }});
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(( ) => {
      this.router.navigate(['admin', 'users']);
    });
  }

  resetPassword() {
    console.log('Reset password');
    this.userService.resetUserPass().subscribe();
  }

}
