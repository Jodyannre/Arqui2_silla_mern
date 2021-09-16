/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Perfil from "views/Perfil.js";
import Historial from "views/Historial.js";
import DiasUso from "views/DiasUso";
import Login from "views/login";
import Users from "routes/users"
global.miNumero = 205;

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-paper-2",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil",
    icon: "nc-icon nc-circle-09",
    component: Perfil,
    layout: "/admin",
  },
  {
    path: "/historial",
    name: "Historial",
    icon: "nc-icon nc-notes",
    component: Historial,
    layout: "/admin",
  },
  {
    path: "/diasUso",
    name: "UsoDiario",
    icon: "nc-icon nc-paper-2",
    component: DiasUso,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-paper-2",
    component: DiasUso,
    layout: "/",
  },
];

export default dashboardRoutes;