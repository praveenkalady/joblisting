import ImDonut from "./ImDonut";
import ImBar from "./ImBar";
import ImWord from "./ImWord";
import "c3/c3.css";
import "./common.css";
import ImFunnel from "./ImFunnel";
function CallCharts() {}
CallCharts.ImDonut = ImDonut;
CallCharts.ImBar = ImBar;
CallCharts.ImWord = ImWord;
CallCharts.ImFunnel = ImFunnel;
function ImCharts(props) {
  return CallCharts[props.componentName](props);
}

export default ImCharts;
