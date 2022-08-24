import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AlertSeviceService } from 'src/app/services/alert-sevice.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  modalForm: FormGroup;

  constructor(
    private AlertService: AlertSeviceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      title: [''],
      confirmButton: [''],
      cancelButton: [''],
      confirmButtonLabel: [''],
      cancelButtonLabel: [''],
      message: ['', ([Validators.required])],
    })
  }

  modal(){
    this.AlertService.lauchModal(this.modalForm.value.message, 
      this.modalForm.value.confirmButton, this.modalForm.value.confirmButtonLabel, 
      this.modalForm.value.cancelButton, this.modalForm.value.cancelButtonLabel,
      this.modalForm.value.title);
  }

  onChanges(){
    this.modalForm.get('confirmButton').valueChanges.subscribe(result =>{
      if(result == 'Si'){
        this.modalForm.get("confirmButtonLabel").enable();
      }
      else{
        this.modalForm.get("confirmButtonLabel").disable();
      }
    })

    this.modalForm.get('cancelButton').valueChanges.subscribe(result =>{
      if(result == 'Si'){
        this.modalForm.get("cancelButtonLabel").enable();
      }
      else{
        this.modalForm.get("cancelButtonLabel").disable();
      }
    })
  }

}
