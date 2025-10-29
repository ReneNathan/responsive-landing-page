const data = {
  labels: [
    'Hp(000)',
    'Atk(000)',
    'Def(000)',
    'Spe(000)',
    'SpAtk(000)',
    'SpDef(000)',
  ],
  datasets: [{
    label: 'Base Stats',
    data: null,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
      r: {
        min: 0,
        max: 255,
        ticks: {
          display: false
        },
        pointLabels: {
          display: true
        },
        grid: {
          color: 'rgba(0,0,0,0.1)'
        },
        angleLines: {
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  }
};

const poke_base_chart = new Chart(
  document.getElementById('poke_base_chart'),
  config
);

function set_pkmn_base_stats_chart(pkmn_data) {
  hp = pkmn_data.stats[0].base_stat;
  atk = pkmn_data.stats[1].base_stat;
  def = pkmn_data.stats[2].base_stat;
  spe = pkmn_data.stats[5].base_stat;
  spatk = pkmn_data.stats[3].base_stat;
  spdef = pkmn_data.stats[4].base_stat;

  poke_base_chart.data.datasets[0].data = [hp, atk, def, spe, spatk, spdef];

  poke_base_chart.data.labels = [
    "Hp(" + String(hp).padStart(3, '0') + ")",
    "Atk(" + String(atk).padStart(3, '0') + ")",
    "Def(" + String(def).padStart(3, '0') + ")",
    "Spe(" + String(spe).padStart(3, '0') + ")",
    "SpAtk(" + String(spatk).padStart(3, '0') + ")",
    "SpDef(" + String(spdef).padStart(3, '0') + ")"
  ];

  poke_base_chart.data.datasets[0].label = "Base Stats:" + (hp + atk + def + spe + spatk + spdef);

  poke_base_chart.update();
}