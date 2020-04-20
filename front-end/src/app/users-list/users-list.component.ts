import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/user';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: BsModalService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();

    this.userForm = new FormGroup({
      _id: new FormControl(),
      name: new FormControl(null),
      email: new FormControl(null),
      age: new FormControl(null),
      phone: new FormControl(null)
    });

  }
  modalRef: BsModalRef;
  users: User[];

  userForm: FormGroup;

  openModal(template: TemplateRef<any>, user: User) {
    this.modalRef = this.modalService.show(template);

    this.userForm.patchValue({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      phone: user.phone
    });
  }


  onSubmit() {



    this.dataService.putUsers(this.userForm.value).subscribe(
      (res) => {
        console.log("put" + res);
        this.getUsersList();

      }
    );


    this.modalRef.hide();


  }

  getUsersList() {

    this.dataService.getUsers().subscribe(
      (res) => {
        this.users = res as User[];

      }
    );
  }


  onDelete(_id: string) {

    if (confirm('Are you sure to delete thid record?') == true) {
      this.dataService.deleteUser(_id).subscribe(
        (res) => {
          console.log(res);
          this.getUsersList();
        }
      );

    }




  }

}
