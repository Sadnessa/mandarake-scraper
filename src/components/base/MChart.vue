<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import { useThemes } from "../../store/themes";
import { mapWritableState } from "pinia";
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

  computed: {
    ...mapWritableState(useThemes, ["currentTheme"]),
  },

  methods: {
    // updateChart() {
    //   let bgColor = getComputedStyle(this.$refs.chart).getPropertyValue(
    //     "--color-fill"
    //   );

    //   this.chartInstance.options.elements = {
    //     line: {
    //       borderColor: `rgba(${bgColor}, 1)`,
    //       borderWidth: 2,
    //     },
    //     point: {
    //       borderColor: `rgba(${bgColor}, 1)`,
    //       borderWidth: 1,
    //     },
    //   };

    //   this.chartInstance.data.datasets = [
    //     {
    //       data: this.dataset,
    //       backgroundColor: `rgba(${bgColor}, 0.2)`,
    //       fill: true,
    //       cubicInterpolationMode: "monotone",
    //       tension: 2,
    //     },
    //   ];

    //   this.chartInstance.update();
    // },

    initChart() {
      if (this.chartInstance !== null) {
        this.chartInstance.destroy();
      }

      let bgColor = getComputedStyle(this.$refs.chart).getPropertyValue(
        "--color-fill"
      );

      let textColor = getComputedStyle(this.$refs.chart).getPropertyValue(
        "--color-text-secondary"
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
          animation: false,
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
              ticks: {
                color: textColor,
              },
              display: true,
            },
            y: {
              ticks: {
                color: textColor,
              },
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
    currentTheme() {
      this.initChart();
    },

    $props: {
      handler() {
        this.initChart();
      },
      deep: true,
    },
  },
};
</script>
