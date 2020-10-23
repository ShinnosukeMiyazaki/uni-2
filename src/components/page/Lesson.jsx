import React from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

const TableContainer = styled.table`
  width: 100%;
  border: 2px solid #34495e;
  margin-bottom: 15px;
`;
const TimetableCell = styled.th`
  width: 25%;
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  background-color: #34495e;
  color: white;
`;
const AllocationCell = styled.th`
  width: 25%;
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  border-bottom: 2px solid #34495e;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
const TableShortContainer = styled.table`
  width: 50%;
  border: 2px solid #34495e;
  margin-bottom: 15px;
`;
const TimetableLongCell = styled.th`
  width: 50%;
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  background-color: #34495e;
  color: white;
`;
const AllocationLongCell = styled.th`
  width: 50%;
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  border-bottom: 2px solid #34495e;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const Lesson = () => {
  return (
    <React.Fragment>
      <Title title="LESSON SCHEDULE"></Title>
      <TableContainer>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell></TimetableCell>
          <TimetableCell>TUE</TimetableCell>
          <TimetableCell>WED</TimetableCell>
          <TimetableCell>THU</TimetableCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            16:00
            <br />|<br />
            17:20
          </TimetableCell>
          <AllocationCell>Commin soon...</AllocationCell>
          <AllocationCell>
            L1
            <br />
            年中~年長
          </AllocationCell>
          <AllocationCell style={{ borderRight: "none" }}></AllocationCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            17:40
            <br />|<br />
            18:30
          </TimetableCell>
          <AllocationCell>
            Jr.E
            <br />
            小1~小3
          </AllocationCell>
          <AllocationCell>
            Jr.D
            <br />
            小1~小3
          </AllocationCell>
          <AllocationCell style={{ borderRight: "none" }}>
            Jr.C
            <br />
            小1~小3
          </AllocationCell>
        </tr>{" "}
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            18:50
            <br />|<br />
            19:40
          </TimetableCell>
          <AllocationCell></AllocationCell>
          <AllocationCell>
            Jr.B
            <br />
            小4~小6
          </AllocationCell>
          <AllocationCell style={{ borderRight: "none" }}>
            Jr.A
            <br />
            小4~小6
          </AllocationCell>
        </tr>{" "}
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell style={{ borderBottom: "none" }}>
            20:00
            <br />|<br />
            21:00
          </TimetableCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <AllocationCell style={{ borderRight: "none", borderBottom: "none" }}>
            Teen's
            <br />
            中学生以上
          </AllocationCell>
        </tr>
      </TableContainer>
      <TableShortContainer>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableLongCell></TimetableLongCell>
          <TimetableLongCell>FRI</TimetableLongCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableLongCell>
            18:20
            <br />|<br />
            19:30
          </TimetableLongCell>
          <AllocationLongCell style={{ borderRight: "none" }}>
            基礎
            <br />
            小学生以上
          </AllocationLongCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableLongCell style={{ borderBottom: "none" }}>
            19:30
            <br />|<br />
            20:30
          </TimetableLongCell>
          <AllocationLongCell
            style={{ borderRight: "none", borderBottom: "none" }}
          >
            S
          </AllocationLongCell>
        </tr>
      </TableShortContainer>
    </React.Fragment>
  );
};

export default Lesson;
