import React from "react";
import ReactWordcloud from "react-wordcloud";
import {wordChartConfig, wordcolor} from "./config";
import PropTypes from "prop-types";

const ImWord = ({words}) => {
  const callbacks = {
    getWordColor: (word) => {
      return wordcolor[word.rating];
    },
  };
  return (
    <div className="im-bar">
      {words && words.length ?
        <ReactWordcloud
          words={words}
          options={wordChartConfig}
          callbacks={callbacks} /> :
        <div className="empty-chart">No data</div>
      }

    </div>
  );
};

ImWord.propTypes = {
  words: PropTypes.any,
};
export default ImWord;
