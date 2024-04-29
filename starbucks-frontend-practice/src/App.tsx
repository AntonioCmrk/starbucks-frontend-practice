import "./App.css";
import { MainLayout } from "./laylout/MainLayout";
import { Rewards } from "./pages/Rewards";

const App = () => (
  <div>
    <MainLayout>
      <Rewards />
    </MainLayout>
  </div>
);

export default App;
