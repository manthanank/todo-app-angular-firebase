import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private firestore: Firestore, public auth: Auth) {
    this.getData();
  }

  signup(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch(
        (err) => {
          alert(err.message);
        }
      )
  }

  login(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch(
        (err) => {
          alert(err.message);
        }
      )
  }

  postData(value: any) {
    const db = collection(this.firestore, 'todo');
    addDoc(db, value)
      .then(
        () => {
          alert('Data Uploaded')
        }
      )
      .catch(
        (err) => {
          alert(err.message);
        }
      )
  }

  getData() {
    const dbData = collection(this.firestore, 'todo');
    getDocs(dbData)
      .then((res) => {
        console.log(res.docs.map((item) => {
          return { ...item.data(), id: item.id }
        }));
      })
  }

  updateData(id: any) {
    const dbData = doc(this.firestore, 'todo', id);
    updateDoc(dbData, {})
      .then(() => {
        alert('Updated');
        this.getData();
      })
      .catch(
        (err) => {
          alert(err.message);
        }
      )
  }

  deleteData(id: any) {
    const dbData = doc(this.firestore, 'todo', id);
    deleteDoc(dbData)
      .then(() => {
        alert('Deleted');
        this.getData();
      })
      .catch(
        (err) => {
          alert(err.message);
        }
      )
  }
}
