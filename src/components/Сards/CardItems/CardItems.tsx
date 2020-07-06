import classNames from "classnames"
import React from "react"

import "~/assets/styles/index.css"

import styles from "./card.module.css"

interface Props {
  type: string
  data: any
  view: string
}
export const CardItems = (props: Props) => {
  const { type, data, view } = props
  const classnames = classNames(
    styles.Card,
    { [styles.small]: type === "small" },
    { [styles.big]: type === "big" },
    { [styles.circle]: data.id == 1 },
  )
  return (
    <div className={classnames}>
      <div className={styles.top}>
        <div className={styles.label}>
          {data.new && <img alt="" src="/images/label/LabelNew.png" />}
          {data.trip && <img alt="" src="/images/label/LabelRoute.png" />}
          {data.bage && (
            <div className={styles.triangle_wrap}>
              <div className={styles.triangle}>
                <span>{data.bage}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.image_wrap}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${data.img ? data.img : "/images/no-image.png"})` }}
          />
        </div>
        {view === "number" && (
          <div className={styles.number_wrap}>
            <span>{data.id}</span>
          </div>
        )}
      </div>
      <h3 className={styles.title}>{data.title}</h3>
      <p className={styles.text}>{data.text}</p>
    </div>
  )
}
