import { Switch, Route } from "react-router-dom";
import BrowseOneItem from "./BrowseOneItem";
import BrowseAll from "./BrowseAll";

export default function Routes() {
  return (
    <Switch>
      <Route path="/browse/:id">
        <BrowseOneItem />;
      </Route>
      <Route path="/">
        <BrowseAll />;
      </Route>
    </Switch>
  );
}
