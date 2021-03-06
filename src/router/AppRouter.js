import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { About } from '../pages/About';
import { Education } from '../pages/Education';
import { Experience } from '../pages/Experience';
import { Interests } from '../pages/Interests';
import { Skills } from '../pages/Skills';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


export const AppRouter = () => {
    return (
        <Router>
            <Sidebar />
            <div className='container-fluid p-0'>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/interests" component={Interests} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/" component={About} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
