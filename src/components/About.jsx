import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";

export const About = () => {
  return (
    <Box
      sx={{
        mx: { xs: 0, sm: 10, lg: 19 },
        mb: { xs: 0, sm: 10 },
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
          fontSize: { xs: 15, sm: 20, lg: 24 },
          mb: { xs: 0, md: 5, lg: 10 },
        }}
      >
        As a Software Engineer with experience of 2.5+ years, I thrive on
        creating elegant solutions to complex problems. Passionate about
        creating intuitive and engaging user experiences. Specialize in
        transforming ideas into beautifully crafted products.
      </Typography>

      <List
        sx={{
          listStyleType: "disc",
          color: "#03045E",
          pl: { xs: 0, sm: 5, lg: 35 },
        }}
      >
        <ListItem
          sx={{
            display: "list-item",
            "&::marker": { fontSize: { xs: 20, lg: 35 } },
          }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                }}
              >
                LTIMindtree (2022 - Present)
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                  mb: { xs: 0, md: 5, lg: 10 },
                }}
              >
                Working as a Software Engineer in the domain of <b>Retail </b>{" "}
                on technologies like Springboot APIs and ReactJS. Collaborating
                directly with clients to gather requirements, providing tailored
                software solutions and delivering high-quality results.
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            "&::marker": { fontSize: { xs: 20, lg: 35 } },
          }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                }}
              >
                Graduation (2018-2022)
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                  mb: { xs: 0, md: 5, lg: 10 },
                }}
              >
                Completed B.Tech in Computer Science and Engineering with an 8.4
                CGPA. I've gained hands-on experience in Java and Web
                Technologies like JavaScript, React, and SQL, building
                real-world projects and strengthening my problem-solving and
                teamwork skills.
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            "&::marker": { fontSize: { xs: 20, lg: 35 } },
          }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                }}
              >
                High School (2016-2018)
              </Typography>
            }
            secondary={
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: 900,
                  color: "#03045E",
                  fontSize: { xs: 15, sm: 20, lg: 24 },
                  mb: { xs: 0, md: 5, lg: 10 },
                }}
              >
                Pursued Science stream in my 11th and 12th grades, focusing on
                subjects like Physics, Chemistry, and Mathematics. I
                successfully completed my 12th standard with a score of 70%,
                building a strong foundation for my further technical studies.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};
