import React from 'react'
import { View } from 'react-native'

export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
        <View
            style={{ backgroundColor: 'red', flex: 1 }}
        />
    )
  }
}
