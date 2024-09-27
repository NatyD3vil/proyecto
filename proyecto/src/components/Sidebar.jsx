import React from 'react';

// Definimos el componente Sidebar
const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#clients">Clientes</a>
      <a href="#income">Ingresos</a>
      <a href="#expenses">Egresos</a>
      <a href="#collection">Recaudo</a>
      <a href="#balance">Balance</a>
    </div>
  );
};

export default Sidebar;
