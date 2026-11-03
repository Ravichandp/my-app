import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todolist.scss',
  templateUrl: './todolist.html',
})
export class Todo {

  isShowEdit: boolean = false;

  newtodo = signal('');
    edittodo = signal('');

  todos = signal<{ newTask: string; isCompleted: boolean,isEditing: boolean }[]>([]);

  addNewTask() {
    const task = this.newtodo().trim();
    if (task === '') {
      return
    }

    this.todos.update((todo) => [...todo, { newTask: task, isCompleted: false, isEditing:false }])
    this.newtodo.set('');
  }

  todoIsCompleted(index: number) {
    this.todos.update(list =>
      list.map((item, i) => i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    )
  }

  deleteTask(index: number) {
    this.todos.update(list =>
      list.filter((item, i) => i !== index)
    )
  }


   editNewTask() {
    const task = this.edittodo().trim();
    if (task === '') {
      return
    }

    this.todos.update((todo) => [...todo, { newTask: task, isCompleted: false,isEditing:false }])
    this.edittodo.set('');
  }

   editTask(index : number) {

       this.todos.update(list =>
      list.map((item, i) => i === index ? { ...item, newTask: this.edittodo() } : item
      )
    )

     this.todos.update(list =>
      list.map((item, i) => i === index ? { ...item, isEditing: false} : item
      )
    )
    this.isShowEdit = false
  }


  showEdit(index:number){
   this.todos.update(list =>
      list.map((item, i) => i === index ? { ...item, isEditing: true } : item
      )
    )
    this.isShowEdit = true
  }

}
