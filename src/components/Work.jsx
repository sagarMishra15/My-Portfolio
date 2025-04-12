import { Box, Button, Grid, Typography } from "@mui/material";
import workImg1 from "../assets/work_img1.svg";
import workImg2 from "../assets/work_img2.svg";
import github from "../assets/github-logo.svg";
import link from "../assets/link.svg";

export const Work = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        // height: 500,
        // width: "100%",
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
        work.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          maxWidth: 900,
          color: "#03045E",
          fontSize: { xs: 15, sm: 20, lg: 24 },
          mb: { xs: 5, lg: 15 },
        }}
      >
        Throughout my career, I have worked on multiple projects including
        professional and personal to understand the end-to-end flow of
        functionalities.
      </Typography>

      <Grid
        container
        spacing={{ xs: 1, sm: 20 }}
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
              Banking System
            </Box>
          </Box>
          <Typography
            gutterBottom
            sx={{
              mb: 2,
              fontStyle: "italic",
            }}
          >
            December 2024
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontSize: { xs: 15, sm: 20, lg: 24 },
              fontWeight: "bold",
            }}
          >
            Banking System
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              // maxWidth: 900,
              color: "#03045E",
              fontSize: { xs: 15, sm: 20, lg: 18 },
              // mb: 3,
            }}
          >
            Built a secure banking API with JWT authentication and role-based
            access for Admin, Bank Manager, and Customer roles. Implemented user
            registration, login, account creation, DTO filters, Swagger
            documentation, and added exception handling with transactions for
            smooth balance management.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            <span style={{ fontWeight: "bold" }}>Tech used:</span> Springboot |
            PostgreSQL | Postman | Swagger
          </Typography>

          <Button
            sx={{
              borderRadius: 2,
              width: 200,
              height: 49,
              marginTop: 1,
              mb: 1,
              border: "2px solid #474306",
              color: "#474306",
            }}
            onClick={() =>
              window.open("https://github.com/sagarMishra15/Bank", "_blank")
            }
          >
            <img
              src={github}
              alt="Github Logo"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography sx={{ marginLeft: 1, fontWeight: "bold" }}>
              View on Github
            </Typography>
          </Button>
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
              Landing Page
            </Box>
          </Box>
          <Typography
            gutterBottom
            sx={{
              mb: 2,
              fontStyle: "italic",
            }}
          >
            April 2025
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontSize: { xs: 15, sm: 20, lg: 24 },
              fontWeight: "bold",
            }}
          >
            Landing Page
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              // maxWidth: 900,
              color: "#03045E",
              fontSize: { xs: 15, sm: 20, lg: 18 },
              mb: 2,
            }}
          >
            Developed a responsive landing page using React and MUI, featuring
            multiple structured sections including About, Services, Pricing,
            Features, FAQs, Contact Us, and Footer. The design ensures seamless
            navigation and an intuitive user experience, maintaining consistency
            across all components while effectively showcasing key information
            and offerings.
          </Typography>
          <Button
            sx={{
              borderRadius: 2,
              width: 200,
              height: 49,
              marginTop: 1,
              mb: 1,
              border: "2px solid #474306",
              color: "#474306",
            }}
            onClick={() =>
              window.open(
                "https://github.com/sagarMishra15/landingPage-main",
                "_blank"
              )
            }
          >
            <img
              src={github}
              alt="Github Logo"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography sx={{ marginLeft: 1, fontWeight: "bold" }}>
              View on Github
            </Typography>
          </Button>
          <Button
            sx={{
              borderRadius: 2,
              width: 180,
              height: 49,
              marginTop: 1,
              mb: 1,
              ml: 3,
              border: "2px solid #2864EA",
              color: "#fff",
              bgcolor: "#2864EA",
            }}
            onClick={() =>
              window.open(
                "https://my-landing-page-indol-eight.vercel.app/",
                "_blank"
              )
            }
          >
            <img
              src={link}
              alt="Link Logo"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography sx={{ marginLeft: 1, fontWeight: "bold" }}>
              Visit Website
            </Typography>
          </Button>
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
