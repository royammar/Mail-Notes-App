// import App from './Email/App.jsx'
import EmailApp from './Apps/Email/pages/EmailApp.jsx'
import MainNavBar from './cmpts/MainNavBar.jsx'
import ModalDialog from './Apps/Email/cmps/ModalDialog.jsx'
import EmailPage from './Apps/Email/pages/EmailPage.jsx'
import NewMail from './Apps/Email/pages//NewMail.jsx'
import KeepApp from './Apps/Keep/pages/KeepApp.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    toggleModal = () => {


    }
    render() {
        return (
            <div>
                <Router history={history}>
                    {/* <ModalDialog></ModalDialog> */}
                    <MainNavBar></MainNavBar>
                    <Switch>
                        <Route component={EmailApp} path="/emails" exact></Route>
                        <Route component={EmailPage} path="/emails/:id" exact></Route>
                        <Route component={NewMail} path="/newmail" exact></Route>
                        <Route component={NewMail} path="/newmail/:id" exact></Route>
                        <Route component={KeepApp} path="/keep" exact></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)