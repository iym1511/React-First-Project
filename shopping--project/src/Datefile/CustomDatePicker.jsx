
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const CustomDatePicker = () => {
  const [StartDate, setStartDate] = useState<Date | null>(new Date());
  
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  return (
    <DatePicker
      locale="ko" // 한국시간 설정
      showPopperArrow={false} // 날짜 선택시 캘린더 테두리 위의 삼각형 화살표 제거
      selected={StartDate}
      onChange={(date) => setStartDate(date)}
      maxDate={new Date()}
      dateFormat="yy-MM-dd"
/* 커스텀 헤더 */
      renderCustomHeader={({
        date, // 날짜 
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => {
        return (
          <div className="date-customHeader">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              Prev // TODO: 버튼 아이콘 추가
            </button>
            <div className="custom-month">
              {date.getFullYear()}-{months[date.getMonth()]}
            </div>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              Next // TODO: 버튼 아이콘 추가
            </button>
          </div>
        );
      }}
    ></DatePicker>
  );
};

export default CustomDatePicker;