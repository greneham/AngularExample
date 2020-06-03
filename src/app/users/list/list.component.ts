import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = "users";
  baseUrl="/users"
  numPages = 0
  currentPage = 1
  users = []

  constructor(
  	private userService: UserService, 
  	private activatedRoute:ActivatedRoute,
  	private router:Router) { 

	// watch for changes in url
  	this.activatedRoute.params.subscribe(params => {

  		// fetch users
  		userService.getUsers(params.id).subscribe((response) => {

  			// populate users
  			this.users = response['data']

  			// update pagination
  			this.numPages = response['total_pages'];
    		this.currentPage = response['page'];

  		}, (error) => {
       
        console.error(error)
        this.router.navigateByUrl('/error'); 
      });
	});
  }

  ngOnInit(): void {}

  clickUser(userId): void {
  	
  	this.router.navigateByUrl('/user-details/' + userId);
  }
}
