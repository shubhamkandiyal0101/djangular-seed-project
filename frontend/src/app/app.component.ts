import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manageUser';

   constructor(private http: HttpClient) { }


  saveUser(username, email, password) {
  	console.log(username, email, password)

  	let headers = new HttpHeaders({
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Credentials': 'true',
	    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
	    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'

	});
	let options = { headers: headers };

  	// http call
  	this.http.post("http://localhost:4200/api/save_user/", {
			"name":  "Customer004",
			"email":  "customer004@email.com",
			"tel":  "0000252525"
		},options).subscribe(
			data  => {
			console.log("POST Request is successful ", data);
		},
		error  => {
			console.log("Error", error);
		}
	)
	//ends here ~ http call 

  }

}

