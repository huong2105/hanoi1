
import './App.css';
import Homepage from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/components';
import PageMana from './pages/Manager/components';
import PageSingup from './pages/SingUp';
import PageNewsDtail from './pages/NewsDetail';
import PageProducListing from './pages/Productlisting';
import Pagesignup from './pages/SignUp';
import PageLogIn from './pages/LogIn';
import { PageBlog } from './pages/Blog';
function App() {
 
  return (
    <div style = {{paddingTop : "92px"}}>
      <Router>
        <Switch>
          <Route path = '/blog/:slug' component = {PageBlog} />
          <Route path = '/dang-nhap' component = {PageLogIn}/>
          <Route path = '/dang-ky' component ={Pagesignup}></Route>
          <Route path = "/danh-sach-dia-diem" component = {PageProducListing}></Route>
          <Route path = "/chi-tiet/:slug" component = {PageNewsDtail}></Route>
          <Route path = "/phan-hoi" component = {PageSingup}></Route>
          <Route path="/quan-ly-he-thong" component={PageMana}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
