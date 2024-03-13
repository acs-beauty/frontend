import styled from "@emotion/styled";
// import { Link } from "react-router-dom";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// export const StyleLink = styled.a`
// display: flex;
// align-items: center;
// /* font-family: ${(p) => p.theme.fonts.body};
//   font-style: normal;
//   font-weight: ${(p) => p.theme.fontWeights.middle};
//   font-size: 12px;
//   line-height: ${(p) => p.theme.lineHeights.heading};
//   color: ${(p) => p.theme.colors.dark};
//   text-decoration: none; */
//   color: #5A5757;
// font-family: Montserrat;
// font-size: 12px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
// letter-spacing: 0.36px;
// `;
export const ContainerLink = styled.div`
display: flex;
align-items: center;
gap: 2px;
margin-bottom: 49px;
/* padding: 16px; */
/* background: gray; */
color: #5A5757;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.36px;
@media screen and (max-width: 728px){
  /* padding: 8px 29px; */
};
@media screen and (max-width: 428px){
  /* padding: 8px 15px; */
}
`;
// export const StyleArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
// && {
//   height: 8px;

// }
// `;