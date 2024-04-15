import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {

  @Input()
  texte: string = '';

  @Input()
  color: string = '#9fe79f';

}
