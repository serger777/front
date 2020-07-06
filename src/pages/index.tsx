import React, { Component } from "react"

import "~/assets/styles/index.css"
import { Layout } from "~/components/Layout/Layout"
import { Wrapper } from "~/components/wrapper/Wrapper"
import { Card } from "~/components/Сards/Card"
import { data, data2 } from "~/data/news.tsx"

export default class extends Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <h1>
            Новые <span>места</span> и <span>маршруты</span>
          </h1>
          <Card data={data} />
        </Wrapper>
        <Wrapper>
          <h1>
            <span>ТОП</span> 10 <span>мест Урала</span>
          </h1>
          <Card data={data2} type={"number"} />
        </Wrapper>
      </Layout>
    )
  }
}
