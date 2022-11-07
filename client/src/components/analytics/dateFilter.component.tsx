import { useDispatch } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import Text from '../text/text.component';

const DateFilter = (props: any) => {
  const dispatch = useDispatch<any>();
  return (
    <>
      <Text>Select dates:</Text>
      <DateRangePicker
        onChange={(value: any) =>
          dispatch(
            value
              ? props.thunk({
                  ...props.filters,
                  from: value[0],
                  to: value[1]
                })
              : props.thunk({
                  ...props.filters
                })
          )
        }
      />
      <Text size={'0.7rem'}>*Press x to reset</Text>
    </>
  );
};

export default DateFilter;
