
import './App.css';
import Homepage from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/Home/components';
import PageMana from './pages/Manager/components';
import PageSingup from './pages/SingUp';
import PageNewsDtail from './pages/NewsDetail';
import PageProducListing from './pages/Productlisting';
import Pagesignup from './pages/SignUp';
import PageLogIn from './pages/LogIn';
import { PageBlog } from './pages/Blog';
import { useCookies } from "react-cookie";
function App() {
  const [token, setToken, removeCookie] = useCookies();
  const getCookies = useCookies();
  return (
    <div style = {{paddingTop : "100px"}}>
      <Router>
        <Switch>
          <Route path = '/blog/:slug' component = {PageBlog} />
          <Route path = '/dang-nhap' component = {PageLogIn}/>
          <Route path = '/dang-ky' component ={Pagesignup}></Route>
          <Route path = "/danh-sach-dia-diem/:ad" component = {PageProducListing}></Route>
          <Route path = "/chi-tiet/:slug" component = {PageNewsDtail}></Route>
          <Route path = "/phan-hoi" component = {PageSingup}></Route>
          <Route path="/quan-ly-he-thong"  render={() => {
              return getCookies[0].token ? (
                <PageMana />
              ) : (
                <Redirect to="/dang-nhap" />
              );
            }}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
