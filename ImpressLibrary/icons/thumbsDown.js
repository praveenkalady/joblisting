import React from "react";
import PropTypes from "prop-types";

const ThumbsDown = ({strokeColor = "var(--im-primary-color-shade-7)", bgColor= "#FFFFFF"}) => {
    return (
        <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <circle id="path-1" cx="16" cy="16" r="16"></circle>
                <filter x="-18.8%" y="-18.8%" width="137.5%" height="137.5%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.187609266 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="candidate-not-satisfied-with-response-01" transform="translate(-1141.000000, -854.000000)">
                    <g id="icn_thumps-down" transform="translate(1145.000000, 858.000000)">
                        <path d="M22,18 L26,18 L26,10 C26,8.8954305 25.1045695,8 24,8 L22,8 L22,18 Z M12.3746582,8 C11.6736192,8 11.0633544,8.422875 10.7986876,9.0210625 L8.17498633,15.0560625 C8.08530584,15.2260625 8,15.3960625 8,15.6489375 L8,17.3510625 C8,18.285 8.78634482,19.047875 9.75205062,19.047875 L15.2630263,19.047875 L14.387001,22.957875 L14.387001,23.215 C14.387001,23.5560625 14.5619873,23.8960625 14.7369737,24.1489375 C14.9207516,25.9565816 15.3417604,26.7402691 16,26.5 C16.9873595,26.1395963 17.2673944,23.9095839 18,22.957875 C18.728029,22.0121115 19.8860115,20.8224656 21.4739473,19.3889375 C21.8250137,19.047875 22,18.625 22,18.202125 L22,9.702125 C22,8.7639375 21.2092805,8 20.2479494,8 L12.3746582,8 Z" id="Fill-1" stroke={strokeColor} strokeWidth="2" transform="translate(17.000000, 17.271142) scale(-1, 1) translate(-17.000000, -17.271142) "></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

ThumbsDown.propTypes = {
    strokeColor: PropTypes.string,
    bgColor: PropTypes.string,
};

export default ThumbsDown;
