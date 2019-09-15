import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'manageUser';
    }
    AppComponent.prototype.saveUser = function (username, email, password) {
        console.log(username, email, password);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'false',
            'Access-Control-Allow-Methods': 'POST',
        });
        var options = { headers: headers };
        // http call
        this.http.post("http://localhost:8000/save_user/", {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
        }, options).subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
        //ends here ~ http call 
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map