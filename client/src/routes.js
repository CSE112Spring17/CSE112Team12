import Base from './components/Base.jsx';
import PhoneVerificator from './containers/PhoneVerificator.jsx';

  /**
   * Name: routes
   * 
   */
const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: PhoneVerificator
    }
  ]
};

export default routes;
