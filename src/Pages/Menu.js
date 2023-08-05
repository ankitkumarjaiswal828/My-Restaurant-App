import React from 'react'
import Layout from '../Componants/Layout'
import {MenuList} from '../Data/Data'
import { Card, CardActionArea, CardMedia ,Box, CardContent, Typography} from '@mui/material'
export default function Menu() {
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

          {
            MenuList.map(menu => (
              <Card sx={{maxWidth:'390px',display:'flex', m:2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>

                  <CardContent>
                    <Typography variant='h5' gutterBottom  component={'div'}>
                          {menu.name}
                    </Typography>

                    <Typography variant='body2' >
                      {menu.Description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
      </Box>
    </Layout>
  )
}
