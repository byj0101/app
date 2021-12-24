// global import
import { FunctionComponent, useState } from "react";
import { useRoutes } from "react-router-dom";

// local import
import Navigation from "./components/Navigation";
import RightDrawer from "./components/RightDrawer";
import Home from "./viewStack/Home";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const customComponent = (
    Component: FunctionComponent,
    layout = true,
    defaultProps: { [key: string]: any } = {}
  ) => {
    const pages = [
      "Why AlgoLaunch",
      "Product",
      "Road Map",
      "Team",
      "Audit",
      "Chart",
      "Launch App",
    ];

    if (layout) {
      return (
        <div>
          <Navigation setIsOpenDrawer={setIsOpenDrawer} pages={pages} />
          <RightDrawer
            isOpenDrawer={isOpenDrawer}
            setIsOpenDrawer={setIsOpenDrawer}
            pages={pages}
          />
          <Component {...defaultProps} />
        </div>
      );
    } else {
      return <Component {...defaultProps} />;
    }
  };

  const element = useRoutes([
    {
      path: "/",
      element: customComponent(Home),
    },
  ]);
  return element;
}

export default App;
