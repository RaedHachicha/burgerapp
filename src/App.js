
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
function App() {
  console.log(BurgerBuilder.toString)
  return (
    <div>
     <Layout>
     <BurgerBuilder/>
     </Layout>
    </div>
  );
}

export default App;
