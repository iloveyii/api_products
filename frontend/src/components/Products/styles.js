const drawerWidth = 240;

export const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    display: "block",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
});
