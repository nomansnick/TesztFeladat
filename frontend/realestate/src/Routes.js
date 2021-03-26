import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BrowseOneItem from './browseOne/BrowseOneItem'
import BrowseAll from './browseAll/BrowseAll'
import Connections from './notImplemented_TODO/Connections'
import Saved from './notImplemented_TODO/Saved'
import Notifications from './notImplemented_TODO/Saved'
import Categories from './notImplemented_TODO/Categories'
import AllItems from './notImplemented_TODO/AllItems'

export default function Routes(props) {
  const { resolution, device } = props
  return (
    <Switch>
      <Route path="/browse/:id">
        <BrowseOneItem resolution={resolution} device={device} />;
      </Route>
      <Route path="/connections">
        <Connections />
      </Route>
      <Route path="/saved">
        <Saved />
      </Route>
      <Route path="/notifications">
        <Notifications />
      </Route>
      <Route path="/all">
        <AllItems />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/">
        <BrowseAll title="Browse" resolution={resolution} device={device} />
      </Route>
    </Switch>
  )
}
