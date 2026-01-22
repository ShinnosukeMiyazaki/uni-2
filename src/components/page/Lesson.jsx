import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 10px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin: 0 -15px;
    width: calc(100% + 30px);
    padding: 0 15px;
  }
`;

const TableContainer = styled.table`
  width: 100%;
  border: 2px solid #34495e;

  @media (max-width: 768px) {
    min-width: 600px;
  }
`;
const WeekTimetableCell = styled.th`
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  background-color: #34495e;
  color: white;
  flex: 1;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const TimetableCell = styled.th`
  font-size: 18px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  background-color: #34495e;
  color: white;
  flex: 1;
  @media (max-width: 600px) {
    font-size: 10px;
    max-width: 32px;
  }
`;
const AllocationCell = styled.th`
  font-size: 16px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  border-bottom: 2px solid #34495e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const TimetableCourseName = styled.h4`
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const LessonExplanationContainer = styled.section`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 2;
  margin-bottom: 120px;
`;

const PriceNotationContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  flex: 1;
`;

const PriceNotationItem = styled.li`
  font-size: 28px;
  margin-bottom: 50px;
  text-align: center;
  @media (max-width: 475px) {
    font-size: 20px;
  }
`;

const CourseTableContainer = styled.table`
  width: 100%;
`;

const CourseCellTop = styled.th`
  font-size: 20px;
  font-weight: bold;
  padding: 8px 20px;
  flex: 1;
  @media (max-width: 770px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;

const CourseCell = styled.th`
  font-size: 18px;
  font-weight: bold;
  padding: 8px 20px;
  text-align: center;
  flex: 1;
  @media (max-width: 770px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;
const BodyContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: all 1.4s;
`;

const Lesson = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoad(true), 300);
  }, []);

  return (
    <BodyContainer load={load}>
      <Title title="LESSON SCHEDULE" />

      {/* ===== Timetable (画像内容に合わせて更新) ===== */}
      <TableWrapper>
        <TableContainer>
          {/* header */}
          <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TimetableCell />
            <WeekTimetableCell>MON</WeekTimetableCell>
            <WeekTimetableCell>TUE</WeekTimetableCell>
            <TimetableCell />
            <WeekTimetableCell>WED</WeekTimetableCell>
            <TimetableCell />
            <WeekTimetableCell>THU</WeekTimetableCell>
            <TimetableCell />
            <WeekTimetableCell>FRI</WeekTimetableCell>
          </tr>

          {/* Row: 16:30-17:20 / (Fri 16:20-17:10) */}
          <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TimetableCell>
              16:30
              <br />|<br />
              17:20
            </TimetableCell>

            {/* MON */}
            <AllocationCell />
            {/* TUE */}
            <AllocationCell>
              <TimetableCourseName>L1</TimetableCourseName>
              <p>年中〜年長</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (for WED) */}
            <TimetableCell />
            {/* WED */}
            <AllocationCell />

            {/* time col (for THU) */}
            <TimetableCell />
            {/* THU */}
            <AllocationCell />

            {/* time col (for FRI) */}
            <TimetableCell>
              16:20
              <br />|<br />
              17:10
            </TimetableCell>
            {/* FRI */}
            <AllocationCell style={{ borderRight: "none" }}>
              <TimetableCourseName>L2</TimetableCourseName>
              <p>年中〜年長</p>
              <p>MAI</p>
            </AllocationCell>
          </tr>

          {/* Row: 17:30-18:30 / (Wed&Thu 17:30-18:20) / (Fri 17:20-18:10) */}
          <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TimetableCell>
              17:30
              <br />|<br />
              18:30
            </TimetableCell>

            {/* MON */}
            <AllocationCell>
              <TimetableCourseName>Acrobat B</TimetableCourseName>
              <p>藤本拓未</p>
            </AllocationCell>

            {/* TUE */}
            <AllocationCell>
              <TimetableCourseName>基礎B</TimetableCourseName>
              <p>小学生以上</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (WED) */}
            <TimetableCell>
              17:30
              <br />|<br />
              18:20
            </TimetableCell>
            {/* WED */}
            <AllocationCell>
              <TimetableCourseName>Jr.D</TimetableCourseName>
              <p>小1〜小3</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (THU) */}
            <TimetableCell>
              17:30
              <br />|<br />
              18:20
            </TimetableCell>
            {/* THU */}
            <AllocationCell>
              <TimetableCourseName>Jr.C</TimetableCourseName>
              <p>小1〜小3</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (FRI) */}
            <TimetableCell>
              17:20
              <br />|<br />
              18:10
            </TimetableCell>
            {/* FRI */}
            <AllocationCell style={{ borderRight: "none" }}>
              <TimetableCourseName>Jr.E</TimetableCourseName>
              <p>小1〜小3</p>
              <p>MAI</p>
            </AllocationCell>
          </tr>

          {/* Row: 18:40-19:40 / (Wed&Thu 18:30-19:20) / (Fri 18:20-19:20) */}
          <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TimetableCell>
              18:40
              <br />|<br />
              19:40
            </TimetableCell>

            {/* MON */}
            <AllocationCell>
              <TimetableCourseName>Acrobat A</TimetableCourseName>
              <p>藤本拓未</p>
            </AllocationCell>

            {/* TUE */}
            <AllocationCell />

            {/* time col (WED) */}
            <TimetableCell>
              18:30
              <br />|<br />
              19:20
            </TimetableCell>
            {/* WED */}
            <AllocationCell>
              <TimetableCourseName>Jr.B</TimetableCourseName>
              <p>小4〜小6</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (THU) */}
            <TimetableCell>
              18:30
              <br />|<br />
              19:20
            </TimetableCell>
            {/* THU */}
            <AllocationCell>
              <TimetableCourseName>Jr.A</TimetableCourseName>
              <p>小4〜小6</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (FRI) */}
            <TimetableCell>
              18:20
              <br />|<br />
              19:20
            </TimetableCell>
            {/* FRI */}
            <AllocationCell style={{ borderRight: "none" }}>
              <TimetableCourseName>基礎A</TimetableCourseName>
              <p>小学生以上</p>
              <p>KUMIIKO</p>
            </AllocationCell>
          </tr>

          {/* Row: (Wed 19:30-21:00) / (Thu 19:30-20:30) / (Fri 19:30-21:00) */}
          <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TimetableCell style={{ borderBottom: "none" }} />

            {/* MON */}
            <AllocationCell style={{ borderBottom: "none" }} />
            {/* TUE */}
            <AllocationCell style={{ borderBottom: "none" }} />

            {/* time col (WED) */}
            <TimetableCell style={{ borderBottom: "none" }}>
              19:30
              <br />|<br />
              21:00
            </TimetableCell>
            {/* WED */}
            <AllocationCell style={{ borderBottom: "none" }}>
              <TimetableCourseName>中高生選抜</TimetableCourseName>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (THU) */}
            <TimetableCell style={{ borderBottom: "none" }}>
              19:30
              <br />|<br />
              20:30
            </TimetableCell>
            {/* THU */}
            <AllocationCell style={{ borderBottom: "none" }}>
              <TimetableCourseName>Teens</TimetableCourseName>
              <p>中学生以上</p>
              <p>KUMIIKO</p>
            </AllocationCell>

            {/* time col (FRI) */}
            <TimetableCell style={{ borderBottom: "none" }}>
              19:30
              <br />|<br />
              21:00
            </TimetableCell>
            {/* FRI */}
            <AllocationCell
              style={{ borderRight: "none", borderBottom: "none" }}
            >
              <TimetableCourseName>小学生選抜</TimetableCourseName>
              <p>KUMIIKO</p>
            </AllocationCell>
          </tr>
        </TableContainer>
      </TableWrapper>

      <LessonExplanationContainer>
        <p>
          ※タイムテーブルは年度毎に変更していく可能性があります。ご了承ください。（2026年1月改訂）
        </p>
      </LessonExplanationContainer>

      {/* ===== Price (画像内容に合わせて更新) ===== */}
      <Title title="COURSE" />

      <PriceNotationContainer>
        <PriceNotationItem>
          <p style={{ fontSize: "16px" }}>入会金</p>
          ¥5,500円
        </PriceNotationItem>
      </PriceNotationContainer>

      <CourseTableContainer>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCellTop style={{ flex: 3 }}>受講コース</CourseCellTop>
          <CourseCellTop>受講料</CourseCellTop>
          <CourseCellTop>年払い</CourseCellTop>
        </tr>

        {/* 1 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
            borderTop: "2px solid #2c3e50",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月4回　チア一般クラス（50分）
          </CourseCell>
          <CourseCell>¥6,000</CourseCell>
          <CourseCell>¥70,500</CourseCell>
        </tr>

        {/* 2 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>月4回　基礎クラス（60分）</CourseCell>
          <CourseCell>¥6,500</CourseCell>
          <CourseCell>¥76,375</CourseCell>
        </tr>

        {/* 3 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月8回　［チア一般＋基礎］コース
          </CourseCell>
          <CourseCell>¥12,000</CourseCell>
          <CourseCell>¥142,500</CourseCell>
        </tr>

        {/* 4 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月4回　小学生選抜クラス（90分）
          </CourseCell>
          <CourseCell>¥8,000</CourseCell>
          <CourseCell>¥94,000</CourseCell>
        </tr>

        {/* 5 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月8回　［小学生選抜＋基礎］コース
          </CourseCell>
          <CourseCell>¥14,000</CourseCell>
          <CourseCell>¥166,000</CourseCell>
        </tr>

        {/* 6 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月4回　Teensクラス（60分）
          </CourseCell>
          <CourseCell>¥6,500</CourseCell>
          <CourseCell>¥76,375</CourseCell>
        </tr>

        {/* 7 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月8回　［Teens＋基礎］コース
          </CourseCell>
          <CourseCell>¥12,500</CourseCell>
          <CourseCell>¥148,375</CourseCell>
        </tr>

        {/* 8 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月4回　中高生選抜クラス（90分）
          </CourseCell>
          <CourseCell>¥8,000</CourseCell>
          <CourseCell>¥94,000</CourseCell>
        </tr>

        {/* 9 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月8回　［中高生選抜＋基礎］コース
          </CourseCell>
          <CourseCell>¥14,000</CourseCell>
          <CourseCell>¥166,000</CourseCell>
        </tr>

        {/* 10 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月2回　Acrobatクラス（60分）
          </CourseCell>
          <CourseCell>¥4,400</CourseCell>
          <CourseCell>—</CourseCell>
        </tr>

        {/* 11 */}
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
            borderBottom: "2px solid #2c3e50",
          }}
        >
          <CourseCell style={{ flex: 3 }}>月2回　Acrobatクラスのみ</CourseCell>
          <CourseCell>¥5,000</CourseCell>
          <CourseCell>—</CourseCell>
        </tr>
      </CourseTableContainer>

      <LessonExplanationContainer>
        <p>※金額は全て税込価格になります。</p>
        <p>
          ※受講料を年払いしていただくと少しお安くなっております。（アクロバットクラスは割引適用外。）
        </p>
        <p>※年度の途中での年払い制度のご利用は出来ません。</p>
      </LessonExplanationContainer>
    </BodyContainer>
  );
};

export default Lesson;
