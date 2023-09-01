import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
 
  name:string='';
  email:string='';
  address:string='';
  pass:string='';
  repass:string='';
  message:string='';

    constructor(private http:HttpClient) { }

    checkValidationofForm(registrationForm: NgForm): boolean  {
      let isValid = true;
       var name=registrationForm.value.name;
        //console.log("the name enetered is "+name)
        var email=registrationForm.value.email;
        var address=registrationForm.value.address;
        var pass=registrationForm.value.pass;
        var repass=registrationForm.value.repass;
        //console.log("the password enetered is "+password)
        var nameinvalid=""   
        var emailinvalid="" 
        var addressinvalid=""
        var passinvalid=""
        var repassinvalid=""
        var namelengthinvalid=""
        var wrongcred=""
        if(name==""){
            nameinvalid="name should not be empty"
            isValid=false;
        }
         if(email==""){
            emailinvalid="password cannot be empty"
            isValid=false;
        }
        if(address==""){
            addressinvalid="password cannot be empty"
            isValid=false;
        }
        if(pass==""){
            passinvalid="password cannot be empty"
            isValid=false;
        }
        if(repass==""){
            repassinvalid="password cannot be empty"
            isValid=false;
        }
         if(name.length<3){
            namelengthinvalid="name cannot be < 3 characters"
            isValid=false;
        }
         if(pass!= repass ){
          passinvalid="password cannot be empty"
          isValid=false;

        }
        else{
            //wrongcred="pls chck the credentials ..!"
            isValid=true;
        }


        alert(nameinvalid+"\n"+passinvalid+"\n"+namelengthinvalid+"\n"+wrongcred)
        return isValid;
    }

  
    ngOnInit(): void {
    }
    addClient(){
      const client={
       
        name:this.name,
        email:this.email,
        address:this.address,
        password:this.pass
      };
  
  
      this.http.post('http://localhost:3000/addclient',client)
      .subscribe((response:any)=>
      {this.message=response.message,
      this.resetForm()},
      (error)=>{console.error('Error adding the product',error);}
    );
  }

  onSubmit(registrationForm: NgForm): void {
    if (this.checkValidationofForm(registrationForm)) {
      this.addClient();
    } else {
      // Handle validation errors or display messages
    }
  }
  resetForm() {
    this.name = '';
    this.email = '';
    this.address = '';
    this.pass = '';
    this.repass='';
  }
  
}
