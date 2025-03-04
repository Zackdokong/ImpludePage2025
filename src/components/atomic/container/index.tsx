import styled from "styled-components";
import { widthAndHeight } from "../interfaces";
import { rowColTypes } from "./container";

export const Row = styled.div<rowColTypes>`
  display: flex;
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) => props.padding && `padding: ${props.padding}`}
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

export const Col = styled(Row)`
  flex-direction: column;
  font-family: "NanumSquareNeoExtraBold" !important;
  @font-face {
    font-family: "NanumSquareNeoExtraBold";
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot?#iefix)
        format("embedded-opentype"),
      url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff)
        format("woff"),
      url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.ttf)
        format("truetype");
  }
`;

export const Wrap = styled(Row)`
  flex-wrap: wrap;
  ${(props) => props.alignContent && `align-content: ${props.alignContent}`}
`;

export const Blank = styled.div<widthAndHeight>`
  width: ${(p) => p.width && p.width};
  height: ${(p) => p.height && p.height};
`;
