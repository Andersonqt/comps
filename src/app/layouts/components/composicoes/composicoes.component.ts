import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composicoes',
  templateUrl: './composicoes.component.html',
  styleUrls: ['./composicoes.component.scss']
})
export class ComposicoesComponent implements OnInit {

  panelOpenState = false;
  constructor() { }
  compTeamFight = [
    {
      name: 'Composição 1',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Ornn' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Zac / Vi / Xin Zhao' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Leona / Braum' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Jinx / Lucian' },
          ]
        }
      ]
    },
    {
      name: 'Composição 2',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Malphite' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Vi / Xin Zhao / Volibear' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Braum / Zyra / Leona' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Miss Fortune' },
          ]
        }
      ]
    },
    {
      name: 'Composição 3',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Ornn' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Amumu / Vi / Sejuani / Zac / Xin Zhao' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Malphite' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Miss Fortune' },
          ]
        }
      ]
    },
    {
      name: 'Composição 4',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Malphite' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani / Zac' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Vel\'Koz' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Nautilus / Leona / Braum' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Jinx / Kalista' },
          ]
        }
      ]
    },
    {
      name: 'Composição 5',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Kennen / Rumble / Malphite' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Amumu / Sejuani / Jarvan IV' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Vel\'Koz / Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Brand / Zyra / Bardo / Braum / Nautilus' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Jinx / Draven / Miss Fortune' },
          ]
        }
      ]
    },
    {
      name: 'Composição 6',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Fiora' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Olaf' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Anivia' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Blitzcrank' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Kalista' },
          ]
        }
      ]
    },
    {
      name: 'Composição 7',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Sett / Fiora' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Trundle / Sejuani' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Azir / Cassiopeia' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Rakan / Nautilus' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Xayah / Kai\'Sa' },
          ]
        }
      ]
    },
    {
      name: 'Composição 8',
      type: 'TeamFight',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Sett / Ornn' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani / Skarner' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Sylas / Irelia' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Braum / Tahm Kench' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Jinx / Vayne' },
          ]
        }
      ]
    },
  ];
  compPoke = [
    {
      name: 'Composição 1',
      type: 'Poke',
      comp: [
        {
          name: 'Top',
          champions: [
            { name: 'Gnar / Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Lee Sin / Gragas' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Corki / Ziggs / Lux' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Karma / Braum' },
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
            { name: 'Nidalee / Lee Sin' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Lux / Zoe / Xerath / Vel\'Koz / Ziggs' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Sona / Karma' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Ezreal / Caitlyn / Kog\'Maw' },
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
            { name: 'Rumble / Gnar' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Jarvan IV / Nidalee' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Zoe / Corki' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Thresh / Yuumi' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Ezreal / Varus' },
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
            { name: 'Zilean / Lux' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Lulu / Nami' },
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
            { name: 'Malphite / Shen / Ornn' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani / Lee Sin' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Karma / Orianna / Lux' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Janna / Lulu' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Kog\'Maw / Vayne / Jinx' },
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
            { name: 'Cho\'Gath / Ornn / Maokai' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Lee Sin / Ivern / Sejuani' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Karma / Lux / Orianna / Galio' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Lulu / Janna / Sona / Braum / Naulitus' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Aphelios / Jinx / Xayah / Draven' },
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
            { name: 'Gnar / Jax / Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Elise / Graves' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Ziggs / Malzahar / Orianna' },
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
            { name: 'Camille / Darius / Urgot' },
          ]
        },
        {
          name: 'Jungler',
          champions: [
            { name: 'Sejuani / Elise' },
          ]
        },
        {
          name: 'Mid',
          champions: [
            { name: 'Ekko / Orianna' },
          ]
        },
        {
          name: 'Sup',
          champions: [
            { name: 'Rakan / Nami / Bardo / Zyra' },
          ]
        },
        {
          name: 'Adc',
          champions: [
            { name: 'Xayah / Ezreal' },
          ]
        }
      ]
    },
  ];

  ngOnInit(): void {
  }

}
