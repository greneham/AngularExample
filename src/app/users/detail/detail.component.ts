import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  name = ""
  avatar = ""
  email = ""
  company = ""
  companyUrl = ""
  companyDesc = ""

  constructor(
  	private userService: UserService, 
  	private activatedRoute:ActivatedRoute,
  	private router:Router) { 

	// watch for changes in url
  	this.activatedRoute.params.subscribe(params => {

  		// fetch users
  		userService.getUser(params.id).subscribe((response) => {

  			console.log(response);

  			this.name = `${response["data"]["first_name"]} ${response["data"]["last_name"]}`;
  			this.avatar = response["data"]["avatar"];
  			this.company = response["ad"]["company"]
  			this.companyUrl = response["ad"]["url"]
  			this.companyDesc = response["ad"]["text"]
  			this.email = response["data"]["email"];
 
  		}, (error) => {
       
        console.error(error)
        this.router.navigateByUrl('/error'); 
      });
	});
  }

  ngOnInit(): void {
  }

}
