import { Box, Grid, Typography } from "@mui/material";
import contactImg from "../assets/contact_img.svg";

export const Contact = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        mx: { xs: 0, sm: 10, lg: 19 },
        mb: 5,
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
        contact.
      </Typography>

      <Grid container>
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={
            {
              // border: "1px solid red",
            }
          }
        >
          <img
            src={contactImg}
            alt="Contact Image"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={
            {
              // border: "1px solid red",
            }
          }
        >
          {/* <Typography
            variant="body1"
            gutterBottom
            sx={{
              maxWidth: 650,
              color: "#03045E",
              fontSize: { xs: 15, sm: 20, lg: 24 },
              mb: { xs: 2, sm: 5 },
              mt: { xs: 2 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </Typography> */}
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#03045E", fontSize: { xs: 15, sm: 20, lg: 24 } }}
          >
            www.linkedin.com/in/sagar-mishra15
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#03045E", fontSize: { xs: 15, sm: 20, lg: 24 } }}
          >
            1998sagar15@gmail.com
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#03045E", fontSize: { xs: 15, sm: 20, lg: 24 } }}
          >
            +91 7982978803
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
