import { Box, Typography } from "@mui/material"
import image1 from '../assets/navbar_img1.svg'
import image2 from '../assets/navbar_img2.svg'
import image3 from '../assets/navbar_img3.svg'

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
              fontSize: 24,
            }}
          >
            || SAGAR ||
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
          }}
        >
          <Typography
            sx={{
              fontWeight: 200,
              fontSize: 19,
              cursor: "pointer",
              color: "#03045E",
            }}
          >
            Home
          </Typography>

          <Typography
            sx={{
              fontWeight: 200,
              fontSize: 19,
              cursor: "pointer",
              color: "#03045E",
            }}
          >
            About
          </Typography>

          <Typography
            sx={{
              fontWeight: 200,
              fontSize: 19,
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
          }}
        >
          <img
            src={image1}
            alt="Navbar Icon 1"
            style={{ maxWidth: "100%", maxHeight: "100%", cursor:'pointer' }}
          />
          <img
            src={image2}
            alt="Navbar Icon 2"
            style={{ maxWidth: "100%", maxHeight: "100%", cursor:'pointer' }}
          />
          <img
            src={image3}
            alt="Navbar Icon 3"
            style={{ maxWidth: "100%", maxHeight: "100%", cursor:'pointer' }}
          />
        </Box>
      </Box>
    );
}