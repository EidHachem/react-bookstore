import { TsdevDonutChart } from 'tsdev-react-donut-chart';
import PropTypes from 'prop-types';
import '../../Styles/index.css';

export default function Chart(props) {
  const { data } = props;
  const dataSet = [
    {
      label: 'one',
      value: Math.floor(data),
    },
    {
      label: 'two',
      value: 100 - Math.floor(data),
    },
  ];
  const colorRange = ['#3794E7', '#E7E7E7', '#3329eb', '#0800a2', '#000000'];

  return (
    <TsdevDonutChart
      innerRadius="30"
      height="80"
      width="80"
      dataSet={dataSet}
      radius="38"
      subClass="chart"
      colorRange={colorRange}
    />
  );
}

Chart.propTypes = {
  data: PropTypes.string.isRequired,
};
