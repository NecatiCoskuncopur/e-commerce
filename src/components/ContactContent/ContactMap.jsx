import styled from 'styled-components';

const ContactMap = () => {
  return (
    <Container>
      <IFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19875.243418309292!2d-0.016054969566643904!3d51.48742716873821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9cea79975f3%3A0x1470a7a162e4ca6c!2sGreenwich%2C%20Londra%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1697416980885!5m2!1str!2str"
        title="map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Container>
  );
};

export default ContactMap;

const Container = styled.section`
  width: 100%;
  height: 450px;
`;

const IFrame = styled.iframe`
  border: 0;
  height: 100%;
  width: 100%;
`;
