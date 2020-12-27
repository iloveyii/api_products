const drawerWidth = 240;

export const styles = (theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "3px",
    padding: 0,
    justifyContent: "center",
  },
  puzzleContainer: {
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    // border: "1px solid blueviolet",
  },
  puzzleInner: {
    width: "100%",
    margin: "0 auto",
    height: "auto",
    padding: "20px",
    position: "relative",
  },
  puzzleCell: {
    margin: "3px",
    padding: "3%",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: '"Open Sans", sans-serif',
    width: "75px",
    minHeight: "65px",

    borderRadius: "4px",
    backgroundColor: "#f4511e",
    border: "none",
    color: " #800000",
    fontSize: "24px",
    transition: "all 0.5s",
    cursor: "pointer",
    /* box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue, */
    /* box-shadow: inset 0 0 10px, */
    boxShadow: "5px 5px",
  },
  puzzleResultContainer: {
    padding: 10,
    textAlign: "center",
  },
});
