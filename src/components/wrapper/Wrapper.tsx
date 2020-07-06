import React from "react"

import "~/assets/styles/index.css"

import styles from "./index.module.css"

export const Wrapper: React.FC = ({ children }) => (
  <React.Fragment>
    <div className={styles.Wrapper}>{children}</div>
  </React.Fragment>
)
