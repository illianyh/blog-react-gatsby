import React from "react"
import { Container, FeatureImage, Content, Card } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <Card
          date="June 18, 2020"
          title="Lorem ipsum dolor sit amet"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Sem nulla pharetra diam sit amet nisl suscipit. Gravida quis blandit turpis cursus."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
