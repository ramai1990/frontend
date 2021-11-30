/* eslint-disable func-names */
import ApexCharts from 'apexcharts';
let options = {
  chart: {
    type: 'donut',
    height: 300
  },
  series: [130, 65, 65, 0],
  colors: ['#FFE39C', '#BC9CFF', '#6FCF97', '#919191'],
  labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  legend: {
    position: 'right',
    floating: true,
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontSize: '14px',
    offsetX: -40,
    offsetY: 10,
    markers: {
      width: 10,
      height: 10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: ['#FFBA9C', '#8BA4F9', '#66D2EA', '#3D4975'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100]
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      offsetY: -80,
      offsetX: -92,
      customScale: 0.47,
      startAngle: -180,
      endAngle: 180,
      donut: {
        size: '90%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '54px',
            fontWeight: '700',
            fontFamily: 'Montserrat, Arial, sans-serif',
            color: '#BC9CFF',
            offsetY: -20
          },
          name: {
            offsetY: 33,
            formatter: function () {
              let vote = 'голосов';
              return vote;
            }
          },
          total: {
            show: true,
            fontFamily: 'Montserrat, Arial, sans-serif',
            color: '#BC9CFF',
            showAlways: false,
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
            label: 'голосов'
          }
        }
      }
    }
  }
};

if (document.querySelector('.statistics')) {
  new ApexCharts(document.querySelector('.statistics'), options).render();
}
