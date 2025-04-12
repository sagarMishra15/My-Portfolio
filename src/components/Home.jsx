import { Box, Button, Grid, Typography } from "@mui/material";
import home from "../assets/profile_image2.png";

export const Home = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        mx: { xs: 5, sm: 10, lg: 19 },
        mb: { xs: 5, sm: 10, lg:19 },
      }}
    >
      <Grid container>
        <Grid
          size={{ xs: 12, md: 12, lg: 7 }}
          sx={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 30,
                color: "#03045E",
              }}
            >
              Hello, I'm Sagar,
            </Typography>
            <Typography
              variant="h1"
              // gutterBottom
              sx={{
                // border: "1px solid red",
                fontSize: { xs: 50, md: 79, lg: 100 },
                fontWeight: 1000,
                color: "#03045E",
              }}
            >
              Software Developer
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: 30,
                fontWeight: 500,
                color: "#03045E",
                mt: 3,
                mb: 5,
              }}
            >
              New Delhi
            </Typography>

            <Box
              sx={{
                bgcolor: "#F5EE84",
                maxWidth: 158,
                height: 62,
                borderRadius: 1,
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  "& > div": {
                    transform: "translate(10px,10px)",
                  },
                },
              }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Ii2fAB2L5yLh67wlhr11wiNDfCHVKZYl/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#474306",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #474306",
                  mt: -1.5,
                  ml: -1.5,
                  borderRadius: 2,
                  fontSize: 21,
                  transition: "0.2s ease, 0.2s ease",
                }}
              >
                Resume
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 12, lg: 5 }}
          sx={{
            display: "flex",
            alignItems: "center",
            mt: { xs: 5 },
          }}
        >
          <img
            src={home}
            alt="Home Image"
            style={{ maxWidth: "100%", height: "auto", paddingLeft: 20 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
