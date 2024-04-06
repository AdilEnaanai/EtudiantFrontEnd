import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiants:any
  backEndURL="http://localhost:8080/ecole/etudiants"
  constructor(private http:HttpClient) { }
  getAllEtudiants(){
    
    this.http.get(this.backEndURL).subscribe(data=>{
      console.log(data)
      this.etudiants=data
    })
    return this.etudiants
  }
  addEtudiant(etudiant:any){
    this.http.post(this.backEndURL,etudiant).subscribe(data=>{
      if (data!=undefined){
        this.etudiants.push(etudiant)
      }
    })
  }
}
