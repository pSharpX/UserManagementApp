import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserData } from "./iuser-data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
//import from "../environments/environments";

const urlLocal: string = "http://localhost:3000";
const routeUsers: string = "/users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IUserData[]> {
    const url = urlLocal + routeUsers;
    return this.http.get<IUserData[]>(url).pipe(map((data: any) => data.data.users));
  }
}
