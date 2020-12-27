const drawerWidth = 240;

export const styles = (theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    display: "block",
  },
  timerContainer: {
    float: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
