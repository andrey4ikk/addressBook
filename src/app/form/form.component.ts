import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user'
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User = {
    data: {
      type: 'human',
      attributes: {
        name_first: null,
        name_last: null,
        birthday: null,
        email: null
      }
    }
  };
  
  id: any;
  editing: boolean = false;
  users: User[];

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    // Edit data
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
`    // if(this.id) {
    //   this.editing = true;
    //   this.usersService.get().subscribe((data: User[]) => {
    //     this.users = data['data'];
    //     console.log(data['data']);
    //     this.user = this.users.find((user) => { return user.id == this.id });
    //   })
    // } else {
    //   this.editing = false;
    // }`
  }

  ngOnInit() {}

  saveUser() {
    // if (this.editing) {
      this.usersService.save(this.user).subscribe((data) => {
        alert('gjvtyznm');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('сохранить');
      });
    // } else {
    //   this.usersService.save(this.user).subscribe((data) => {
    //     alert('gjvtyznm');
    //     console.log(data);
    //   },(error) => {
    //     console.log(error);
    //     alert('сохранить');
    //   })
    // }
  }
}
