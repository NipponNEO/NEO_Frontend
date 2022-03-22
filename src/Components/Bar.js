import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem,ChartCategoryAxisItem, ChartCategoryAxis,ChartTitle } from '@progress/kendo-react-charts';
import styled from 'styled-components';

const categories = ['01/03', '02/03','03/03','04/03','05/03'];
const [firstSeries, secondSeries] = [[1,3,2,1,2],[3,4,1,5,4]];

const Bar = () => <Styledchart>
  <ChartTitle text="Appointments" />
 <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories}  />
            </ChartCategoryAxis>
    <ChartSeries>
    
      <ChartSeriesItem type="column" data={firstSeries}  />
      <ChartSeriesItem type="column" data={secondSeries} />

    </ChartSeries>
  </Styledchart>;

const Styledchart=styled(Chart)`
height: 100%;
`

export default Bar