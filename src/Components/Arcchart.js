import * as React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';


const colors = [{
  to: 25,
  color: '#0058e9'
}, {
  from: 25,
  to: 50,
  color: '#37b400'
}, {
  from: 50,
  to: 75,
  color: '#ffc000'
}, {
  from: 75,
  color: '#f31700'
}];

const ArcGaugeComponent = () => {
  const [value, setValue] = React.useState(7);
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setValue(Math.ceil(Math.random() * 100));
  //   }, 1000);
  // }, []);
  const arcOptions = {
    value: value,
    colors
  };

  const arcCenterRenderer = (value, color) => {
    return <h4 style={{
      color: color
    }}>{value}Leads</h4>;
  };

  return <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />;
};

export default ArcGaugeComponent