import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formEtudiant=this.fb.group({
    id:[],
    nom:[],
    age:[]
  })
  constructor(private activeModal:NgbActiveModal,private fb:FormBuilder,private etudiantService:EtudiantService){}
  ajouterEtudiant(){
    this.etudiantService.addEtudiant(this.formEtudiant.value)
    this.activeModal.close()
  }
}
