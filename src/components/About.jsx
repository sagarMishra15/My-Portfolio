import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";

export const About = () => {
  return (
    <Box
      sx={{
        mx: 19,
        mb: 10,
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          // border: "1px solid red",
          fontSize: { xs: 50, md: 79, lg: 100 },
          fontWeight: 1000,
          color: "#F7F197",
        }}
      >
        about.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          maxWidth: 900,
          color: "#03045E",
          fontSize: 24,
          mb: 15,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam.
      </Typography>

      <List sx={{ listStyleType: "disc", color: "#03045E", pl: 35 }}>
        <ListItem
          sx={{ display: "list-item", "&::marker": { fontSize: "2rem" } }}
        >
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                2022 - Present
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: 24,
                  mb: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{ display: "list-item", "&::marker": { fontSize: "2rem" } }}
        >
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                2018-2022
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: 24,
                  mb: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{ display: "list-item", "&::marker": { fontSize: "2rem" } }}
        >
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                2016-2018
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: 24,
                  mb: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};
