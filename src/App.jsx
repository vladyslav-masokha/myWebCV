import { MainContent } from "./components/layout/MainContent.jsx";
import { Sidebar } from "./components/layout/Sidebar.jsx";

function App() {
  return (
    <main className="page-shell">
      <Sidebar />
      <MainContent />
    </main>
  );
}

export default App;
