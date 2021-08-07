import React  from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { getProducts } from './services/productos';

import Users from './user/pages/Users';
import Catalogue from './catalogue/pages/Catalogue';
import MainNavigation from './shared/components/Navigation/MainNavigation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      products: [],
      isFetch:true,
      filterProcducts:[],
      marks: []
    }
  }
  async componentDidMount () {
    const responseData = await getProducts();
    this.setState({products: responseData, filterProcducts:responseData, isFetch:false});
    const marks = [];
    responseData.map(product =>{
        if(!marks.includes(product.mark)){
            marks.push(product.mark);
        }
    });
    this.setState({ marks:marks });
  }

  handleSearch = (search) =>{
    const { products } = this.state;
    search = search.toLowerCase();
    var searched = products.filter(item=>{
      if(item.mark.toLowerCase().includes(search) ||
        item.title.toLowerCase().includes(search)
      ){
        return item;
      }
  })
    this.setState({filterProcducts: searched});
  }

  handlefilter = (filter) =>{
    const { products } = this.state;
    filter = filter.toLowerCase();
    var filtered = products.filter(item=>{
      if(item.mark.toLowerCase().includes(filter)){
        return item;
      }
  })
  this.setState({filterProcducts: filtered});
  }

  render(){
    const { filterProcducts , marks} = this.state;
    return (
    <Router>
      <MainNavigation handleSearch={this.handleSearch} />
      <main>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/user" exact>
          <Users />
        </Route>
        <Route path="/catalogue" exact>
          <Catalogue products={filterProcducts} handlefilter={this.handlefilter} marks={marks} />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
    );
  }
}

export default App;