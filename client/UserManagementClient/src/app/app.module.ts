import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    MatTableModule,
    //MatPaginator,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
