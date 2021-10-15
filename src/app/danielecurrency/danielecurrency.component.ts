import { Component, OnInit } from '@angular/core';
import { DanielewalletService } from '../danielewallet.service';

@Component({
  selector: 'app-danielecurrency',
  templateUrl: './danielecurrency.component.html',
  styleUrls: ['./danielecurrency.component.css']
})
export class DanielecurrencyComponent implements OnInit {

  constructor(public danielewallet: DanielewalletService) { 

    
  }

  ngOnInit() {
  }

}