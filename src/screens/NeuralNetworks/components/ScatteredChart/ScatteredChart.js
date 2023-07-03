import React, { useRef } from 'react';

import drawChart from './draw';
import useInterval from '../../../../hooks/useInterval';

const WIDTH = 600;
const HEIGHT = 600;

const ScatteredChart = ({ points = [], xAxis, yAxis, resolution, w, h }) => {
  const canvasRef = useRef();

  useInterval(() => {
    drawChart(
      canvasRef.current,
      WIDTH,
      HEIGHT,
      xAxis,
      yAxis,
      points,
      resolution
    );
  }, 100);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      style={{
        width: w,
        height: h,
        border: '3px solid gray',
        borderRadius: '15px',
      }}
    />
  );
};

export default ScatteredChart;
