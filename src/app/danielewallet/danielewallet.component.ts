import { Component, OnInit } from '@angular/core';
import { DanielewalletService } from '../danielewallet.service';

@Component({
  selector: 'app-danielewallet',
  templateUrl: './danielewallet.component.html',
  styleUrls: ['./danielewallet.component.css'],
})
export class DanielewalletComponent implements OnInit {
  constructor(public danielewallet: DanielewalletService) {}

  ngOnInit() {}
}
