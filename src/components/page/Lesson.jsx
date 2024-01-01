import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

import Logo from "../../../assets/images/7135.png";

const TableContainer = styled.table`
  width: 100%;
  border: 2px solid #34495e;
  margin-bottom: 10px;
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
  font-size: 22px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const BeginnerMarck = styled.img`
  height: 16px;
  display: inline-block;
  transform: translateY(15%);
  margin-right: 5px;
  @media (max-width: 600px) {
    height: 10px;
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
    setTimeout(() => {
      setLoad(true);
    }, 300);
  }, []);
  return (
    <BodyContainer load={load}>
      <Title title="LESSON SCHEDULE"></Title>
      <TableContainer>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell></TimetableCell>
          <WeekTimetableCell>TUE</WeekTimetableCell>
          <TimetableCell></TimetableCell>
          <WeekTimetableCell>WED</WeekTimetableCell>
          <WeekTimetableCell>THU</WeekTimetableCell>
          <TimetableCell></TimetableCell>
          <WeekTimetableCell>FRI</WeekTimetableCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            16:30
            <br />|<br />
            17:20
          </TimetableCell>
          <AllocationCell>
            <TimetableCourseName>L</TimetableCourseName>
            <br />
            <p>年中~年長</p>
            <p>定員15</p>
          </AllocationCell>
          <TimetableCell>
            17:30
            <br />|<br />
            18:20
          </TimetableCell>
          <AllocationCell>
            <TimetableCourseName>Jr.D</TimetableCourseName>
            <br />
            <p>
              <BeginnerMarck src={Logo} />
              小1~小3
            </p>
            <p>定員15</p>
          </AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.C</TimetableCourseName>
            <br />
            <p>小1~小3</p>
            <p>定員15</p>
          </AllocationCell>
          <TimetableCell>
            18:00
            <br />|<br />
            19:00
          </TimetableCell>
          <AllocationCell style={{ borderRight: "none" }}>
            <TimetableCourseName>基礎</TimetableCourseName>
            <br />
            <p>小学生以上</p>
            <p>定員15(60分)</p>
          </AllocationCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            17:30
            <br />|<br />
            18:50
          </TimetableCell>
          <AllocationCell>
            <TimetableCourseName>基礎</TimetableCourseName>
            <br />
            <p>小学生以上</p>
            <p>定員15(60分)</p>
          </AllocationCell>
          <TimetableCell>
            18:30
            <br />|<br />
            19:20
          </TimetableCell>
          <AllocationCell>
            <TimetableCourseName>Jr.B</TimetableCourseName>
            <br />
            <p>
              <BeginnerMarck src={Logo} />
              小4~小6
            </p>
            <p>定員15</p>
          </AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.A</TimetableCourseName>
            <br />
            <p>小4~小6</p>
            <p>定員15</p>
          </AllocationCell>
          <TimetableCell>
            19:10
            <br />|<br />
            20:25
          </TimetableCell>
          <AllocationCell style={{ borderRight: "none" }}>
            <TimetableCourseName>S</TimetableCourseName>
            <br />
            選抜クラス
          </AllocationCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell style={{ borderBottom: "none" }}></TimetableCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <TimetableCell style={{ borderBottom: "none" }}>
            19:40
            <br />|<br />
            20:40
          </TimetableCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <AllocationCell style={{ borderBottom: "none" }}>
            <TimetableCourseName>Teen's</TimetableCourseName>
            <br />
            <p>中学生以上</p>
            <p>定員15</p>
          </AllocationCell>
          <TimetableCell style={{ borderBottom: "none" }}></TimetableCell>
          <AllocationCell style={{ borderRight: "none", borderBottom: "none" }}>
            <TimetableCourseName></TimetableCourseName>
          </AllocationCell>
        </tr>
      </TableContainer>
      <LessonExplanationContainer>
        <p>※タイムテーブルは年度毎に変更していく可能性があります。</p>
        <p>
          ※
          <img
            src={Logo}
            style={{ height: "12px", transform: "translateY(15%)" }}
            alt="初心者マーク"
          ></img>
          マーク・・・ダンス歴１年未満の方対象ビギナークラス
        </p>
        <p>※木曜日クラス (A・C) ・・・受講歴２年以上のアドバンスクラス</p>
        <p>
          ※Sクラス・・・小学４年生以上の選抜クラス
          (オーデション合格者のみ受講可){" "}
        </p>
      </LessonExplanationContainer>
      <Title title="COURSE"></Title>
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
          <CourseCellTop>受講料月払い</CourseCellTop>
          <CourseCellTop>受講料年払い</CourseCellTop>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
            borderTop: "2px solid #2c3e50",
          }}
        >
          <CourseCell style={{ flex: 3 }}>月4回 (50分) コース</CourseCell>
          <CourseCell>¥5,500</CourseCell>
          <CourseCell>¥64,625</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>月8回 (50分+基礎) コース</CourseCell>_
          <CourseCell>¥11,000</CourseCell>
          <CourseCell>¥130,625</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>
            月4回 基礎クラスのみ(60分)
          </CourseCell>
          <CourseCell>¥6,000</CourseCell>
          <CourseCell>¥70,500</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>Sクラス※据え置き</CourseCell>
          <CourseCell>¥7,000</CourseCell>
          <CourseCell>¥82,250</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>Sクラス+基礎</CourseCell>
          <CourseCell>¥12,500</CourseCell>
          <CourseCell>¥148,438</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
          }}
        >
          <CourseCell style={{ flex: 3 }}>Teensクラス(60分)</CourseCell>
          <CourseCell>¥6,000</CourseCell>
          <CourseCell>¥70,500</CourseCell>
        </tr>
        <tr
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 0px",
            borderBottom: "2px solid #2c3e50",
          }}
        >
          <CourseCell style={{ flex: 3 }}>Teensクラス(T+基礎)</CourseCell>
          <CourseCell>¥11,500</CourseCell>
          <CourseCell>¥136,563</CourseCell>
        </tr>
      </CourseTableContainer>
      <LessonExplanationContainer>
        <p>※価格は全て税込価格になります。</p>
        <p>※受講料を年払いにしていただくと少しお安くなっております。</p>
        <p>※年度途中での年払い制度のご利用はできません。</p>
      </LessonExplanationContainer>
    </BodyContainer>
  );
};

export default Lesson;
