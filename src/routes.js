// @material-ui/icons
import Schedule from "@material-ui/icons/Schedule";
import PatientsIcon from "@material-ui/icons/RecentActors";
import Person from "@material-ui/icons/Person";
import People from '@material-ui/icons/People';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Medicines from "views/Medicines/Medicines.js";
import Patients from "views/Patients/Patients.js";
import Users from "views/Users/Users.js";
import Protocols from "views/Protocols/Protocols.js";
import Profile from "views/Profile/Profile.js";

const Routes = [
  {
    path: "/horarios",
    name: "Horários",
    icon: Schedule,
    component: DashboardPage,
    layout: "/easy-farmaco",
    menu: true,
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    icon: PatientsIcon,
    component: Patients,
    layout: "/easy-farmaco",
    menu: true,
  },
  {
    path: "/medicamentos",
    name: "Medicamentos",
    icon: "faPills",
    component: Medicines,
    layout: "/easy-farmaco",
    menu: true,
  },
  {
    path: "/protocolos",
    name: "Protocolos",
    icon: LibraryBooks,
    component: Protocols,
    layout: "/easy-farmaco",
    menu: true,
  },
  {
    path: "/usuarios",
    name: "Usuários",
    icon: People,
    component: Users,
    layout: "/easy-farmaco",
    menu: true,
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: Person,
    component: Profile,
    layout: "/easy-farmaco",
    menu: false,
  },
];

export default Routes;
