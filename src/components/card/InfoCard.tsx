import React from 'react';
import {Grid, Card, CardContent, Typography,CardActions, Box} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleLink from '../articleLink/ArticleLink';


interface Props{
  id:string,
  date:string,
  title:((string | React.ReactNode)[]) | string,
  description:((string | React.ReactNode)[]) | string,
  imgUrl:string
}

export default function InfoCard({id, date, title, description, imgUrl}:Props) {
  return (
    <Grid item sx={{width:'400px'}}>
          <Card variant="outlined" sx={{"& img":{height:"217px", backgroundSize:"cover", width:"100%"},backgroundColor:"white", border: '1px solid #EAEAEA', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',borderRadius: '5px', mb:"45px"}}>
            <img src={imgUrl} />
            <CardContent sx={{p:"0", ml:"25px", mr:"25px", pb:"20px", pt:"18px"}}>
              <Typography sx={{mb:"18px", color:"#363636", opacity:"0.6"}}>
                <CalendarMonthIcon sx={{fontSize:"13px", mr:"9px"}}/>
                {date}
              </Typography>
              <Typography sx={{fontSize:'24px', lineHeight:"29px", color:"#363636", mb:"20px", height:"58px", fontFamily:"Montserrat, sans-serif"}}>
                {title}
              </Typography>
              <Typography sx={{fontSize:"16px", lineHeight:"24px", fontWeight:"400", fontFamily:"Montserrat, sans-serif", minHeight:"72px"}}>
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{p:"0", pl:"25px", pb:"25px"}}>
              <Box component="div" sx={{position:"relative"}}>
                <ArticleLink href={`/article/${id}`} text="Read more"/>
                <ArrowForwardIcon sx={{fontSize:"12px", position:"absolute", top:"8px", left:"95px"}} />
              </Box>
            </CardActions>
          </Card>
        </Grid>
  )
}
