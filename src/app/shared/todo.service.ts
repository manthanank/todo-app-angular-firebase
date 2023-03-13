import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  firestoreCollection: AngularFirestoreCollection;
  
  constructor(private firebastore: AngularFirestore) {
    this.firestoreCollection = firebastore.collection('todos');
   }

   addTodo(title: string){
    this.firestoreCollection.add({
      title,
      isDone : false
    })
  }

  updateTodoStatus(id:string, newStatus:boolean){
    this.firestoreCollection.doc(id).update({isDone:newStatus});
  }

  deleteTodo(id:string){
    this.firestoreCollection.doc(id).delete();
  }

}
