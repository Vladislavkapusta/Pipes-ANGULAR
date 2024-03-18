import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { initCapPipe } from '../../pipes/initPipe.pipe';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe, initCapPipe ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  public title: string = 'Pipe Aexample'
  public currentDate: Date = new Date()
}
