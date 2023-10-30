import { ActionArea, Container, NewsList } from 'components';

import ImageContent from './ImageContent';
import Questions from './Questions';
import Features from './Features';

const AboutContent = () => {
  return (
    <>
      <Container>
        <ImageContent />
      </Container>
      <ActionArea />
      <Container>
        <Questions />
      </Container>
      <Features />
      <Container>
        <NewsList />
      </Container>
    </>
  );
};

export default AboutContent;
