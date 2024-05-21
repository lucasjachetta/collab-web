import SideNav from "../../components/SideNav/SideNav";
import s from "./ObjectivesStyles";
import { Link } from "react-router-dom";
import one from "../../assets/Objectives/1.svg";
import two from "../../assets/Objectives/2.svg";
import three from "../../assets/Objectives/3.svg";
import four from "../../assets/Objectives/4.svg";
import five from "../../assets/Objectives/5.svg";
import six from "../../assets/Objectives/6.svg";
import seven from "../../assets/Objectives/7.svg";
import eight from "../../assets/Objectives/8.svg";
import nine from "../../assets/Objectives/9.svg";
import ten from "../../assets/Objectives/10.svg";
import eleven from "../../assets/Objectives/11.svg";
import twelve from "../../assets/Objectives/12.svg";
import thirteen from "../../assets/Objectives/13.svg";
import fourteen from "../../assets/Objectives/14.svg";
import fiveteen from "../../assets/Objectives/15.svg";
import sixteen from "../../assets/Objectives/16.svg";
import seventeen from "../../assets/Objectives/17.svg";

function Objectives() {
  const images = [
    one, 
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fiveteen,
    sixteen,
    seventeen,
  ];

  let objectives = [];

  images.forEach((element) => {
    objectives.push(
      <a href={"https://painel.tce.sp.gov.br/pentaho/api/repos/%3Apublic%3AODS%3AODS.wcdf/generatedContent?userid=anony&password=zero"} target="blank">
        <img src={element} />
      </a>
    );
  });

  return (
    <s.MainContainer>
      <SideNav />
      <s.PageContainer>
        <s.ObjectivesHeader>
          <h1>Os 17 Objetivos</h1>
        </s.ObjectivesHeader>

        <s.ObjectivesDescription>
          <h2>
            Saiba mais detalhes sobre cada um dos Objetivos para o
            Desenvolvimento Sustentável
          </h2>
        </s.ObjectivesDescription>
        <s.Objectives>
           {objectives}
        </s.Objectives>
      </s.PageContainer>
    </s.MainContainer>
  );
}

export default Objectives;
