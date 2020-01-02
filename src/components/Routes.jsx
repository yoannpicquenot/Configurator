import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Configurations from './Configurations/Configurations';

export const routes = [{
  path: '/',
  page: Home,
  label: 'Home',
  exact: true,
  icon: HomeIcon,
}, {
  path: '/configurations',
  page: Configurations,
  label: 'Configurations',
  icon: BuildIcon,
}, {
  path: '/settings',
  page: Settings,
  label: 'Settings',
  icon: SettingsIcon,
}];

function renderRoute() {
  return routes.map((route) => (
    <Route exact path={route.path} component={route.page} key={`route${route.path}`} />
  ));
}

function RoutesContainer(props) {
  const { location } = props;
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
        <Switch location={location}>
          { renderRoute() }
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

RoutesContainer.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.any,
  }).isRequired,
};

export const Routes = withRouter(RoutesContainer);
