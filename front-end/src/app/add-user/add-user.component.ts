import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  userForm: FormGroup;

  ngOnInit(): void {

    this.userForm = new FormGroup({
      _id: new FormControl(),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });
  }


  onSubmit() {

    this.dataService.postUsers(this.userForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/users']);
      }
    );

    this.userForm.reset();
  }


}
