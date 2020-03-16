import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import Nav from 'components/nav'

const Wrap = styled.div`
  width: 100%;
  color: #333;
`
const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`
const Description = styled.p`
  margin: 0;
  width: 100%;
  padding-top: 20px;
  text-align: center;
`
const Row = styled.div`
  max-width: 880px;
  margin: 60px auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Number = styled.h1`
  font-size: 40px;
`
const Card = styled.a`
  cursor: pointer;
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;
  &:hover {
    border-color: #067df7;
  }
  h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }
  p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`
const Button = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  border: 1px solid #000;
  border-radius: 8px;
  &:hover {
    background: #000;
    color: #fff;
  }
`
@inject('Counter', 'Post') // *_app.js <Provider>에 넘겨준 store명과 일치해야함. *inject: 컴포넌트에서 store에 접근 가능하게 함. 해당 store에 있는 값을 컴포넌트의 props로 주입시켜줌.
@observer
class Home extends React.Component {
  componentDidMount() {
    this.props.Post.getData()
  }
  render(){
    console.log(this.props.Post.data)
    const { Post, Counter } = this.props
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <Wrap>
          <Title>Next.js with Mobx Boilerplate</Title>
          <Description>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </Description>
          <Row>
            <Number>
              {Counter.num}
            </Number>
          </Row>
          <Row>
            <Button onClick={Counter.increase}>+</Button>
            <Button onClick={Counter.decrease}>-</Button>
          </Row>
          <Row>
            {
              Post.data && Post.data.map((item, idx) => {
                return (
                  <Card>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </Card>
                )
              })
            }
          </Row>
        </Wrap>
      </div>
    )
  }
}

export default Home
