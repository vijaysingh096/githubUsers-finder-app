import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import User from "./pages/User";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/githubContext/GitHubContext";
import { AlertProvoider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvoider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/user/:login" component={User} />
                <Route path="/notfound" component={NotFound} />
                <Route path="/" component={Home} />
                <Route path="/*" component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvoider>
    </GithubProvider>
  );
}

export default App;
