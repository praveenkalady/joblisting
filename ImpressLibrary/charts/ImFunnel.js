import React, {useEffect, useState} from "react";
import D3Funnel from "d3-funnel";
import {funnelPattern} from "./config";
import PropTypes from "prop-types";

const ImFunnel = ({data, label, type, dynamicSlope, names}) => {
  const setHeight = data.length <= 2 ? 100 : data.length == 3 ? 180 : 300;
  const dynamicheight = setHeight / data.length;
  const [titleId] = useState(Math.floor(Math.random() * 100000));
  const [isEmpty, setisEmpty] = useState(false);
  useEffect(()=>{
    if (data && data.length) {
      const flatArray = data.map((item)=>{
        return item.value;
      });
      const count = flatArray.reduce(function(n, val) {
        return n + (val === 0);
      }, 0);
      if (count == flatArray.length ) {
        setisEmpty(true);
      } else {
        setisEmpty(false);
      }
    }
  }, [data]);
  useEffect(() => {
    if (!isEmpty) {
      const options = {
        chart: {
          height: data.length * dynamicheight,
          width: type == "big" ? 200 : 80,
          bottomWidth: 1 / 2,
          bottomPinch: 1,
          inverted: false,
          horizontal: false,
          animate: 0,
          curve: {
            enabled: false,
            height: dynamicSlope ? 2 : 20,
          },
        },
        block: {
          minHeight: 15,
          dynamicSlope: true,
          fill: {
            scale: funnelPattern,
          },
        },
        label: {
          enabled: false,
        },
      };
      const chart = new D3Funnel("#funnel" + titleId);
      chart.draw(data, options);
    }
  }, [isEmpty]);
  return (
    <div className="im-funnel">
      {isEmpty ? <div className="empty-chart">No data</div>:
      <div className="funnel-wrap">
        <div id={"funnel" + titleId} className="funnel"></div>
        {data &&
          data.map((value, index) => {
            return (
              <p
                key={index}
                className="show-on-hover"
                style={{
                  top: index * dynamicheight + 30,
                  height: dynamicheight,
                }}
              >
                <span>{names[value.label]}</span>
                {data[index - 1] && (
                  <label>
                    {/* Drop Off <br /> {data[index - 1].value - data[index].value} */}
                  </label>
                )}
                <div
                  className="value-text"
                  style={{
                    width: type == "big" ? 200 : 80,
                  }}
                >
                  <em>{data[index].value}</em>
                </div>
              </p>
            );
          })}
        <p
          style={{
            top: (data && data.length) * dynamicheight + 30,
            height: dynamicheight,
          }}
        ></p>
      </div>}
      <h1 style={{width: data.length * dynamicheight}}>{label}</h1>

    </div>
  );
};

ImFunnel.propTypes = {
  data: PropTypes.any,
  dynamicSlope: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  names: PropTypes.any,
};

export default ImFunnel;
