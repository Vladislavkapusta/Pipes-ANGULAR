import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule, NgModel } from '@angular/forms';

interface UserItem{
  id: number,
  name: string,
  age: number
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  public name :string = ''
  public age :string = ''
  public users :Array<UserItem> = 
    [
      {id: 1, name: 'Alex', age: 18},
      {id: 2, name: 'Steven', age: 19},
      {id: 3, name: 'Dima', age: 17},
      {id: 4, name: 'Neena', age: 15},
    ]
    public DeleteLast() :void{
      this.users = this.users.slice(0, -1)
      console.log("Deleted Last User")
    }
    public AddUser() :void{
      this.users.push({
        id: Date.now(),
        name: this.name,
        age: +this.age
      })
    }
    public deleteUserById(id: number) :void{
      this.users = this.users.filter((user) => user.id != id)
    }
}
