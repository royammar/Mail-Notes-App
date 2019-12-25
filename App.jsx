import BookApp from './pages/BookApp.jsx'
import NavBar from './cmps/NavBar.jsx'
import Home from './pages/Home.jsx'
// import BookDetails from './cmps/BookDetails.jsx'
import About from './pages/About.jsx'
import BookPage from './pages/BookPage.jsx'
import AddNewBook from './pages/AddNewBook.jsx'
import ModalDialog from './cmps/ModalDialog.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


class App extends React.Component {


   toggleModal = () => {
  
}
    render() {
        return (
                <Router history={history}>
                    <ModalDialog></ModalDialog>
                    <NavBar></NavBar>
                    <main>
                    <Switch>
                        <Route component={Home} path="/" exact ></Route>
                        <Route component={BookApp} path="/books" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route render={(props) => <AddNewBook {...props} toggleModal={this.toggleModal} />}
                            path="/AddNewBook" exact></Route>
                    </Switch>
                    </main>
                </Router>
         
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)