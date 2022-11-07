import React, {useState, useEffect} from "react";
import C3Chart from "react-c3js";
import {barPattern} from "./config";
import PropTypes from "prop-types";

const ImBar = ({
  data,
  legend = false,
  pattern,
  xLabel,
  yLabel,
  categories,
  type,
  barType = "",
  tooltip,
}) => {
  const axis = {
    x: {
      label: {
        text: xLabel,
        position: "outer-center",
      },
      tick: {
        multiline: false,
        rotate: type == "small" ? -25 : categories.length > 10 ? -25 : 0,
        format: function(x) {
          return categories && typeof (categories[x]) == "string" ? categories[x].length > 10 ? categories[x].substring(0, 10) + "..." : categories[x] : categories[x];
        },
      },
      height: 50,
      type: "category",
      categories: categories,
    },
    y: {
      label: {
        text: yLabel,
        position: "outer-middle",
      },
      tick: {
        format: function(d) {
          return parseInt(d) == d ? d : null;
        },
      },
    },
  };
  const [isEmpty, setisEmpty] = useState(true);
  useEffect(() => {
    if (data && data.columns) {
      const flatArray = data && data.columns && data.columns.flat();
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
    <div className={"im-bar " + barType}>
      {isEmpty ? <div className="empty-chart">No data</div> :
        <C3Chart
          data={{
            type: "bar",
            ...data,
          }}
          axis={axis}
          legend={{
            hide: !legend,
          }}
          tooltip={{
            format: {
              title: function(x) {
                return tooltip ?
                  tooltip[x] : categories && categories.length ?
                    categories[x] : x;
              },
            },
          }}
          bar={{
            width: {
              ratio: 0.2, // this makes bar width 50% of length between ticks
            },
          }}
          color={{
            pattern: pattern ? pattern : barPattern,
          }}
          grid={{
            y: {
              show: true,
            },
          }}
        />}
    </div>
  );
};

ImBar.propTypes = {
  data: PropTypes.any,
  pattern: PropTypes.any,
  legend: PropTypes.bool,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
  categories: PropTypes.array,
  type: PropTypes.string,
  barType: PropTypes.string,
  tooltip: PropTypes.array,
};

export default ImBar;
