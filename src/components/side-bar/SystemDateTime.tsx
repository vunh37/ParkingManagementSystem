import { log } from "console";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface IDateTimeState {
  date: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  milliseconds: number;
}

const SystemDateTime: React.FC<any> = (props: any) => {
  const [dateTime, setDatetime] = useState<IDateTimeState>();

  const updateDatetime = () => {
    const currentDateTime = new Date();
    const dateTime: IDateTimeState = {
      date: currentDateTime.getDate(),
      month: currentDateTime.getMonth(),
      year: currentDateTime.getFullYear(),
      hours: currentDateTime.getHours(),
      minutes: currentDateTime.getMinutes(),
      milliseconds: currentDateTime.getSeconds(),
    };
    setDatetime(dateTime);
  };
  useEffect(() => {
    updateDatetime();
    const updateTimeInterval = setInterval(updateDatetime, 1000);

    return () => {
      clearInterval(updateTimeInterval);
    };
  }, []);

  return (
    <div className="date-time-area">
      <p>
        {dateTime?.hours}:{dateTime?.minutes}:{dateTime?.milliseconds}
      </p>
    </div>
  );
};

export default React.memo(SystemDateTime);
