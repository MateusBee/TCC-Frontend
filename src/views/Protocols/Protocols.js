/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import { withSnackbar } from 'notistack';
// Services
import { uploadFile, getAll, createFile } from "services/file";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';
// core components
import Table from "components/Table/Table.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import Visibility from "@material-ui/icons/Visibility";
import Delete from "@material-ui/icons/Delete";
import Download from "@material-ui/icons/GetApp";
import Search from "@material-ui/icons/Search";

import tooltipStyle from "assets/jss/material/tooltipStyle.js";
import actionsStyle from "assets/jss/material/actionsStyle.js";
import searchStyle from "assets/jss/material/searchStyle.js";

const styles = {
  ...tooltipStyle,
  ...actionsStyle,
  ...searchStyle,
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

function Protocols({ enqueueSnackbar }) {
  const classes = useStyles();

  const [control, setControl] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);
  const [current, setCurrent] = React.useState({});

  const [selectedFile, setSelectedFile] = React.useState("");

  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const getDataTable = () => {
    getAll().then(({data}) => setData(data.data));
  };

  const handleOpen = () => {
    setControl(true);
  };

  const handleClose = () => {
    setControl(false);
    setSelectedFile("");
  };

  const handleShowDocument = (data) => {
    setCurrent(data);
    const { url } = data;

    window.open(url);
    setLoading(false);

  };

  const handleSavefile = async () => {
    if (!selectedFile) return;

    uploadFile(selectedFile).then((data) => {
      const { url, original_filename } = data;
      const formData = { name: original_filename, url }
      createFile(formData).then(() => {
        enqueueSnackbar('Documento salvo com sucesso', { variant: 'success' });
        handleClose();
        getDataTable();
      })
    })
    .catch(() => {
      enqueueSnackbar('Oops! Não foi possível salvar esse documento', { variant: 'error' });
    })
  };

  React.useEffect(() => getDataTable(), []);

  const formProtocols = () =>
    <GridItem xs={12} sm={12} md={12}
      style={{
        position: control ? "relative" : "absolute",
        visibility: control ? "inherit" : "hidden"
      }}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                id="file"
                inputProps={{
                  name: "file",
                  type: "file",
                  onChange: handleChange,
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <div/>
          <div>
            <Button
              className={classes.cancel}
              color="danger"
              onClick={handleClose}>Cancelar</Button>
            <Button
              color="primary"
              onClick={handleSavefile}>Salvar</Button>
          </div>
        </CardFooter>
      </Card>
    </GridItem>

  return (
    <GridContainer>
      {formProtocols()}
      <GridItem xs={12} sm={12} md={12}>
        <Card>
        <CardFooter>
            <Button
            styles={{ marginTop: 10 }}
            color="primary"
            onClick={handleOpen}>Novo Documento</Button>
            <div className={classes.searchWrapper}>
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.search,
                }}
                inputProps={{
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
          </CardFooter>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                { name: "Descrição", width: 250},
                { name: "Inclusão", width: 250 },
                { name: "Ações", width: 20 },
              ]}
              tablecells={["name", "createdAt"]}
              tableData={data}
              setCurrent={handleShowDocument}
              actions={(
              <>
                <Tooltip
                  id="tooltip-top"
                  title="Visualizar"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    size="small"
                    aria-label="Visibility"
                    className={classes.tableActionButton}
                    onClick={() => setLoading(true)}
                  >
                    {loading ? <CircularProgress size={20} />
                      : <Visibility
                        className={
                          classes.tableActionButtonIcon + " " + classes.visibility
                        }
                      />}
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Baixar"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    size="small"
                    aria-label="Download"
                    className={classes.tableActionButton}
                  >
                    <Download
                      className={
                        classes.tableActionButtonIcon + " " + classes.download
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Excluir"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    size="small"
                    aria-label="Remove"
                    className={classes.tableActionButton}
                  >
                    <Delete
                      className={
                        classes.tableActionButtonIcon + " " + classes.remove
                      }
                    />
                  </IconButton>
                </Tooltip>
              </>
              )}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Protocols.propTypes = {
  enqueueSnackbar: PropTypes.func,
};

export default withSnackbar(Protocols);
