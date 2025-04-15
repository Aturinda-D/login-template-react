import "./App.css";
import CompanyDetails from "./components/CompanyDetails";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  /**
   * === FEATURES ===
   *  -> Responsive UI
   *  -> Backdrop gradient
   *  -> Interactive buttons
   *  -> Default values for inputs
   *  -> Company icon and name in browser tab
   *  -> Show/hide password toggle
   */
  return (
    <main>
      <CompanyDetails />
      <RegistrationForm />
    </main>
  );
}

export default App;
