import "./App.css";
import { AllBrutalItemsImg } from "./pages/BrutalityItems";
import { AllSurvivalItemsImg } from "./pages/SurvivalItems";
import { AllTacticsItemsImg } from "./pages/TacticsItems";
function App() {
	
	return (
		<div className="App">
			<AllBrutalItemsImg/>
			<AllSurvivalItemsImg/>
			<AllTacticsItemsImg/>
		</div>
	);
}

export default App;
