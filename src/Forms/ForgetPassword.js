import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContactUs from "./ContactUs"; // Import the ContactUs component
import emailjs from "emailjs-com";

const ForgetPassword = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box mt={1}>
        <Button
          style={{ color: "white", textTransform: "uppercase" }}
          onClick={handleLoginOpen}
        >
          Forget Password ?
        </Button>
        <Modal
          open={loginOpen}
          onClose={handleLoginClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={{ borderRadius: "8px" }} sx={style}>
            <Grid container>
              <Grid
                style={{
                  background: "white",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
                item
                lg={12}
                mx="auto"
              >
                <Grid container>
                  <Grid item lg={5}>
                    <Box>
                      <img
                        src="https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner.svg"
                        alt=""
                      />
                    </Box>
                  </Grid>
                  <Grid style={{ padding: "10px" }} item lg={7}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    ></Box>
                    {/* Ensure that the path is correct */}
                    <ContactUs onClose={handleLoginClose} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default ForgetPassword;
