import React, {useState, useEffect} from "react";
import C3Chart from "react-c3js";
import {donutPattern} from "./config";
import PropTypes from "prop-types";

const ImDonut = ({data, names}) => {
  const [isEmpty, setisEmpty] = useState(true);
  useEffect(() => {
    if (data && data.columns) {
      const currentData = data && data.columns ? [...data.columns] : [];
      const flatArray = currentData.flat();
      const valArray = flatArray.filter((item) => {
        return typeof (item) == "number";
      });
      const count = valArray.reduce(function(n, val) {
        return n + (val === 0);
      }, 0);
      if (count == valArray.length) {
        setisEmpty(true);
      } else {
        setisEmpty(false);
      }
    }
  }, [data]);
  return (
    <div className="im-donut">
      {isEmpty ? <div className="empty-chart">No data</div> :
        <C3Chart
          data={{
            type: "donut",
            ...data,
            ...names,
          }}
          type="donut"
          legend={{
            hide: false,
          }}
          empty={{
            label: {
              text: "No data available",
            },
          }}
          tooltip={{
            contents: function(d) {
              return (
                "<div class=\"main-tool\">" +
                "<label>" +
                (d[0].ratio * 100).toFixed(1) +
                "%" +
                "</label>" +
                "<span>" +
                d[0].name +
                "</span>" +
                "</div>"
              );
            },
          }}
          donut={{
            width: 20,
            label: {
              show: false,
            },
          }}
          color={{
            pattern: donutPattern,
          }}
        />}
    </div>
  );
};
ImDonut.propTypes = {
  data: PropTypes.any,
  names: PropTypes.any,
};

export default ImDonut;
