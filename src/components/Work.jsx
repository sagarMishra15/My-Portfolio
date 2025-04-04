import { Box, Grid, Typography } from "@mui/material";
import workImg1 from "../assets/work_img1.svg";
import workImg2 from "../assets/work_img2.svg";

export const Work = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        // height: 500,
        // width: "100%",
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
        work.
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

      <Grid
        container
        spacing={20}
        sx={{
          color: "#03045E",
        }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Image */}
            <img
              src={workImg1}
              alt="Work Image"
              style={{
                maxWidth: "100%",
                display: "block",
                transition: "0.3s ease-in-out",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "#474306",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FBF8CC",
                fontSize: 40,
                fontWeight: "bold",
              }}
              className="hover-overlay"
            >
              Some Case Study
            </Box>
          </Box>
          <Typography
            gutterBottom
            sx={{
              mb: 2,
              fontStyle: "italic",
            }}
          >
            November 24, 2019
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Some Case Study
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              // maxWidth: 900,
              color: "#03045E",
              fontSize: 18,
              mb: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Image */}
            <img
              src={workImg2}
              alt="Work Image"
              style={{
                maxWidth: "100%",
                display: "block",
                transition: "0.3s ease-in-out",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "#474306",
                opacity: 0, // Initially hidden
                transition: "opacity 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FBF8CC",
                fontSize: 40,
                fontWeight: "bold",
              }}
              className="hover-overlay"
            >
              Some Case Study
            </Box>
          </Box>
          <Typography
            gutterBottom
            sx={{
              mb: 2,
              fontStyle: "italic",
            }}
          >
            November 24, 2019
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Some Case Study
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              // maxWidth: 900,
              color: "#03045E",
              fontSize: 18,
              mb: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </Typography>
        </Grid>
      </Grid>
      <style>
        {`
          .hover-overlay {
            opacity: 0;
          }
          .hover-overlay:hover {
            opacity: 1; /* Adjust visibility */
          }
        `}
      </style>
    </Box>
  );
};
