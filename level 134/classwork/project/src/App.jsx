import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComponent";
import Fallback from "./components/FallBack";

function App() {
  return (
    <div>
      <h1>React Error Boundary Demo</h1>

      <ErrorBoundary FallbackComponent={Fallback}>
        <BuggyComponent count={1} />
        <BuggyComponent count={2} />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <BuggyComponent count={3} />
      </ErrorBoundary>
      <BuggyComponent count={4} />
    </div>
  );
}

export default App;