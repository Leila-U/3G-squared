import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">

              {/* Contact */}
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Feel free to reach out about the App.`
                  )}
                </S.Para>
                <a href="mailto:leila.uy@mail.utoronto.ca">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              
              {/* Tools */}
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Tools")}</S.Title>
                <a href="https://www.arcgis.com/index.html">
                  <S.Large>
                    {t("ArcGIS Online")}
                  </S.Large>
                </a>
                <a href="https://storymaps.arcgis.com/">
                  <S.Large>
                    {t("ESRI StoryMaps")}
                  </S.Large>
                </a>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <a href="https://www.youtube.com/channel/UCwAw9sorqR55IN6e_IyaUKg">
                  <S.Large>
                    {t("ESRI Youtube")}
                  </S.Large>
                </a>
                <a href="https://github.com/Adrinlol/landy-react-template">
                  <S.Large>
                    {t("Landy React Template")}
                  </S.Large>
                </a>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">

              {/* UTM Address */}
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>University of Toronto Mississauga</S.Para>
                <S.Para>3359 Mississauga Rd</S.Para>
                <S.Para>Mississauga</S.Para>
              </Col>

              {/* Team */}
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Team")}</S.Title>
                <a href="https://www.linkedin.com/in/leila-uy-306272180">
                  <S.Large>
                    {t("Leila Uy")}
                  </S.Large>
                </a>
                <a href="https://www.linkedin.com/in/nicole-mgl/">
                  <S.Large>
                    {t("Nika Moguilevskaia")}
                  </S.Large>
                </a>
                <a href="https://storymaps.arcgis.com/">
                  <S.Large>
                    {t("*Priya Patel")}
                  </S.Large>
                </a>
              </Col>

              {/*Language */}
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo-vector-01.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Leila-U/3G-squared"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/esricanada?lang=en"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/esri/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/esricanada/?hl=en"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/@Esri"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
