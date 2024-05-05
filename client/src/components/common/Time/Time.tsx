import moment from "moment";
import Moment from "react-moment";

type Props = {
  time: string;
  format?: string;
};

const Time = (props: Props) => {
  const { time, format } = props;
  if (!time) {
    return null;
  }
  
  if (format) {
    return <Moment format={format} date={time} />;
  } else if (moment().diff(time, "days") < 1) {
    return <Moment fromNow date={time} />;
  } else
    return (
      <Moment format="MMM DD, YYYY @ HH:mm A" date={time} />
    );
};

export default Time;
