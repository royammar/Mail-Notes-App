
import ModalDialog from './cmps/ModalDialog.jsx'
import EmailApp from './pages/EmailApp.jsx'
import EmailPage from './pages/EmailPage.jsx'
import NavBar from './cmps/NavBar.jsx'
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
                        {/* <Route component={Home} path="/" exact ></Route> */}
                        <Route component={EmailApp} path="/emails" exact></Route>
                        <Route component={EmailPage} path="/emails/:id" exact></Route>
                        {/* <Route component={About} path="/about" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route render={(props) => <AddNewBook {...props} toggleModal={this.toggleModal} />}
                            path="/AddNewBook" exact></Route> */}
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