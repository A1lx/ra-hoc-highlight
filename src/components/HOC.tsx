import React from "react";
import { Popular } from "./Popular";
import { New } from "./New";

export const HOC = (Component: React.ComponentType, value: number) => {
  return class extends React.Component {
    state = {};

    render() {
      if (value >= 1000) {
        return <Popular><Component {...this.props}/></Popular>
      }
      if (value <= 100) {
        return <New><Component {...this.props}/></New>
      }
    }
  }
}