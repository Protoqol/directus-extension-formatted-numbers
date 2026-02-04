<template>
  <div :title="fullValue">
    {{ formattedValue }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props   : {
    value   : {
      type   : Number,
      default: null,
    },
    rounding: {
      type   : Number,
      default: 2,
    },
    lang    : {
      type   : String,
      default: "en",
    },
    prefix  : {
      type   : String,
      default: "",
    },
    suffix  : {
      type   : String,
      default: "",
    },
  },
  computed: {
    formattedValue() {
      if (this.value === null || this.value === undefined) {
        return "–";
      }

      let result = "";

      const absValue = Math.abs(this.value);
      const sign = this.value < 0 ? "-" : "";

      const abbreviations: any = {
        en: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "T"},
          {threshold: 1e9, signifier: "B"},
          {threshold: 1e6, signifier: "M"},
          {threshold: 1e3, signifier: "K"},
        ],

        fr: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "Bn"},
          {threshold: 1e9, signifier: "Md"},
          {threshold: 1e6, signifier: "M"},
          {threshold: 1e3, signifier: "k"},
        ],

        de: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "Bio."},
          {threshold: 1e9, signifier: "Mrd."},
          {threshold: 1e6, signifier: "Mio."},
          {threshold: 1e3, signifier: "Tsd."},
        ],

        es: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "B"},
          {threshold: 1e9, signifier: "mil M"},
          {threshold: 1e6, signifier: "M"},
          {threshold: 1e3, signifier: "mil"},
        ],

        ja: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "兆"},
          {threshold: 1e8, signifier: "億"},
          {threshold: 1e4, signifier: "万"},
        ],

        zh: [
          {threshold: 1e24, signifier: "Y"},
          {threshold: 1e21, signifier: "Z"},
          {threshold: 1e18, signifier: "E"},
          {threshold: 1e15, signifier: "P"},
          {threshold: 1e12, signifier: "万亿"},
          {threshold: 1e8, signifier: "亿"},
          {threshold: 1e4, signifier: "万"},
        ],
      };

      const i18nAbbreviations: Array<any> = abbreviations[this.lang];

      let chosen = i18nAbbreviations.find(a => absValue >= a.threshold);

      if (chosen) {
        let num = absValue / chosen.threshold;

        let formattedNum = "";
        formattedNum = num.toFixed(this.rounding).replace(/\.?0+$/, "");

        if (formattedNum.length > 5) {
          for (let d = this.rounding - 1; d >= 0; d--) {
            formattedNum = num.toFixed(d).replace(/\.?0+$/, "");
            if (formattedNum.length <= 5) {
              break;
            }
          }
        }

        result = sign + formattedNum + chosen.signifier;
      } else {
        result = new Intl.NumberFormat(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: this.rounding,
        }).format(this.value);
      }

      return `${this.prefix || ""}${result}${this.suffix || ""}`;
    },

    fullValue() {
      if (this.value === null || this.value === undefined) {
        return "";
      }
      return new Intl.NumberFormat().format(this.value);
    },
  },
});
</script>
