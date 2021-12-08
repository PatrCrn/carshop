import './App.css';
import Carlist from "./components/Carlist";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">
                    CarShop
                </Typography>
            </Toolbar>
        </AppBar>
        <Carlist />
    </div>
  );
}

export default App;
