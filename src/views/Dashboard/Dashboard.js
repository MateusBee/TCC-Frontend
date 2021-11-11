import React from "react";
import PropTypes from "prop-types";
import { withSnackbar } from 'notistack';
// Services
import {
  getAll,
} from 'services/patient';
// Utils
import { formatDate } from "utils/DateFormat.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
//import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Modal from "components/Modal/Modal.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import Search from "@material-ui/icons/Search";

import styles from "assets/jss/material/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function Dashboard({ enqueueSnackbar }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [search, setSearch] = React.useState("");
  const [defaultData, setDefaultData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [current, setCurrent] = React.useState({});

  const getDataTable = () => {
    getAll().then(({data}) => {
      setData(data.data);
      setDefaultData(data.data);
    });
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") handleSearch(event.target.value);
  };

  const handleSearch = (aux = search) => {
    if (aux === "") {
      setData(defaultData);
      return;
    }
    const text = search.toUpperCase();
    const tableData = data.filter((d) => d.name.toUpperCase().includes(text));
    setData(tableData);
  };

  const handleOpen = (data) => {
    setCurrent(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrent({});
  };

  const handleConfirm = () => {
    enqueueSnackbar('Medicamentos administrado com sucesso', { variant: 'success' });
  };

  React.useEffect(() => getDataTable(), []);

  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search,
          }}
          inputProps={{
            type: "search",
            placeholder: "Pesquisar",
            inputProps: {
              "aria-label": "Pesquisar",
            },
            onChange: handleChangeSearch
          }}
        />
        <Button color="white" aria-label="edit" justIcon round
          onClick={handleSearch}>
          <Search />
        </Button>
      </div>
      <GridContainer>
        {
          data.map((patient) => (
            <GridItem xs={12} sm={6} md={3} key={patient._id}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon image={patient.url} />
                  <h3 className={classes.cardTitle}>
                    {patient.name}
                  </h3>
                  <p className={classes.cardCategory}>Data / Horário</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Update />
                    Regressiva
                  </div>
                  <Link
                    underline="always"
                    className={classes.link}
                    onClick={() => handleOpen(patient)}
                  >Detalhes</Link>
                </CardFooter>
              </Card>
            </GridItem>
          ))
        }
      </GridContainer>

      <Modal
        open={open}
        handleClose={handleClose}>
        <>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardBody className={classes.cardCategory} >
                  <h3 className={classes.cardTitle}>
                    Dados do Paciente {current.name}
                  </h3>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Nome:<strong className={classes.info}>{current.name}</strong>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      CPF:<strong className={classes.info}>{current.cpf}</strong>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Data de Nascimento:<strong className={classes.info}>{formatDate(current.birth)}</strong>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Idade:<strong className={classes.info}>{current.age}</strong>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Peso:<strong className={classes.info}>{current.weight} Kg</strong>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Altura:<strong className={classes.info}>{current.height}</strong>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Observações:<strong className={classes.info}>{current.comments}</strong>
                    </GridItem>
                  </GridContainer>
                  <Divider className={classes.divider} />
                  <h3 className={classes.cardTitle}>
                    Medicamentos
                  </h3>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Nome
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Quantidade
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Tipo
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter stats>
                  <div/>
                  <div>
                    <Button
                      className={classes.cancel}
                      onClick={handleClose}>Cancelar</Button>
                    <Button
                      color="success"
                      onClick={handleConfirm}>Confirmar Administração</Button>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </>
      </Modal>
    </div>
  );
}

Dashboard.propTypes = {
  enqueueSnackbar: PropTypes.func,
};

export default withSnackbar(Dashboard);
