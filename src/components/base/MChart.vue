<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, 11, 180, 120, 125, 105, 200];
const data = {
  labels: labels,
  datasets: [
    {
      data: datapoints,
      borderColor: "#c084fc",
      backgroundColor: "rgba(192, 132, 252, 0.2)",
      fill: true,
      cubicInterpolationMode: "monotone",
      tension: 2,
    },
  ],
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
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
            },
          },
        },
      });
    },
  },

  mounted() {
    this.initChart();
  },
};
</script>
