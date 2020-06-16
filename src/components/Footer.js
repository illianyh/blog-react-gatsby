import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://github.com/illianyh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="linkedin logo" />
          </a>
        </FooterSocialIcons>
        <p>© 2020 Blog. All rights reserved</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
