import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
import { HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Accept': 'application/vnd.api+json',
    // 'Accept-Encoding': 'utf-8',
    'Accept-Language': 'uk',
    'Content-Type': 'application/vnd.api+json',
    'Content-Language': 'uk' })
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  API_ENDPOINT = 'http://testjob.vivasg.com';
  users: User[];
  
  constructor(private usersService: UsersService) {
    this.getData();
  }

  // Get all data
  getData() {
    this.usersService.get().subscribe((data:User[]) => {
      this.users = data['data']
    }
      );
  }

  ngOnInit() {}
  // Delete the data
  delete(id) {
    if (confirm('Точно видалити?')) {
      if( confirm)
      this.usersService.delete(id).subscribe((data) =>{
        alert('готово');
        this.getData();
      });
    }
  }
}