import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const FooterWrap = styled.div`
  padding: 20px 0px;
  background-color: #006cb3;
  min-height: 40px;
  display: flex;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  @media (min-width: 0) and (max-width: 991.98px) {
    flex-direction: column;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`
const Logo = styled.div`
  img {
    width: 80px;
    height: 19.7px;
  }
  display: flex;
  margin: auto 0;
  @media (min-width: 0) and (max-width: 991.98px) {
    justify-content: center;
    img {
      margin-bottom: 20px;
    }
  }
`
const Info = styled.div`
  p, li {
    color: #eaeaea;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  li {
    &:after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 8px;
      background: #fff;
      margin: 0 5px;
    }
  }
  li:last-child {
    &:after {
      display: none;
    }
  }
  @media (min-width: 0) and (max-width: 767.98px) {
    p, li {
      font-size: 10px;
      color: #eaeaea;
      text-align: center;
    }
    li {
      &:after {
        display: none;
      }
    }
    margin-bottom: 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: auto;
    margin-bottom: 20px;
    p, li {
      font-size: 10px;
      text-align: center;
    }
    ul {
      display: flex;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1299.98px) { 
    margin: auto;
    p, li {
      font-size: 12px;
    }
    ul {
      display: flex;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) { 
    margin: auto;
    p, li {
      font-size: 14px;
    }
    ul {
      display: flex;
    }
  }
`
const Social = styled.div`
  display: flex;
  align-items: center;
  .blog {
    font-size: 10px;
    font-weight: bold;
    color: #006cb3;
    opacity: 0.8;
    border-radius: 60px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .social_btn {
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .insta {
    background-image: url("/static/images/insta.png");
    margin: 0 10px;
  }
  @media (min-width: 0) and (max-width: 767.98px) {
    justify-content: center;
    .blog {
      width: 90px;
      height: 16px;
    }
    .social_btn {
      width: 14px;
      height: 14px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    justify-content: center;
    .blog {
      width: 90px;
      height: 16px;
    }
    .social_btn {
      width: 14px;
      height: 14px;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1299.98px) { 
    .blog {
      width: 100px;
      height: 18px;
    }
    .social_btn {
      width: 16px;
      height: 16px;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) { 
    .blog {
      width: 100px;
      height: 24px;
    }
    .social_btn {
      width: 20px;
      height: 20px;
    }
  }
`
class Footer extends React.Component {
  render() {
    return ( 
      <FooterWrap>
        <Container>
          <Content>
            <Logo>
              <img src="/static/images/logo-footer.png"/>
            </Logo>
            <Info>
              <ul>
                <li>사업자등록번호 155-88-01025</li>
                {/* <li>대표 서장원</li> */}
                <li>서울시 마포구 케이스퀘어 708호</li>
                <li>이메일 : contact@tirrilee.io</li>
              </ul>
              <p>Copyright © Tirrilee 2019</p>
            </Info>
            <Social>
              <a href="https://blog.tirrilee.io/" target="_blank" className="blog">기술 블로그</a>
              <a href="https://www.instagram.com/tirrilee/" target="_blank"><div className="social_btn insta"></div></a>
            </Social>
          </Content>
        </Container>
      </FooterWrap>
    )
  }
}

export default Footer
