import * as React from "react"
import Header from "./Header"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <Header />
        <main style={{ width: `100%` }}>{children}</main>
      </div>
    </>
  )
}

export default Layout
