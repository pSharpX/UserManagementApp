import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRoleData } from "./irole-data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const urlLocal: string = "http://localhost:3000";
const routeUsers: string = "/roles";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IRoleData[]> {
    const url = urlLocal + routeUsers;
    return this.http
      .get<IRoleData[]>(url)
      .pipe(map((data: any) => data.data.roles));
  }
}
