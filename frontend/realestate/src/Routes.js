import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BrowseOneItem from './browseOne/BrowseOneItem'
import BrowseAll from './browseAll/BrowseAll'
import Connections from './notImplemented_TODO/Connections'

export default function Routes(props) {
  const { resolution, device } = props
  return (
    <Switch>
      <Route path="/browse/:id">
        <BrowseOneItem resolution={resolution} device={device} />;
      </Route>
      <Route path="/connections">
        <Connections />;
      </Route>
      <Route path="/">
        <BrowseAll title="Browse" />;
      </Route>
    </Switch>
  )
}
