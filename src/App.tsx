import { Traslator } from './components/traslator/Traslator';
import './App.css';

interface AppProps {
    title: string;
}
function App(props: AppProps) {
    return (
        <>
            <div className="app">
                <div className="app-title">{props.title}</div>
                <Traslator />
            </div>
        </>
    );
}

export default App;
