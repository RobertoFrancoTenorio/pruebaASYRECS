import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertSeviceService {

  constructor() { }

  async lauchModal(message: string, confirmButton: string, confirmButtonLabel: string, 
    cancelButton: string, cancelButtonLabel: string,
    title ?: string){
    let confirmButtonAux;
    let cancelButtonAux;
    if(confirmButton=='Si'){
      confirmButtonAux = true
    }
    else{
      confirmButtonAux = false
    }

    if(cancelButton=='Si'){
      cancelButtonAux = true
    }
    else{
      cancelButtonAux = false
    }
    let resultado = await Swal.fire({
      title: title,
      icon: 'info',
      text: message,
      showConfirmButton: confirmButtonAux,
      showCancelButton: cancelButtonAux,
      confirmButtonText: '' + confirmButtonLabel,
      cancelButtonText: cancelButtonLabel,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })/* .then(result =>{
      if(result.isConfirmed){
        return true;
      }
      else{
        return false;
      }
    }) */
  }
}
