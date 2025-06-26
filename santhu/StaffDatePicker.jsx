import React, { useState } from "react";
import styled from "styled-components";

const DatePickerContainer = styled.div`
  width: 320px;
  padding: 20px;
  background: #f3edf7;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  color: #000;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const MonthYear = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  gap: 10px;
`;

const Day = styled.div`
  font-weight: bold;
`;

const DateCell = styled.button`
  width: 36px;
  height: 36px;
  background: ${(props) => (props.selected ? "#6b4caf" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
`;

const Action = styled.button`
  background: none;
  border: none;
  color: #6b4caf;
  font-weight: bold;
  cursor: pointer;
`;

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(17);

  const handleSelect = (day) => {
    setSelectedDate(day);
  };

  return (
    <DatePickerContainer>
      <Header>
        <MonthYear>
          <Arrow>{"<"}</Arrow>
          <span>Aug</span>
          <Arrow>{">"}</Arrow>
        </MonthYear>
        <MonthYear>
          <Arrow>{"<"}</Arrow>
          <span>2023</span>
          <Arrow>{">"}</Arrow>
        </MonthYear>
      </Header>

      <Calendar>
        {daysOfWeek.map((day) => (
          <Day key={day}>{day}</Day>
        ))}

        {[
          ...Array(5).fill(null), // leading empty days
          ...Array(31).fill(0).map((_, i) => i + 1),
        ].map((day, index) => (
          <DateCell
            key={index}
            disabled={!day}
            selected={day === selectedDate}
            onClick={() => day && handleSelect(day)}
          >
            {day || ""}
          </DateCell>
        ))}
      </Calendar>

      <ActionBar>
        <Action onClick={() => setSelectedDate(null)}>Clear</Action>
        <div>
          <Action>Cancel</Action>
          <Action style={{ marginLeft: "20px" }}>OK</Action>
        </div>
      </ActionBar>
    </DatePickerContainer>
  );
};

export default DatePicker;
