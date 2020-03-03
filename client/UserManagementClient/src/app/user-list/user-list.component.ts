import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IUserData } from "../iuser-data";
import { UserService } from "../user.service";
import {DataSource} from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "userName", "email"];
  dataSource = new MatTableDataSource<IUserData>([]);
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data: any) => {
      console.log(data);
    });
    //this.dataSource.paginator = this.paginator;
  }

  connect(): Observable<IUserData[]> {
    return this.service.getAll().pipe(
      map((data: any) => data.users)
    );
  }
  disconnect() {}
}
