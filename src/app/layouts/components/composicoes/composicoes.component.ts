import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composicoes',
  templateUrl: './composicoes.component.html',
  styleUrls: ['./composicoes.component.scss']
})
export class ComposicoesComponent implements OnInit {

  panelOpenState = false;
  constructor() { }
  compTeamFight = [];
  compPoke = [
    {
      name: 'Composição 1',
      type: 'Poke',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Gnar' },
            { name: 'Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Lee Sin' },
            { name: 'Gragas' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Corki' },
            { name: 'Ziggs' },
            { name: 'Lux' }
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Karma' },
            { name: 'Braum' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Ezreal' },
          ]
        }
      ]
    },
    {
      name: 'Composição 2',
      type: 'Poke',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Jayce' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Nidalee' },
            { name: 'Lee Sin' }
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Lux' },
            { name: 'Zoe' },
            { name: 'Xerath' },
            { name: 'Vel\'Koz' },
            { name: 'Ziggs' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Sona' },
            { name: 'Karma' }
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Ezreal' },
            { name: 'Caitlyn' },
            { name: 'Kog\'Maw' },
          ]
        }
      ]
    },
    {
      name: 'Composição 3',
      type: 'Poke',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Rumble' },
            { name: 'Gnar' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Jarvan IV' },
            { name: 'Nidalee' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Zoe' },
            { name: 'Corki' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Thresh' },
            { name: 'Yuumi' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Ezreal' },
            { name: 'Varus' },
          ]
        }
      ]
    },
  ];
  compProtect = [
    {
      name: 'Composição 1',
      type: 'Protect',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Ornn' }
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Lee Sin' }
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Zilean' },
            { name: 'Lux' }
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Lulu' },
            { name: 'Nami' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Jinx' },
          ]
        }
      ]
    },
    {
      name: 'Composição 2',
      type: 'Protect',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Malphite' },
            { name: 'Shen' },
            { name: 'Ornn' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani' },
            { name: 'Lee Sin' }
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Karma' },
            { name: 'Orianna' },
            { name: 'Lux' }
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Janna' },
            { name: 'Lulu' }
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Kog\'Maw' },
            { name: 'Vayne' },
            { name: 'Jinx' },
          ]
        }
      ]
    },
    {
      name: 'Composição 3',
      type: 'Protect',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Cho\'Gath' },
            { name: 'Ornn' },
            { name: 'Maokai' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Lee Sin' },
            { name: 'Ivern' },
            { name: 'Sejuani' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Karma' },
            { name: 'Lux' },
            { name: 'Orianna' },
            { name: 'Galio' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Lulu' },
            { name: 'Janna' },
            { name: 'Sona' },
            { name: 'Braum' },
            { name: 'Naulitus' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Aphelios' },
            { name: 'Jinx' },
            { name: 'Xayah' },
            { name: 'Draven' },
          ]
        }
      ]
    },
  ];
  composicoesSplit = 
  [
    {
      name: 'Composição 1',
      type: 'Split',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Gnar' },
            { name: 'Jax' },
            { name: 'Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Elise' },
            { name: 'Graves' }
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Ziggs' },
            { name: 'Malzahar' },
            { name: 'Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Braum' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Lucian' },
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
          champions: [
            { name: 'Camille' },
            { name: 'Darius' },
            { name: 'Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani' },
            { name: 'Elise' }
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Ekko' },
            { name: 'Orianna' }
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Rakan' },
            { name: 'Nami' },
            { name: 'Bardo' },
            { name: 'Zyra' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Xayah' },
            { name: 'Ezreal' }
          ]
        }
      ]
    },
  ];

  ngOnInit(): void {
  }

}
