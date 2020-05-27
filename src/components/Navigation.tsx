import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  > ul {
    display: none;
  }

  @media (min-width: 800px) {
    > ul {
      display: inline-block;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
`

const NavItem = styled.li`
  font-size: 1.3rem;
  display: inline-block;
  margin-left: 2rem;
  & a {
    color: white;
  }
`

const NavItemLink = ({ children, to }) => (
  <NavItem>
    <Link to={to}>{children}</Link>
  </NavItem>
)

const HomeLink = styled(Link)`
  font-size: 1.4rem;
  color: white;
`

export const Navigation = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Nav>
      <HomeLink to={`/`}>{title}</HomeLink>
      <ul>
        <NavItemLink to={`/about/`}>About</NavItemLink>
      </ul>
    </Nav>
  )
}
