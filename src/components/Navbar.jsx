import { Box, Tooltip, Typography } from "@mui/material";
// import image2 from "../assets/navbar_img2.svg";
// import image3 from "../assets/navbar_img3.svg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

export const Navbar = () => {
  return (
    <Box
      sx={{
        // border: "1px solid black",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          // border: "1px solid black",
          maxHeight: 100,
          width: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#03045E",
            fontWeight: 600,
            fontSize: { xs: 15, md: 24 },
            opacity: { xs: 0, md: 100 },
          }}
        >
          SAGAR
        </Typography>
      </Box>
      <Box
        sx={{
          // border: "1px solid black",
          maxHeight: 100,
          width: 350,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ml:{xs:-10,md:0}
        }}
      >
        <Typography
          sx={{
            // fontWeight: 200,
            fontSize: { xs: 15, md: 19 },
            cursor: "pointer",
            color: "#03045E",
          }}
        >
          Home
        </Typography>

        <Typography
          sx={{
            // fontWeight: 200,
            fontSize: { xs: 15, md: 19 },
            cursor: "pointer",
            color: "#03045E",
          }}
        >
          About
        </Typography>

        <Typography
          sx={{
            // fontWeight: 200,
            fontSize: { xs: 15, md: 19 },
            cursor: "pointer",
            color: "#03045E",
          }}
        >
          Work
        </Typography>
      </Box>
      <Box
        sx={{
          // border: "1px solid black",
          maxHeight: 100,
          width: 200,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          // opacity:{xs:0,md:100}
        }}
      >
        <Tooltip title="+91 7982978803">
          <CallIcon
            sx={{
              cursor: "pointer",
              color: "#03045E",
              fontSize: {
                xs: "20px", // extra-small screens (mobile)
                sm: "24px", // small screens
                md: "30px", // medium screens and up
              },
            }}
          />
        </Tooltip>

        <Tooltip title="GMail">
          <EmailIcon
            sx={{
              cursor: "pointer",
              color: "#03045E",
              fontSize: {
                xs: "20px", // extra-small screens (mobile)
                sm: "24px", // small screens
                md: "30px", // medium screens and up
              },
            }}
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?view=cm&to=1998sagar15@gmail.com",
                "_blank"
              )
            }
          />
        </Tooltip>

        <Tooltip title="LinkedIn">
          <LinkedInIcon
            sx={{
              cursor: "pointer",
              color: "#03045E",
              fontSize: {
                xs: "20px", // extra-small screens (mobile)
                sm: "24px", // small screens
                md: "30px", // medium screens and up
              },
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sagar-mishra15",
                "_blank"
              )
            }
          />
        </Tooltip>
      </Box>
    </Box>
  );
};
