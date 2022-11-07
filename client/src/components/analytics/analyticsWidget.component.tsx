import Text from '../text/text.component';
import DateFilter from './dateFilter.component';

const AnalyticsWidget = (props: any) => {
  return (
    <div className="analyticsWidget" style={{ width: props.width || '100%' }}>
      <Text size="1.5rem" weight="bold" align="left">
        {props.title}
      </Text>
      {props.dateRangeFilter ? <DateFilter filters={props.filters} thunk={props.thunk} /> : null}
      <div className="chartContainer">{props.children}</div>
    </div>
  );
};

export default AnalyticsWidget;
