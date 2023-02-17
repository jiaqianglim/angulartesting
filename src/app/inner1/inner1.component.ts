import { outputAst } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
  styleUrls: ['./inner1.component.css']
})
export class Inner1Component {

  @Input()
  inputString!: string;


}
