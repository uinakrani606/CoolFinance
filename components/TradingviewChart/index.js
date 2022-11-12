import React, { useState, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import styled from "styled-components";
import { usePrevious } from "react-use";
import { Play } from "react-feather";
import Numeral from "numeral";

dayjs.extend(utc);

export const CHART_TYPES = {
  BAR: "BAR",
  AREA: "AREA",
};

const Wrapper = styled.div`
  position: relative;
`;

// constant height for charts
const HEIGHT = 265;
const toK = (num) => {
  return Numeral(num).format("0.[00]a");
};
var priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const formattedNum = (number, usd = true, acceptNegatives = true) => {
  if (isNaN(number) || number === "$" || number === undefined) {
    return usd ? "0" : 0;
  }
  let num = parseFloat(number);
  const isNegative = num < 0;
  num = Math.abs(num);

  const usdMark = isNegative ? "$-" : "$";
  const normalMark = isNegative ? "-" : "";

  if (num > 100000000) {
    return (usd ? usdMark : normalMark) + toK(num.toFixed(0), true);
  }


  if (num === 0) {
    if (usd) {
      return "$0";
    }
    return 0;
  }

  if (num < 0.0001 && num > 0) {
    return usd ? "< $0.0001" : "< $0.0001";
  }

  if (num > 1000) {
    return usd
      ? usdMark + Number(parseFloat(num).toFixed(0)).toLocaleString()
      : normalMark + Number(parseFloat(num).toFixed(0)).toLocaleString();
  }

  if (usd) {
    if (num < 0.1) {
      return usdMark + Number(parseFloat(num).toFixed(4));
    } else {
      let usdString = priceFormatter.format(num);
      return usdMark + usdString.slice(1, usdString.length);
    }
  }
  console.log(Number(parseFloat(num).toFixed(5)));
  return Number(parseFloat(num).toFixed(5));
};

const TradingViewChart = ({
  type = CHART_TYPES.BAR,
  data,
  base,
  baseChange,
  field,
  title,
  width,
  useWeekly = false,
}) => {
  // reference for DOM element to create with chart
  const ref = useRef();

  // pointer to the chart object
  const [chartCreated, setChartCreated] = useState(false);
  const dataPrev = usePrevious(data);

  useEffect(() => {
    if (data !== dataPrev && chartCreated && type === CHART_TYPES.BAR) {
      // remove the tooltip element
      let tooltip = document.getElementById("tooltip-id" + type);
      let node = document.getElementById("test-id" + type);
      node.removeChild(tooltip);
      chartCreated.resize(0, 0);
      setChartCreated();
    }
  }, [chartCreated, data, dataPrev, type]);

  // parese the data and format for tardingview consumption
  const formattedData = data?.map((entry) => {
    return {
      time: dayjs.unix(entry.date).utc().format("YYYY-MM-DD"),
      value: parseFloat(entry[field]),
    };
  });

  // adjust the scale based on the type of chart
  const topScale = type === CHART_TYPES.AREA ? 0.32 : 0.2;

  const [darkMode] = "white";
  const textColor = darkMode ? "white" : "black";
  const previousTheme = usePrevious(darkMode);

  // reset the chart if them switches
  useEffect(() => {
    if (chartCreated && previousTheme !== darkMode) {
      // remove the tooltip element
      let tooltip = document.getElementById("tooltip-id" + type);
      let node = document.getElementById("test-id" + type);
      node.removeChild(tooltip);
      chartCreated.resize(0, 0);
      setChartCreated();
    }
  }, [chartCreated, darkMode, previousTheme, type]);

  // if no chart created yet, create one with options and add to DOM manually
  useEffect(() => {
    if (!chartCreated && formattedData) {
      var chart = createChart(ref.current, {
        rightPriceScale: {
          scaleMargins: {
            top: 0.2,
            bottom: 0.2,
          },
          borderVisible: false,
        },
        timeScale: {
          borderVisible: false,
        },
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#333",
        },
        grid: {
          horzLines: {
            color: "#ffffff",
          },
          vertLines: {
            color: "#ffffff",
          },
        },
        crosshair: {
          vertLine: {
            labelVisible: true,
          },
        },
      });

      var series = chart.addAreaSeries({
        topColor: "rgba(224, 224, 224, 100%)",
        bottomColor: "rgba(224, 224, 224, 0)",
        lineColor: "#00215F",
        lineWidth: 2,
      });

      series.setData([
        {
          time: "2018-03-28",
          value: 154,
        },
        {
          time: "2018-03-29",
          value: 154.2,
        },
        {
          time: "2018-03-30",
          value: 155.60001,
        },
        {
          time: "2018-04-02",
          value: 156.25,
        },
        {
          time: "2018-04-03",
          value: 156.25,
        },
        {
          time: "2018-04-04",
          value: 4156.05,
        },
        {
          time: "2018-04-05",
          value: 158.05,
        },
        {
          time: "2018-04-06",
          value: 157.3,
        },
        {
          time: "2018-04-09",
          value: 144,
        },
        {
          time: "2018-04-10",
          value: 144.8,
        },
        {
          time: "2018-04-11",
          value: 143.5,
        },
        {
          time: "2018-04-12",
          value: 147.05,
        },
        {
          time: "2018-04-13",
          value: 144.85001,
        },
        {
          time: "2018-04-16",
          value: 145.39999,
        },
        {
          time: "2018-04-17",
          value: 147.3,
        },
        {
          time: "2018-04-18",
          value: 153.55,
        },
        {
          time: "2018-04-19",
          value: 150.95,
        },
        {
          time: "2018-04-20",
          value: 149.39999,
        },
        {
          time: "2018-04-23",
          value: 148.5,
        },
        {
          time: "2018-04-24",
          value: 146.60001,
        },
        {
          time: "2018-04-25",
          value: 144.45,
        },
        {
          time: "2018-04-26",
          value: 145.60001,
        },
        {
          time: "2018-04-27",
          value: 144.3,
        },
        {
          time: "2018-04-30",
          value: 144,
        },
        {
          time: "2018-05-02",
          value: 147.3,
        },
        {
          time: "2018-05-03",
          value: 144.2,
        },
        {
          time: "2018-05-04",
          value: 141.64999,
        },
        {
          time: "2018-05-07",
          value: 141.89999,
        },
        {
          time: "2018-05-08",
          value: 140.39999,
        },
        {
          time: "2018-05-10",
          value: 139.8,
        },
        {
          time: "2018-05-11",
          value: 137.5,
        },
        {
          time: "2018-05-14",
          value: 136.14999,
        },
        {
          time: "2018-05-15",
          value: 138,
        },
        {
          time: "2018-05-16",
          value: 137.95,
        },
        {
          time: "2018-05-17",
          value: 137.95,
        },
        {
          time: "2018-05-18",
          value: 136.75,
        },
        {
          time: "2018-05-21",
          value: 136.2,
        },
        {
          time: "2018-05-22",
          value: 135,
        },
        {
          time: "2018-05-23",
          value: 132.55,
        },
        {
          time: "2018-05-24",
          value: 132.7,
        },
        {
          time: "2018-05-25",
          value: 132.2,
        },
        {
          time: "2018-05-28",
          value: 131.55,
        },
        {
          time: "2018-05-29",
          value: 131.85001,
        },
        {
          time: "2018-05-30",
          value: 139.85001,
        },
        {
          time: "2018-05-31",
          value: 140.8,
        },
        {
          time: "2018-06-01",
          value: 139.64999,
        },
        {
          time: "2018-06-04",
          value: 137.10001,
        },
        {
          time: "2018-06-05",
          value: 139.25,
        },
        {
          time: "2018-06-06",
          value: 141.3,
        },
        {
          time: "2018-06-07",
          value: 145,
        },
        {
          time: "2018-06-08",
          value: 143.89999,
        },
        {
          time: "2018-06-11",
          value: 142.7,
        },
        {
          time: "2018-06-13",
          value: 144.05,
        },
        {
          time: "2018-06-14",
          value: 143.55,
        },
        {
          time: "2018-06-15",
          value: 140.5,
        },
        {
          time: "2018-06-18",
          value: 139.64999,
        },
        {
          time: "2018-06-19",
          value: 138,
        },
        {
          time: "2018-06-20",
          value: 141,
        },
        {
          time: "2018-06-21",
          value: 140.55,
        },
        {
          time: "2018-06-22",
          value: 140.55,
        },
        {
          time: "2018-06-25",
          value: 140.75,
        },
        {
          time: "2018-06-26",
          value: 140.64999,
        },
        {
          time: "2018-06-27",
          value: 141.14999,
        },
        {
          time: "2018-06-28",
          value: 139.8,
        },
        {
          time: "2018-06-29",
          value: 139.8,
        },
        {
          time: "2018-07-02",
          value: 140.14999,
        },
        {
          time: "2018-07-03",
          value: 143.05,
        },
        {
          time: "2018-07-04",
          value: 140,
        },
        {
          time: "2018-07-05",
          value: 129.2,
        },
        {
          time: "2018-07-06",
          value: 129.55,
        },
        {
          time: "2018-07-09",
          value: 128.3,
        },
        {
          time: "2018-07-10",
          value: 126.55,
        },
        {
          time: "2018-07-11",
          value: 124.3,
        },
        {
          time: "2018-07-12",
          value: 124.8,
        },
        {
          time: "2018-07-13",
          value: 123.25,
        },
        {
          time: "2018-07-16",
          value: 123,
        },
        {
          time: "2018-07-17",
          value: 124.25,
        },
        {
          time: "2018-07-18",
          value: 123,
        },
        {
          time: "2018-07-19",
          value: 121,
        },
        {
          time: "2018-07-20",
          value: 121.45,
        },
        {
          time: "2018-07-23",
          value: 123.8,
        },
        {
          time: "2018-07-24",
          value: 122.15,
        },
        {
          time: "2018-07-25",
          value: 121.3,
        },
        {
          time: "2018-07-26",
          value: 122.7,
        },
        {
          time: "2018-07-27",
          value: 122.2,
        },
        {
          time: "2018-07-30",
          value: 121.7,
        },
        {
          time: "2018-07-31",
          value: 122.95,
        },
        {
          time: "2018-08-01",
          value: 121,
        },
        {
          time: "2018-08-02",
          value: 116,
        },
        {
          time: "2018-08-03",
          value: 118.1,
        },
        {
          time: "2018-08-06",
          value: 114.3,
        },
        {
          time: "2018-08-07",
          value: 114.25,
        },
        {
          time: "2018-08-08",
          value: 111.85,
        },
        {
          time: "2018-08-09",
          value: 109.7,
        },
        {
          time: "2018-08-10",
          value: 105,
        },
        {
          time: "2018-08-13",
          value: 105.75,
        },
        {
          time: "2018-08-14",
          value: 107.25,
        },
        {
          time: "2018-08-15",
          value: 107.4,
        },
        {
          time: "2018-08-16",
          value: 110.5,
        },
        {
          time: "2018-08-17",
          value: 109,
        },
        {
          time: "2018-08-20",
          value: 108.95,
        },
        {
          time: "2018-08-21",
          value: 108.35,
        },
        {
          time: "2018-08-22",
          value: 108.6,
        },
        {
          time: "2018-08-23",
          value: 105.65,
        },
        {
          time: "2018-08-24",
          value: 104.45,
        },
        {
          time: "2018-08-27",
          value: 106.2,
        },
        {
          time: "2018-08-28",
          value: 106.55,
        },
        {
          time: "2018-08-29",
          value: 111.8,
        },
        {
          time: "2018-08-30",
          value: 115.5,
        },
        {
          time: "2018-08-31",
          value: 115.5,
        },
        {
          time: "2018-09-03",
          value: 114.55,
        },
        {
          time: "2018-09-04",
          value: 112.75,
        },
        {
          time: "2018-09-05",
          value: 111.5,
        },
        {
          time: "2018-09-06",
          value: 108.1,
        },
        {
          time: "2018-09-07",
          value: 108.55,
        },
        {
          time: "2018-09-10",
          value: 106.5,
        },
        {
          time: "2018-09-11",
          value: 105.1,
        },
        {
          time: "2018-09-12",
          value: 107.2,
        },
        {
          time: "2018-09-13",
          value: 107.1,
        },
        {
          time: "2018-09-14",
          value: 105.75,
        },
        {
          time: "2018-09-17",
          value: 106.05,
        },
        {
          time: "2018-09-18",
          value: 109.15,
        },
        {
          time: "2018-09-19",
          value: 111.4,
        },
        {
          time: "2018-09-20",
          value: 111,
        },
        {
          time: "2018-09-21",
          value: 111,
        },
        {
          time: "2018-09-24",
          value: 108.95,
        },
        {
          time: "2018-09-25",
          value: 106.65,
        },
        {
          time: "2018-09-26",
          value: 106.7,
        },
        {
          time: "2018-09-27",
          value: 107.05,
        },
        {
          time: "2018-09-28",
          value: 106.55,
        },
        {
          time: "2018-10-01",
          value: 106.2,
        },
        {
          time: "2018-10-02",
          value: 106.4,
        },
        {
          time: "2018-10-03",
          value: 107.1,
        },
        {
          time: "2018-10-04",
          value: 106.4,
        },
        {
          time: "2018-10-05",
          value: 104.65,
        },
        {
          time: "2018-10-08",
          value: 102.65,
        },
        {
          time: "2018-10-09",
          value: 102.1,
        },
        {
          time: "2018-10-10",
          value: 102.15,
        },
        {
          time: "2018-10-11",
          value: 100.9,
        },
        {
          time: "2018-10-12",
          value: 102,
        },
        {
          time: "2018-10-15",
          value: 100.15,
        },
        {
          time: "2018-10-16",
          value: 99,
        },
        {
          time: "2018-10-17",
          value: 98,
        },
        {
          time: "2018-10-18",
          value: 96,
        },
        {
          time: "2018-10-19",
          value: 95.5,
        },
        {
          time: "2018-10-22",
          value: 92.400002,
        },
        {
          time: "2018-10-23",
          value: 92.300003,
        },
        {
          time: "2018-10-24",
          value: 92.900002,
        },
        {
          time: "2018-10-25",
          value: 91.849998,
        },
        {
          time: "2018-10-26",
          value: 91.599998,
        },
        {
          time: "2018-10-29",
          value: 94.050003,
        },
        {
          time: "2018-10-30",
          value: 98.25,
        },
        {
          time: "2018-10-31",
          value: 97.25,
        },
        {
          time: "2018-11-01",
          value: 96.879997,
        },
        {
          time: "2018-11-02",
          value: 101.78,
        },
        {
          time: "2018-11-06",
          value: 102.4,
        },
        {
          time: "2018-11-07",
          value: 100.6,
        },
        {
          time: "2018-11-08",
          value: 98.5,
        },
        {
          time: "2018-11-09",
          value: 95.139999,
        },
        {
          time: "2018-11-12",
          value: 96.900002,
        },
        {
          time: "2018-11-13",
          value: 97.400002,
        },
        {
          time: "2018-11-14",
          value: 103.3,
        },
        {
          time: "2018-11-15",
          value: 102.74,
        },
        {
          time: "2018-11-16",
          value: 101.2,
        },
        {
          time: "2018-11-19",
          value: 98.720001,
        },
        {
          time: "2018-11-20",
          value: 102.2,
        },
        {
          time: "2018-11-21",
          value: 108.8,
        },
        {
          time: "2018-11-22",
          value: 109.9,
        },
        {
          time: "2018-11-23",
          value: 113.74,
        },
        {
          time: "2018-11-26",
          value: 110.9,
        },
        {
          time: "2018-11-27",
          value: 113.28,
        },
        {
          time: "2018-11-28",
          value: 113.6,
        },
        {
          time: "2018-11-29",
          value: 113.14,
        },
        {
          time: "2018-11-30",
          value: 114.4,
        },
        {
          time: "2018-12-03",
          value: 111.84,
        },
        {
          time: "2018-12-04",
          value: 106.7,
        },
        {
          time: "2018-12-05",
          value: 107.8,
        },
        {
          time: "2018-12-06",
          value: 106.44,
        },
        {
          time: "2018-12-07",
          value: 103.7,
        },
        {
          time: "2018-12-10",
          value: 101.02,
        },
        {
          time: "2018-12-11",
          value: 102.72,
        },
        {
          time: "2018-12-12",
          value: 101.8,
        },
        {
          time: "2018-12-13",
          value: 102,
        },
        {
          time: "2018-12-14",
          value: 102.1,
        },
        {
          time: "2018-12-17",
          value: 101.04,
        },
        {
          time: "2018-12-18",
          value: 101.6,
        },
        {
          time: "2018-12-19",
          value: 102,
        },
        {
          time: "2018-12-20",
          value: 102.02,
        },
        {
          time: "2018-12-21",
          value: 102.2,
        },
        {
          time: "2018-12-24",
          value: 102.1,
        },
        {
          time: "2018-12-25",
          value: 100.8,
        },
        {
          time: "2018-12-26",
          value: 101.02,
        },
        {
          time: "2018-12-27",
          value: 100.5,
        },
        {
          time: "2018-12-28",
          value: 101,
        },
        {
          time: "2019-01-03",
          value: 101.5,
        },
        {
          time: "2019-01-04",
          value: 101.1,
        },
        {
          time: "2019-01-08",
          value: 101.1,
        },
        {
          time: "2019-01-09",
          value: 102.06,
        },
        {
          time: "2019-01-10",
          value: 105.14,
        },
        {
          time: "2019-01-11",
          value: 104.66,
        },
        {
          time: "2019-01-14",
          value: 106.22,
        },
        {
          time: "2019-01-15",
          value: 106.98,
        },
        {
          time: "2019-01-16",
          value: 108.4,
        },
        {
          time: "2019-01-17",
          value: 109.06,
        },
        {
          time: "2019-01-18",
          value: 107,
        },
        {
          time: "2019-01-21",
          value: 105.8,
        },
        {
          time: "2019-01-22",
          value: 105.24,
        },
        {
          time: "2019-01-23",
          value: 105.4,
        },
        {
          time: "2019-01-24",
          value: 105.38,
        },
        {
          time: "2019-01-25",
          value: 105.7,
        },
        {
          time: "2019-01-28",
          value: 105.8,
        },
        {
          time: "2019-01-29",
          value: 106.1,
        },
        {
          time: "2019-01-30",
          value: 108.6,
        },
        {
          time: "2019-01-31",
          value: 107.92,
        },
        {
          time: "2019-02-01",
          value: 105.22,
        },
        {
          time: "2019-02-04",
          value: 102.44,
        },
        {
          time: "2019-02-05",
          value: 102.26,
        },
        {
          time: "2019-02-06",
          value: 102,
        },
        {
          time: "2019-02-07",
          value: 101.62,
        },
        {
          time: "2019-02-08",
          value: 101.9,
        },
        {
          time: "2019-02-11",
          value: 101.78,
        },
        {
          time: "2019-02-12",
          value: 102.7,
        },
        {
          time: "2019-02-13",
          value: 100.14,
        },
        {
          time: "2019-02-14",
          value: 101.36,
        },
        {
          time: "2019-02-15",
          value: 101.62,
        },
        {
          time: "2019-02-18",
          value: 100.74,
        },
        {
          time: "2019-02-19",
          value: 100,
        },
        {
          time: "2019-02-20",
          value: 100.04,
        },
        {
          time: "2019-02-21",
          value: 100,
        },
        {
          time: "2019-02-22",
          value: 100.12,
        },
        {
          time: "2019-02-25",
          value: 100.04,
        },
        {
          time: "2019-02-26",
          value: 98.980003,
        },
        {
          time: "2019-02-27",
          value: 97.699997,
        },
        {
          time: "2019-02-28",
          value: 97.099998,
        },
        {
          time: "2019-03-01",
          value: 96.760002,
        },
        {
          time: "2019-03-04",
          value: 98.360001,
        },
        {
          time: "2019-03-05",
          value: 96.260002,
        },
        {
          time: "2019-03-06",
          value: 98.120003,
        },
        {
          time: "2019-03-07",
          value: 99.68,
        },
        {
          time: "2019-03-11",
          value: 102.1,
        },
        {
          time: "2019-03-12",
          value: 100.22,
        },
        {
          time: "2019-03-13",
          value: 100.5,
        },
        {
          time: "2019-03-14",
          value: 99.660004,
        },
        {
          time: "2019-03-15",
          value: 100.08,
        },
        {
          time: "2019-03-18",
          value: 99.919998,
        },
        {
          time: "2019-03-19",
          value: 99.459999,
        },
        {
          time: "2019-03-20",
          value: 98.220001,
        },
        {
          time: "2019-03-21",
          value: 97.300003,
        },
        {
          time: "2019-03-22",
          value: 97.660004,
        },
        {
          time: "2019-03-25",
          value: 97,
        },
        {
          time: "2019-03-26",
          value: 97.019997,
        },
        {
          time: "2019-03-27",
          value: 96.099998,
        },
        {
          time: "2019-03-28",
          value: 96.699997,
        },
        {
          time: "2019-03-29",
          value: 96.300003,
        },
        {
          time: "2019-04-01",
          value: 97.779999,
        },
        {
          time: "2019-04-02",
          value: 98.360001,
        },
        {
          time: "2019-04-03",
          value: 98.5,
        },
        {
          time: "2019-04-04",
          value: 98.360001,
        },
        {
          time: "2019-04-05",
          value: 99.540001,
        },
        {
          time: "2019-04-08",
          value: 98.580002,
        },
        {
          time: "2019-04-09",
          value: 97.239998,
        },
        {
          time: "2019-04-10",
          value: 97.32,
        },
        {
          time: "2019-04-11",
          value: 98.400002,
        },
        {
          time: "2019-04-12",
          value: 98.220001,
        },
        {
          time: "2019-04-15",
          value: 98.720001,
        },
        {
          time: "2019-04-16",
          value: 99.120003,
        },
        {
          time: "2019-04-17",
          value: 98.620003,
        },
        {
          time: "2019-04-18",
          value: 98,
        },
        {
          time: "2019-04-19",
          value: 97.599998,
        },
        {
          time: "2019-04-22",
          value: 97.599998,
        },
        {
          time: "2019-04-23",
          value: 96.800003,
        },
        {
          time: "2019-04-24",
          value: 96.32,
        },
        {
          time: "2019-04-25",
          value: 96.339996,
        },
        {
          time: "2019-04-26",
          value: 97.120003,
        },
        {
          time: "2019-04-29",
          value: 96.980003,
        },
        {
          time: "2019-04-30",
          value: 96.32,
        },
        {
          time: "2019-05-02",
          value: 96.860001,
        },
        {
          time: "2019-05-03",
          value: 96.699997,
        },
        {
          time: "2019-05-06",
          value: 94.940002,
        },
        {
          time: "2019-05-07",
          value: 94.5,
        },
        {
          time: "2019-05-08",
          value: 94.239998,
        },
        {
          time: "2019-05-10",
          value: 92.900002,
        },
        {
          time: "2019-05-13",
          value: 91.279999,
        },
        {
          time: "2019-05-14",
          value: 91.599998,
        },
        {
          time: "2019-05-15",
          value: 90.080002,
        },
        {
          time: "2019-05-16",
          value: 91.68,
        },
        {
          time: "2019-05-17",
          value: 91.959999,
        },
        {
          time: "2019-05-20",
          value: 91.080002,
        },
        {
          time: "2019-05-21",
          value: 90.760002,
        },
        {
          time: "2019-05-22",
          value: 91,
        },
        {
          time: "2019-05-23",
          value: 90.739998,
        },
        {
          time: "2019-05-24",
          value: 91,
        },
        {
          time: "2019-05-27",
          value: 91.199997,
        },
        {
          time: "2019-05-28",
          value: 90.68,
        },
        {
          time: "2019-05-29",
          value: 91.120003,
        },
        {
          time: "2019-05-30",
          value: 90.419998,
        },
        {
          time: "2019-05-31",
          value: 93.800003,
        },
        {
          time: "2019-06-03",
          value: 96.800003,
        },
        {
          time: "2019-06-04",
          value: 96.34,
        },
        {
          time: "2019-06-05",
          value: 95.94,
        },
      ]);
      var toolTip = document.createElement("div");
      toolTip.setAttribute("id", "tooltip-id" + type);
      toolTip.className = "three-line-legend";
      ref.current.appendChild(toolTip);
      toolTip.style.display = "block";
      toolTip.style.fontWeight = "500";
      toolTip.style.left = -4 + "px";
      toolTip.style.top = "-" + 8 + "px";
      toolTip.style.backgroundColor = "transparent";

      // format numbers
      let percentChange = baseChange?.toFixed(2);
      let formattedPercentChange =
        (percentChange > 0 ? "+" : "") + percentChange + "%";
      let color = percentChange >= 0 ? "green" : "red";

      // get the title of the chart
      function setLastBarText() {
        toolTip.innerHTML =
          `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title} ${
            type === CHART_TYPES.BAR && !useWeekly ? '(24hr)' : ''
          }</div>` +
          // `<div style="font-size: 22px; margin: 4px 0px; color:${textColor}" >` +
          // formattedNum(base ?? 0, true) +
          // `<span style="margin-left: 10px; font-size: 16px; color: ${color};">${formattedPercentChange}</span>` +
          '</div>'
      }
      setLastBarText()

      // update the title when hovering on the chart
      chart.subscribeCrosshairMove(function (param) {
        if (
          param === undefined ||
          param.time === undefined ||
          param.point.x < 0 ||
          param.point.x > width ||
          param.point.y < 0 ||
          param.point.y > HEIGHT
        ) {
          // setLastBarText()
        } else {
          let dateStr = useWeekly
            ? dayjs(
                param.time.year + "-" + param.time.month + "-" + param.time.day
              )
                .startOf("week")
                .format("MMMM D, YYYY") +
              "-" +
              dayjs(
                param.time.year + "-" + param.time.month + "-" + param.time.day
              )
                .endOf("week")
                .format("MMMM D, YYYY")
            : dayjs(
                param.time.year + "-" + param.time.month + "-" + param.time.day
              ).format("MMMM D, YYYY");
          var price = param.seriesPrices.get(series);
          console.log(toolTip);
          toolTip.innerHTML =
          `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title}</div>` +
          `<div style="font-size: 22px; margin: 4px 0px; color: ${textColor}">` +
          formattedNum(price, true) +
          '</div>' +
          '<div>' +
          dateStr +
          '</div>'
        }
      });

      chart.timeScale().fitContent();

      setChartCreated(chart);
    }
  }, [
    base,
    baseChange,
    chartCreated,
    darkMode,
    data,
    formattedData,
    textColor,
    title,
    topScale,
    type,
    useWeekly,
    width,
  ]);

  // responsiveness
  useEffect(() => {
    if (width) {
      chartCreated && chartCreated.resize(width, HEIGHT);
      chartCreated && chartCreated.timeScale().scrollToPosition(0);
    }
  }, [chartCreated, width]);

  return (
    <div>
      <div ref={ref} id={"test-id" + type} />
    </div>
  );
};

export default TradingViewChart;
