import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core";

import { apiServer } from "../common/constants";
import Users from "../components/Users";
import Login from "../components/Login";
import Charts from "../components/Charts";
import Puzzle from "../components/Puzzle";
import Ni from "../components/Ni";
import models from "../store";

const socket = io(apiServer, {
  transports: ["websocket", "polling"],
});
window.socket = socket;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  loginMargin: {
    marginLeft: -1 * drawerWidth,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { users, logins } = props;
  // console.log("props", Object.keys(props));
  const usersResponses = models.users.errors(users.actions);
  const loginsResponses = models.logins.errors(logins.actions);

  useEffect(() => {
    // usersResponses.map(res =>   enqueueSnackbar(JSON.stringify(res.errors[0].msg) + ' - ' + res.type , {variant: res.errors[0].type}) );
    usersResponses.map((res) => {
      const msg =
        typeof res.errors[0].msg === "string"
          ? res.errors[0].msg
          : JSON.stringify(res.errors[0].msg);
      enqueueSnackbar(msg, { variant: res.errors[0].type });
    });
  }, [usersResponses]);

  useEffect(() => {
    loginsResponses.map((res) => {
      const msg =
        typeof res.errors[0].msg === "string"
          ? res.errors[0].msg
          : JSON.stringify(res.errors[0].msg);
      enqueueSnackbar(msg, { variant: res.errors[0].type });
    });
  }, [loginsResponses]);

  // Call method when ws send an update
  useEffect(() => {
    socket.on("update", (data) => {
      // console.log("Update", data);

      if (data.url && data.url.includes("/api/v1/users")) {
        // console.log("Update USERS  ");
        props.usersReadAction({});
      }
    });
  }, []);

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route exact path={`/dashboard`} component={Charts} />
        <Route exact path={`/users`} component={Users} />
        <Route exact path={`/puzzle`} component={Puzzle} />
        <Route component={Ni} />
      </Switch>
    </BrowserRouter>
  );
}

/**
 * Get data from store
 * @param state
 */
const mapStateToProps = (state) => ({
  users: state.users,
  logins: state.logins,
});

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{readAction: UserReadAction}}
 */
const mapActionsToProps = {
  usersReadAction: models.users.actions.read,
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
