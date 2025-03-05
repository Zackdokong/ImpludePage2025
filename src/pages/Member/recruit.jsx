import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  Blank,
  Col,
  Wrap,
  Description,
  Header1,
  Header2,
  Row,
  Title,
  Detail,
  RecruitText,
} from "../../components/atomic";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RecruitBanner from "../../assets/RecruitBanner.png";
import "./recruit.css";
import * as constants from "../../constant/index.js";

function Intro() {
  return (
    <Col gap="7.5rem">
      <Title color={"--gray-black"} style={{ textAlign: "center" }}>
        시작하기에 앞서
      </Title>
      <Col gap="2rem">
        <Header2 color={"--gray-black"}>
          임플루드와 함께하기로 결정하셨다면, 임플루드 합류 여정을
          소개해드릴게요!
        </Header2>
        <Row justify="left" style={{ marginLeft: "-1rem" }} gap="1.2rem">
          {constants.applyProcess.map((process, i) => (
            <TitleCircle
              key={i}
              width={""}
              color={`--brand-${200 * (i + 1) - Math.floor(i / 3) * 100}`}
            >
              <CircleText color={i < 2 ? "--gray-black" : "--gray-white"}>
                {process.map((x, i) => (
                  <div key={i}>
                    {x}
                    {i + 1 === process.length ? null : <br />}
                  </div>
                ))}
              </CircleText>
            </TitleCircle>
          ))}
        </Row>
        <Description color={"--gray-400"} style={{ fontSize: "1.3rem"  }}>
          *상황에 따라 유동적으로 변경될 수 있어요.
        </Description>
      </Col>
    </Col>
  );
}

function Process() {
  return (
    <Col gap="9rem">
      <Col gap="0.5rem">
        <RecruitTitle color={"--gray-black"}>1. 포지션 선택하기</RecruitTitle>
        <RecruitText color={"--gray-black"}>
          임플루드의 포지션은 ‘FE, BE, 디자이너, 기획자’로 구성되어 있어요.
          <br />
          포지션은 중복 선택이 가능해요! 내가 자신있는 / 하고싶은 포지션을
          자유롭게 선택해주세요!
        </RecruitText>
      </Col>

      <Col gap="6rem">
        <Col>
          <Col gap="0.5rem">
            <RecruitTitle color={"--gray-black"}>
              2. 지원서 작성하기
            </RecruitTitle>
            <Col gap="2rem">
              <RecruitText color={"--gray-black"}>
                임플루드에서 활동하고싶은 포지션을 선택했다면, 이제 지원서를
                작성할 차례에요.
              </RecruitText>
              <Col gap="1rem">
                <RecruitText
                  color={"--gray-black"}
                  highlight={true}
                  $bold={true}
                  className="littlebig"
                >
                  지원서 작성 전 미리 확인해주시면 좋아요.
                </RecruitText>
                <RecruitText color={"--gray-black"}>
                  <li>
                    본인만의 포트폴리오가 있다면 꼭 제출해주는게 좋아요! 지원한
                    분야의 포트폴리오가 아니더라도 좋아요. 포트폴리오가 있으면
                    여러분의 지원서가 훨씬 매력적으로 보인답니다.
                  </li>
                  <li>
                    개발 직군의 경우, 기술 스택을 지원서에 작성해주시는게
                    좋아요! 없다면 작성하지 않으셔도 무방합니다.
                  </li>
                  <li>
                    지원서에는 자신의 성장 가능성을 구체적으로 알아볼 수 있는
                    내용이 들어가면 좋아요!
                  </li>
                </RecruitText>
              </Col>
              <RecruitText color={"--gray-black"}>
                지원서는 소중한 시간을 할애해 지원해주신 만큼 꼼꼼하게 살펴보고
                있어요!
              </RecruitText>
            </Col>
          </Col>
        </Col>
        <Row justify="center">
          <ApplyButton>
            <Link
              to="https://forms.gle/NG9rhGAD53xnREQq8"
              style={{ color: "white" }}
            >
              지원서 작성 바로가기
            </Link>
          </ApplyButton>
        </Row>
      </Col>

      <Col gap="0.5rem">
        <RecruitTitle color={"--gray-black"}>3. 면접 보기</RecruitTitle>
        <Col gap="3rem">
          <RecruitText color={"--gray-black"}>
            벌써 마지막 단계에요! 면접에서 합격한다면 임플루드의 일원으로서
            1년을 보내게 됩니다!
          </RecruitText>
          <Col gap="1rem">
            <RecruitText highlight={true} $bold={true} color={"--gray-black"}className="littlebig">
              면접 참여 전 미리 확인해주시면 좋아요.
            </RecruitText>
            <RecruitText color={"--gray-black"}>
              <li>
                편안한 분위기에서 면접을 진행하는 것을 추구해요. 압박 면접은
                절대 없을테니 걱정 않고 오셔도 돼요!
              </li>
              <li>
                임플루드가 면접에서 보고싶은 건 지원자님의 있는 그대로의
                모습이에요. 긴장하지 않고 있는 그대로의 자신을 보여준다면,
                매력적인 면접자가 될 수 있어요.
              </li>
              <li>
                임플루드의 면접은 지원자님을 일방적으로 평가하는 자리가 아니라,
                대화를 통해 임플루드에서 함께 성장할 수 있을지 서로를 알아보는
                자리에요. 면접이 임플루드에 대한 좋은 경험이 되도록 저희도 계속
                노력할게요!
              </li>
            </RecruitText>
          </Col>
          <RecruitText color={"--gray-black"}>
            너무 긴장하지 않고 편한 마음으로 면접을 보신다면, 좋은 결과를
            기대해볼만 해요!
          </RecruitText>
        </Col>
      </Col>
    </Col>
  );
}

function PartDetail() {
  const [part, setPart] = useState(0);
  const [detailPartDev, setDetailPartDev] = useState(0);
  return (
    <Col
      width="90vw"
      justify="center"
      style={{ position: "relative", right: "4rem" }}
    >
      <RecruitTitle
        color={"--gray-black"}
        style={{ textAlign: "center", width: "100%" }}
      >
        모집 분야 자세히 보기
      </RecruitTitle>
      <Row gap="1rem" justify="center" margin={"7.5rem 0 0 0"}>
        <PartButton
          style={{
            backgroundColor:
              part == 0 ? "var(--brand-600)" : "var(--gray-white)",
          }}
          onClick={() => {
            setPart(0);
          }}
        >
          <Description
            style={{ color: part == 0 ? "white" : "var(--gray-600)" }}
          >
            개발자
          </Description>
        </PartButton>
        <PartButton
          style={{
            backgroundColor:
              part == 1 ? "var(--brand-600)" : "var(--gray-white)",
          }}
          onClick={() => {
            setPart(1);
          }}
        >
          <Description
            style={{ color: part == 1 ? "white" : "var(--gray-600)" }}
          >
            디자이너
          </Description>
        </PartButton>
        <PartButton
          style={{
            backgroundColor:
              part == 2 ? "var(--brand-600)" : "var(--gray-white)",
          }}
          onClick={() => {
            setPart(2);
          }}
        >
          <Description
            style={{ color: part == 2 ? "white" : "var(--gray-600)" }}
          >
            기획자
          </Description>
        </PartButton>
      </Row>

      {part == 0 && (
        <Col gap="1.5rem">
          <Part title={constants.partTitle[0]} descriptions={constants.partDescription.intro.dev} />
          <Row justify="center" gap="1rem">
            <PartButton
              style={{
                backgroundColor:
                  detailPartDev == 0 ? "var(--brand-600)" : "var(--gray-white)",
              }}
              onClick={() => {
                setDetailPartDev(0);
              }}
            >
              <Description
                style={{
                  color: detailPartDev == 0 ? "white" : "var(--gray-600)",
                }}
              >
                프론트엔드
              </Description>
            </PartButton>
            <PartButton
              style={{
                backgroundColor:
                  detailPartDev == 1 ? "var(--brand-600)" : "var(--gray-white)",
              }}
              onClick={() => {
                setDetailPartDev(1);
              }}
            >
              <Description
                style={{
                  color: detailPartDev == 1 ? "white" : "var(--gray-600)",
                }}
              >
                백엔드
              </Description>
            </PartButton>
          </Row>
          {detailPartDev == 0 && (
            <>
              <Part
                title={constants.partTitle[1]}
                descriptions={constants.partDescription.plan.fe}
              />
              <Part
                title={constants.partTitle[2]}
                descriptions={constants.partDescription.experience.fe}
              />
            </>
          )}
          {detailPartDev == 1 && (
            <>
              <Part
                title={constants.partTitle[1]}
                descriptions={constants.partDescription.plan.be}
              />
              <Part
                title={constants.partTitle[2]}
                descriptions={constants.partDescription.experience.be}
              />
            </>
          )}
        </Col>
      )}
      {part == 1 && (
        <Col gap="5rem">
          <Part
            title={constants.partTitle[0]}
            descriptions={constants.partDescription.intro.design}
          />
          <Part
            title={constants.partTitle[1]}
            descriptions={constants.partDescription.plan.design}
          />
          <Part
            title={constants.partTitle[2]}
            descriptions={constants.partDescription.experience.design}
          />
        </Col>
      )}
      {part == 2 && (
        <Col gap="5rem">
          <Part
            title={constants.partTitle[0]}
            descriptions={constants.partDescription.intro.planner}
          />
          <Part
            title={constants.partTitle[1]}
            descriptions={constants.partDescription.plan.planner}
          />
          <Part
            title={constants.partTitle[2]}
            descriptions={constants.partDescription.experience.planner}
          />
        </Col>
      )}
    </Col>
  );
}

export default function RecruitPage() {
  return (
    <>
      <Header />
      <div className="recruitPage">
        <BannerImage src={RecruitBanner} />
        <Col margin="0 7.5rem" align="flex-start">
          <Col gap="15rem" margin="13.75rem auto" width="100%">
            <Intro />
            <Process />
            <PartDetail />
          </Col>
        </Col>
      </div>
      <Footer />
    </>
  );
}

const BannerImage = styled.img`
  width: 100%;
  background: gray;
`;

const TitleCircle = styled.div`
font-family: 'NanumSquareNeoExtraBold' !important;
@font-face {
    font-family: 'NanumSquareNeoExtraBold';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.ttf) format("truetype");
}
  display: flex;
  flex-basis: 11vw;
  flex-shrink: 0;
  width: 11vw;
  height: 11vw;
  @media (max-width: 1600px) {
    flex-basis: 18vw;
    width: 18vw;
    height: 18vw;
  }
  @media (max-width: 600px) {
    flex-basis: 22vw;
    width: 22vw;
    height: 22vw;
  }
  border-radius: 50%;
  margin: 0 -3.125rem 0 0;
  ${(p) => p.color && `background-color: var(${p.color});`}
  justify-content: center;
  align-items: center;
`;

const CircleText = styled(Header2)`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    box-sizing: border-box;
    padding-right: 1rem;
  }

font-family: 'NanumSquareNeoExtraBold';
@font-face {
    font-family: 'NanumSquareNeoExtraBold';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.ttf) format("truetype");
}
`;

const ApplyButton = styled.button`
  display: flex;
  padding: 1.5rem 2.156rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3.188rem;
  background: var(--brand-500);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  &: hover {
    background: var(--brand-600);
  }
`;

const PartButton = styled.button`
  display: flex;
  padding: 1.5rem 2.156rem;
  align-items: center;
  border-radius: 3.188rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const RecruitTitle = styled(Title)`
  font-size: 3rem;
font-family: 'NanumSquareNeoExtraBold';
@font-face {
    font-family: 'NanumSquareNeoExtraBold';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.ttf) format("truetype");
}
`;

function Part({ title, descriptions }) {
  const itemList = Array.isArray(descriptions) ? descriptions : [];
  return (
    <Col align={"flex-start"} gap={"5rem"} padding={"5rem 0"} width={"100%"}>
      <Title color="black" style={{ fontSize: "3rem" }}>
        {title}
      </Title>
      <Col align="flex-start">
        {itemList.map((item, index) => (
          <RecruitText
            key={index}
            color="black"
            highlight={true}
            style={{ fontSize: "1.8rem" }}
          >
            <li>{item}</li>
          </RecruitText>
        ))}
      </Col>
    </Col>
  );
}
