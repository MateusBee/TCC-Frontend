import React from "react";
import PropTypes from "prop-types";
import { withSnackbar } from 'notistack';
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
import Accessibility from "@material-ui/icons/Accessibility";
import Search from "@material-ui/icons/Search";

import styles from "assets/jss/material/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function Dashboard({ enqueueSnackbar }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    enqueueSnackbar('Medicamentos administrado com sucesso', { variant: 'success' });
  };

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
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>
                Mateus
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
                onClick={handleOpen}
              >Detalhes</Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>
                João
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
                onClick={handleOpen}
              >Detalhes</Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>
                Lucas
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
                onClick={handleOpen}
              >Detalhes</Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>
                Érica
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
                onClick={handleOpen}
              >Detalhes</Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>
                Nando
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
                onClick={handleOpen}
              >Detalhes</Link>
            </CardFooter>
          </Card>
        </GridItem>
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
                    Dados do Paciente XXX
                  </h3>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Nome
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      CPF
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Data de Nascimento
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Idade
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Peso
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                      Altura
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                      Observações
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
