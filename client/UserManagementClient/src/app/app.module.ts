import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "./user.service";
import { RoleService } from "./role.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
