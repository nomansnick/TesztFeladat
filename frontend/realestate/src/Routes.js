import { Switch, Route } from "react-router-dom";
import BrowseOneItem from "./browseOne/BrowseOneItem";
import BrowseAll from "./browseAll/BrowseAll";
import Connections from "./notImplemented_TODO/Connections";

export default function Routes() {
  return (
    <Switch>
      <Route path="/browse/:id">
        <BrowseOneItem />;
      </Route>
      <Route path="/connections">
        <Connections />;
      </Route>
      <Route path="/">
        <BrowseAll title="Browse" />;
      </Route>
    </Switch>
  );
}
