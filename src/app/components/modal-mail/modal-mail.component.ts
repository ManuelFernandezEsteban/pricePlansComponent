import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
  styleUrls: ['./modal-mail.component.css']
})
export class ModalMailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cerrarModalOK(){}
  cerrarModalCancelar(){}
}
