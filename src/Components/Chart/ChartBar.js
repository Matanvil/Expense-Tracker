import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = math.round(props.value / props.maxValue) * 100 + "%";
  }

  return (
    <div className="Chart-bar">
      <div className="Chart-bar__inner">
        <div
          className="Chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="Chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
