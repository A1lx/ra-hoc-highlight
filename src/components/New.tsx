import { PropsWithChildren } from "react"

export const New = (props: PropsWithChildren) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
}