import { styled } from "styled-components";

//TypoType 선언
export type TypoType = {
  color?: string;
  hover?: {
    color?: string;
    weight?: string;
  };
  activated?: boolean;
  $bold?: boolean;
};

const TypoRef = styled.div<TypoType>`
  color: ${(p) => (p.color ? `var(${p.color})` : `var(--gray-500)`)};
  transition: all 0.3s ease-in-out;
  &:hover {
    ${(p) =>
      p.hover &&
      `
        cursor: pointer;
        ${p.hover.color && `color:var(${p.hover.color});`}
        ${p.hover.weight && `font-weight: ${p.hover.weight};`}
    `}
  }
  word-break: keep-all;
`;

export const Title = styled(TypoRef)`
  font-size: 4rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? "900" : "700")};
  line-height: 4.75rem;

  font-family: "BMJUA" !important;
  @font-face {
    font-family: "BMJUA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Header1 = styled(TypoRef)`
  font-size: 3rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  line-height: 3.563rem;

  color: ${(p) => p.activated && "var(--gray-black)"};
`;

export const Header2 = styled(TypoRef)`
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.813rem;

  font-family: "BMJUA" !important;
  @font-face {
    font-family: "BMJUA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Description = styled(TypoRef)`
  font-size: 2rem;

  font-family: "BMJUA" !important;
  @font-face {
    font-family: "BMJUA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Detail = styled(TypoRef)`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.813rem;

  font-family: "BMJUA" !important;
  @font-face {
    font-family: "BMJUA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const RecruitText = styled(TypoRef)<{
  highlight?: Boolean;
  $bold?: Boolean;
}>`
  font-size: ${(p) => (p.highlight ? "2.5rem" : "2.25rem")};
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  font-style: normal;
  li {
    text-indent: -3rem;
    margin-left: 3rem;

    font-family: "BMJUA" !important;
    @font-face {
      font-family: "BMJUA";
      src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
  }
  line-height: 167%;

  font-family: "BMJUA" !important;
  @font-face {
    font-family: "BMJUA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
