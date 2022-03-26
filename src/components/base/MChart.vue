<template>
  <canvas ref="chart" height="250"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, 11, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: "red",
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }
  ]
};

export default {
  data() {
    return {
      chartInstance: null,
    };
  },

  methods: {
    initChart() {
      this.chartInstance = new Chart(this.$refs.chart, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              suggestedMin: -10,
              suggestedMax: 200,
            },
          },
        },
      });
    },
  },

  mounted() {
    this.initChart()
  }
};
</script>