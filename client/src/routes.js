//dependencias

import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';
//si no funciona agregar otra vez  /nombre del componente
import CarBrowse from './components/CarBrowse/CarBrowse';
import EditarCar from './components/CarBrowse/EditarCar';
import AgregarCar from './components/CarBrowse/AgregarCar';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/editarCar" component={EditarCar} />
      <Route path="/agregarCar" component={AgregarCar} />
      <Route path="/carBrowse" component={CarBrowse} />
      <Route path="/" component={CarBrowse} />
    </Switch>
  </App>
);

export default AppRoutes;
