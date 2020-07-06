import React, { useEffect } from "react"

import "~/assets/styles/index.css"

import { CardItems } from "./CardItems/CardItems"
import styles from "./index.module.css"

export const Card: React.FC<any> = ({ type, data }) => {
  const items: any = data.map((item: any, idx: number) => {
    let typeName = "small"
    if (idx < 2) {
      typeName = "big"
    }
    return <CardItems key={item.id} data={item} type={typeName} view={type} />
  })
  return <div className={styles.Card}>{items}</div>
}
