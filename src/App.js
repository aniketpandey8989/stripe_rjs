import { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";
import routes from "./routes";

function App() {
  const loadingCount = useSelector((state) => state.app.loadingCount);

  return (
    <Suspense fallback={Loader}>
      <ToastContainer />

      <Router>
        <Switch>
          {routes.map((dt, idx) => (
            <Route
              key={idx}
              path={dt.path}
              component={dt.component}
              exact={dt.exact}
              name={dt.name}
            />
          ))}
        </Switch>
      </Router>

      {loadingCount > 0 && <Loader />}
    </Suspense>
  );
}

export default App;
