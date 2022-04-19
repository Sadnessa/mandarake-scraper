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

      let bgColor = getComputedStyle(this.$refs.chart).getPropertyValue(
        "--color-fill"
      );

      this.chartInstance = new Chart(this.$refs.chart.getContext("2d"), {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.dataset,
              backgroundColor: `rgba(${bgColor}, 0.2)`,
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
              borderColor: `rgba(${bgColor}, 1)`,
              borderWidth: 2,
            },
            point: {
              borderColor: `rgba(${bgColor}, 1)`,
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
