import React from 'react'
import Layout from '../Componants/Layout'
import { Box, Typography } from '@mui/material'

export default function About() {
  return (
    <Layout>
      <Box sx={{my:15 , textAlign:'center', p:2 ,'& h4':{fontWeight:'bold' , my:2, fontSize:'2rem'},
        '& p':{textAlign:'justify'} ,'@media (max-width:600px)':{mt:0 , '& h4':{fontSize:'1.5rem'}}}}>
        <Typography variant="h4">Welcome To My Restaurant</Typography>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptate consequatur officiis. Nisi ad eius, ea vel
          dicta laborum delectus harum reiciendis quae quidem modi, non odit
          amet est aspernatur? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptas ea eius in sunt soluta consectetur a nobis
          quod laudantium? Quia incidunt aliquam culpa voluptates veritatis eos
          possimus eligendi voluptatum tempore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo adipisci consequatur, vero
          enim nulla excepturi ad amet nisi placeat fugit molestiae vel, aperiam
          cumque optio corporis perferendis nihil eaque omnis. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. A eveniet, inventore quidem
          blanditiis nulla facere, aspernatur aliquam molestias cumque ea
          commodi, necessitatibus natus eius nesciunt ex vitae quam quis
          voluptatum?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          adipisci consequatur, vero enim nulla excepturi ad amet nisi placeat
          fugit molestiae vel, aperiam cumque optio corporis perferendis nihil
          eaque omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          A eveniet, inventore quidem blanditiis nulla facere, aspernatur
          aliquam molestias cumque ea commodi, necessitatibus natus eius
          nesciunt ex vitae quam quis voluptatum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo adipisci consequatur, vero
          enim nulla excepturi ad amet nisi placeat fugit molestiae vel, aperiam
          cumque optio corporis perferendis nihil eaque omnis. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. A eveniet, inventore quidem
          blanditiis nulla facere, aspernatur aliquam molestias cumque ea
          commodi, necessitatibus natus eius nesciunt ex vitae quam quis
          voluptatum?
        </p>
      </Box>
    </Layout>
  );
}
