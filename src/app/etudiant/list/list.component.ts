import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  etudiants:any
  constructor(private etudiantService:EtudiantService){}
  ngOnInit() {
    this.etudiants=this.etudiantService.getAllEtudiants()
    
  }
}
