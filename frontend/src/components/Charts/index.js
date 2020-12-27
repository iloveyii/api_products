import React from "react";
import { withRouter } from "react-router-dom";

import Graph from "./Graph";
import Stats from "./Stats";
import BarChart from "./BarChart";
import DataTable from "./DataTable";
import ProductsTable from "./ProductsTable";
import { Header } from "../../layouts";
import { withStyles } from "@material-ui/styles";
import { Container, Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { stats } from "./mockup";
import { Time } from "../../common/helpers";
import { styles } from "./styles";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      stats,
    };
  }

  setForm(props) {
    const { stats, game_logs, logs } = props;
    if (stats && stats.days && stats.weeks && stats.average) {
      this.setState({ stats });
    }
    // set logs
    if (logs && Array.isArray(logs) && logs.length > 0) {
      this.setState({ logs });
    }
  }

  componentDidMount() {
    const { login, users, readAction, createAction } = this.props;
    if (login) {
      console.log("READ Sensor data for login", login);
      const user = users.find((u) => u.email === login.email);
      if (user && user.id) {
        console.log("READ Sensor data for user", user);
        readAction && readAction({ suffix: "/" + user.id + "/stats" });
        const interval = 1000 * 60 * 10;
        this.intID = setInterval(() => {
          readAction && readAction({ suffix: "/" + user.id + "/stats" });
        }, interval);
      }
    } else {
      console.log("READ Sensor data no login");
    }
    this.setForm(this.props);
  }

  componentWillUnmount() {
    clearInterval(this.intID);
  }

  componentWillReceiveProps(nextProps, nextConext) {
    this.setForm(nextProps);
  }

  render() {
    const { classes } = this.props;
    const { average, usage } = this.state.stats;
    const { temperature, co2, humidity, pressure } = average;
    let { door, stove, television, light } = usage;
    door = door && door.onTime ? door.onTime : 20;
    stove = Time.milliToMinHours(stove.onTime);
    television = Time.milliToMinHours(television.onTime);
    light = Time.milliToMinHours(light.onTime);

    return (
      <div className={classes.main}>
        <Header />

        <Container maxWidth="lg" style={{ marginTop: 20 }}>
          <div className="row">
            <Stats
              type="warning"
              icon="fa-windows"
              subicon="date_range"
              title="Door"
              subtitle="Door open frequency"
              data={door}
            />
            <Stats
              type="success"
              icon="fa-fire"
              subicon="warning"
              title="Stove"
              subtitle="Kitchen usage"
              data={stove}
            />
            <Stats
              type="danger"
              icon="fa-television"
              subicon="local_offer"
              title="TV"
              subtitle="TV on time"
              data={television}
            />
            <Stats
              type="info"
              icon="fa-lightbulb-o"
              subicon="update"
              title="Light"
              subtitle="Light on off"
              data={light}
            />
          </div>
          <div className="row">
            <Graph
              title="Temperature"
              type="success"
              id="temperature"
              average={temperature}
              icon="fa-thermometer-half"
            />
            <Graph
              title="Pressure"
              type="warning"
              id="pressure"
              average={pressure}
              icon="fa-flag"
            />
            <Graph
              title="Humidity"
              type="danger"
              id="humidity"
              average={humidity}
              icon="fa-tint"
            />
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <ProductsTable
                products={[]}
                createAction={this.props.createAction}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <DataTable
                logs={this.state.logs}
                createAction={this.props.createAction}
              />
            </div>
          </div>

          <div className="row">
            <BarChart
              id="multilineChart"
              type="success"
              title="Daily"
              data={{ days: this.state.stats.days }}
            />
            <BarChart
              id="barChart"
              type="info"
              title="Weekly"
              data={{ weeks: this.state.stats.weeks }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

Charts.defaultProps = {
  average: {
    temperature: { value: 32, unit: "°C" },
    co2: { value: 954, unit: "mol" },
    humidity: { value: 26, unit: "g.m-3" },
    pressure: { value: 840, unit: "pas" },
  },
};

/**
 * Get data from store
 * @param state
 */
const mapStateToProps = (state) => ({
  login: state.logins.list.length > 0 ? state.logins.list[1] : undefined,
  users: state.users.list.length > 0 ? state.users.list : [],
});

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{readAction: UserReadAction}}
 */
const mapActionsToProps = {};

export default withRouter(
  withStyles(styles)(connect(mapStateToProps, mapActionsToProps)(Charts))
);
