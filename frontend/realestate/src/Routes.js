import { Switch, Route } from "react-router-dom";
import BrowseOneItem from "./BrowseOneItem";
import BrowseAll from "./BrowseAll";
import Connections from "./Connections";

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
