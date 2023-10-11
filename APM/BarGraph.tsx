import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

interface BarGraphProps {
  data: any[],
  type: string,
  color: string,
}

const BarGraph: React.FC<BarGraphProps> = ({data, type, color}) => {...};

export default BarGraph;
