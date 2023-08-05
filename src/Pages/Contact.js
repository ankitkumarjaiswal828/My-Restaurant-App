import React from 'react'
import Layout from '../Componants/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Table, TableContainer, Typography ,Paper, TableHead, TableRow, TableCell, TableBody} from '@mui/material'

export default function Contact() {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <Typography variant="h4">Contact details of Restaurant</Typography>
        <p style={{ textAlign: "justify" }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facilis
          sequi perspiciatis dolorum natus. Quaerat eligendi veritatis debitis
          sunt qui quidem ea nam deserunt magni? Minima minus doloremque
          repellendus aut nesciunt quam harum hic consequuntur, unde voluptatem
          numquam aspernatur ipsa nisi asperiores eum consectetur est incidunt
          suscipit. Aut, blanditiis cum?
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: 25,
                    fontFamily: "sans-serif",
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ pt: 1 }} /> +21233221242 (Tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ pt: 1, color: "skyblue" }} />
                  Goodfood@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ pt: 1, color: "blue" }} />
                  8544855868 (Tollfree)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}
