import React from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

import Logo from "../../../assets/images/7135.png";

const TableContainer = styled.table`
  width: 100%;
  border: 2px solid #34495e;
  margin-bottom: 10px;
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
    font-size: 12px;
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
          <TimetableCell></TimetableCell>
          <TimetableCell>FRI</TimetableCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            16:00
            <br />|<br />
            17:20
          </TimetableCell>
          <AllocationCell>Commin soon...</AllocationCell>
          <AllocationCell>
            <TimetableCourseName> L1</TimetableCourseName>
            <br />
            年中~年長
          </AllocationCell>
          <AllocationCell></AllocationCell>
          <TimetableCell></TimetableCell>
          <AllocationCell style={{ borderRight: "none" }}></AllocationCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            17:40
            <br />|<br />
            18:30
          </TimetableCell>
          <AllocationCell>
            <TimetableCourseName>Jr.E</TimetableCourseName>
            <br />
            <p>
              <BeginnerMarck src={Logo} />
              小1~小3
            </p>
          </AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.D</TimetableCourseName>
            <br />
            小1~小3
          </AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.C</TimetableCourseName>
            <br />
            小1~小3
          </AllocationCell>
          <TimetableCell />
          <AllocationCell style={{ borderRight: "none" }} />
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell>
            18:50
            <br />|<br />
            19:40
          </TimetableCell>
          <AllocationCell></AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.B</TimetableCourseName>
            <br />
            小4~小6
          </AllocationCell>
          <AllocationCell>
            <TimetableCourseName>Jr.A</TimetableCourseName>
            <br />
            小4~小6
          </AllocationCell>
          <TimetableCell>
            18:20
            <br />|<br />
            19:30
          </TimetableCell>
          <AllocationCell style={{ borderRight: "none" }}>
            <TimetableCourseName>基礎</TimetableCourseName>
            <br />
            小学生以上
          </AllocationCell>
        </tr>
        <tr style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <TimetableCell style={{ borderBottom: "none" }}>
            20:00
            <br />|<br />
            21:00
          </TimetableCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <AllocationCell style={{ borderBottom: "none" }}></AllocationCell>
          <AllocationCell style={{ borderBottom: "none" }}>
            <TimetableCourseName>Teen's</TimetableCourseName>
            <br />
            中学生以上
          </AllocationCell>
          <TimetableCell style={{ borderBottom: "none" }}>
            19:30
            <br />|<br />
            20:30
          </TimetableCell>
          <AllocationCell style={{ borderRight: "none", borderBottom: "none" }}>
            <TimetableCourseName>S</TimetableCourseName>
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
          ¥1,000円
        </PriceNotationItem>
        <PriceNotationItem>
          <p style={{ fontSize: "16px" }}>年会費</p>
          ¥1,200円
        </PriceNotationItem>
        <PriceNotationItem>
          <p style={{ fontSize: "16px" }}>事務手数料</p>
          ¥2,000円
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
          <CourseCellTop>年払い受講料</CourseCellTop>
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
          <CourseCell style={{ flex: 3 }}>
            月4回 チアクラス (50分) コース
          </CourseCell>
          <CourseCell>¥5,000</CourseCell>
          <CourseCell>¥58,750</CourseCell>
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
            月4回 基礎クラス (60分) コース
          </CourseCell>
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
          <CourseCell style={{ flex: 3 }}>月8回 (チア+基礎) コース</CourseCell>
          <CourseCell>¥10,000</CourseCell>
          <CourseCell>¥118,750</CourseCell>
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
            月4回 Teen'sクラス ※中学生以上
          </CourseCell>
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
          <CourseCell style={{ flex: 3 }}>
            月8回 (Teen's+基礎) コース
          </CourseCell>
          <CourseCell>¥10,500</CourseCell>
          <CourseCell>¥124,625</CourseCell>
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
            Sクラス ※オーディション合格者のみ受講可
          </CourseCell>
          <CourseCell>¥7,000</CourseCell>
          <CourseCell>¥82,250</CourseCell>
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
          <CourseCell style={{ flex: 3 }}>Sクラス+基礎 コース</CourseCell>
          <CourseCell>¥12,000</CourseCell>
          <CourseCell>¥142,438</CourseCell>
        </tr>
      </CourseTableContainer>
      <LessonExplanationContainer>
        <p>※価格は全て税込価格になります。</p>
        <p>※受講料を年払いにしていただくと少しお安くなっております。</p>
        <p>※年度途中での年払い制度のご利用はできません。</p>
      </LessonExplanationContainer>
    </React.Fragment>
  );
};

export default Lesson;

/*a
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
            <span style={{ fontSize: "22px" }}> L1</span>
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
            <span style={{ fontSize: "22px" }}>Jr.E</span>
            <br />
            小1~小3
          </AllocationCell>
          <AllocationCell>
            <span style={{ fontSize: "22px" }}>Jr.D</span>
            <br />
            小1~小3
          </AllocationCell>
          <AllocationCell style={{ borderRight: "none" }}>
            <span style={{ fontSize: "22px" }}>Jr.C</span>
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
            <span style={{ fontSize: "22px" }}>Jr.B</span>
            <br />
            小4~小6
          </AllocationCell>
          <AllocationCell style={{ borderRight: "none" }}>
            <span style={{ fontSize: "22px" }}>Jr.A</span>
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
            <span style={{ fontSize: "22px" }}>Teen's</span>
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
            <span style={{ fontSize: "22px" }}>基礎</span>
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
            <span style={{ fontSize: "22px" }}>S</span>
          </AllocationLongCell>
        </tr>
      </TableShortContainer>
*/

/*const TableShortContainer = styled.table`
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
  font-size: 16px;
  padding: 15px 0;
  text-align: center;
  border-right: 2px solid #34495e;
  border-bottom: 2px solid #34495e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;*/
