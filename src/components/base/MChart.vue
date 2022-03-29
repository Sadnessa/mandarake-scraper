<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      chartInstance: null,
    };
  },

  props: {
    dataset: {
      type: Array,
    },

    labels: {
      type: Array,
    },
  },

  methods: {
    initChart() {
      if (this.chartInstance !== null) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(this.$refs.chart.getContext("2d"), {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.dataset,
              backgroundColor: "rgba(192, 132, 252, 0.2)",
              fill: true,
              cubicInterpolationMode: "monotone",
              tension: 2,
            },
          ],
        },
        options: {
          responsive: true,
          elements: {
            line: {
              borderColor: "#c084fc",
              borderWidth: 2,
            },
            point: {
              borderColor: "#c084fc",
              borderWidth: 1,
            },
          },
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

  watch: {
    $props: {
      handler() {
        this.initChart();
      },
      deep: true,
    },
  },
};
</script>
