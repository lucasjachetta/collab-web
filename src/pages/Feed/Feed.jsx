import SideNav from "../../components/SideNav/SideNav";
import Bradesco from "../../assets//Feed/StorysItems/Bradesco.svg";
import Henrique from "../../assets/Feed/StorysItems/Henrique.svg";
import Marina from "../../assets//Feed/StorysItems/Marina.svg";
import Natura from "../../assets//Feed/StorysItems/Natura.svg";
import ProfilePhoto from "../../assets/ProfilePhoto.svg";
import ForumItems from "../../assets/Feed/ForumItems.svg";
import PublicationPhoto from "../../assets/Feed/PublicationPhoto.svg";
import ReactionItems from "../../assets/Feed/ReactionItems.svg";

import s from "./FeedStyles";

function Feed() {
  return (
    <s.MainContainer>
      <SideNav />

      <s.CenterContainer>
        <s.StorysContainer>
          <s.StoryItem>
            <img src={ProfilePhoto} />
            <span>Seu Status</span>
          </s.StoryItem>
          <s.StoryItem>
            <img src={Bradesco} />
            <span>Bradesco</span>
          </s.StoryItem>
          <s.StoryItem>
            <img src={Henrique} />
            <span>Henrique</span>
          </s.StoryItem>
          <s.StoryItem>
            <img src={Natura} />
            <span>Natura</span>
          </s.StoryItem>
          <s.StoryItem>
            <img src={Marina} />
            <span>Marina</span>
          </s.StoryItem>
          <s.StoryItem>
            <img src={Bradesco} />
            <span>Bradesco</span>
          </s.StoryItem>
        </s.StorysContainer>
        <s.FeedContainer>
        <s.PublicationContainer>
            <s.HeaderPublication>
                <s.StoryItem>
                  <img src={ProfilePhoto} height={80} />              
                </s.StoryItem>

                <s.HeaderDescription>
                    <h3 >Rafaela Albuquerque</h3>
                    <p>@rafa_alb</p>
                </s.HeaderDescription>

            </s.HeaderPublication>

            <s.PublicationDescription>
                Hoje tivemos mais uma ação para arrecadar alimentos na Avenida Paulista! Quer ser voluntário nas próximas ações?
            </s.PublicationDescription>


            <s.ImageContainer>
              <img src={PublicationPhoto} width={700}/>
            </s.ImageContainer>

            <s.ImageReaction>
             <img src={ReactionItems}/>
            </s.ImageReaction>

          </s.PublicationContainer>
        </s.FeedContainer>
      </s.CenterContainer>
      <s.ForumContainer>
        <s.ForumItemsContainer>
          <s.SectionTitle>Tópicos em Destaque</s.SectionTitle>
          <img src={ForumItems}/>
        </s.ForumItemsContainer>
      </s.ForumContainer>
    </s.MainContainer>
  );
}

export default Feed;
