import React from "react";
import useChartConfig from "../../hooks/useChartConfig";
import { Chart } from "react-charts";

export default () => {
  const { data, randomizeData } = useChartConfig({
    series: 8,
    datums: 3,
    dataType: "ordinal",
  });
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );
  return (
    <div style={{ height: "200px" }}>
      <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  );
};
