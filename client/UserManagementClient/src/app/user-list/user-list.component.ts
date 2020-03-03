import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";
import { IUserData } from "../iuser-data";
import { UserService } from "../user.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "userName", "email"];
  users: Observable<IUserData[]>;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getAll();
    this.service.getAll().subscribe(users => {
      console.log(users);
    });
  }
}
