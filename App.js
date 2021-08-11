/*import React from "react";
import CoffeeAutonomous from "./screens/CoffeeAutonomous";
import UnSplashApi from './screens/UnSplashApi';
import HstConstruction from './screens/HstConstruction';
export default function App() {
  //return <CoffeeAutonomous />;
//return <UnSplashApi/>;
  return <HstConstruction/>;
}*/
import React from 'react';
import Navigator from './routes/HomeStack';

export default function App() {
  return (
    <Navigator/>
  );
}