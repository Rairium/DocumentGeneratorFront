import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/user/user';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService) { }

  ngOnInit(): void {
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.userService.getUsers();
        this.document.defaultView.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
