import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composicoes',
  templateUrl: './composicoes.component.html',
  styleUrls: ['./composicoes.component.scss']
})
export class ComposicoesComponent implements OnInit {

  panelOpenState = false;
  constructor() { }
  composicoes = 
  [
    {
      name: 'Composição 1',
      type: 'Split',
      comp: [
        {
          name: 'Top',
          role: 'T',
          champions: [
            { name: 'GNAR' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Mid',
          role: 'M',
          champions: [
            { name: 'VIKTOR' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Jungler',
          role: 'J',
          champions: [
            { name: 'ELISE' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Sup',
          role: 'S',
          champions: [
            { name: 'NAUTILUS' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Adc',
          role: 'A',
          champions: [
            { name: 'JINX' },
            // { name: 'README.md' }
          ]
        }
      ]
    },
    {
      name: 'Composição 2',
      type: 'Split',
      comp: [
        {
          name: 'Top',
          role: 'T',
          champions: [
            { name: 'GNAR' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Mid',
          role: 'M',
          champions: [
            { name: 'VIKTOR' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Jungler',
          role: 'J',
          champions: [
            { name: 'ELISE' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Sup',
          role: 'S',
          champions: [
            { name: 'NAUTILUS' },
            // { name: 'README.md' }
          ]
        },
        {
          name: 'Adc',
          role: 'A',
          champions: [
            { name: 'JINX' },
            // { name: 'README.md' }
          ]
        }
      ]
    },
  ];

  ngOnInit(): void {
  }

}
