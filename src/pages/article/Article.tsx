import React from 'react';
import { useGetCardByIdQuery} from '../../features/cards/cardsSlice';
import style from "./Article.module.css";
import {Paper, Typography, Box} from '@mui/material';
import ArticleLink from '../../components/articleLink/ArticleLink';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';

export default function Article() {
  const params = useParams();
  const {data, error, isLoading} = useGetCardByIdQuery(params.articleId ?? "");
  
  return (
    <Box component="div" sx={{pb:"45px", "& img":{backgroundSize:"cover", width:"100vw", height:"245px"}}}>
      <img src={data?.imageUrl}/>
      <div className="container">
        <Paper variant='outlined' sx={{mt:"-95px", pt:"35px", pl:"75px", pr:"75px", mb:"35px", zIndex:"100", position:'relative', border:"1px solid #EAEAEA", boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)", borderRadius:"5px"}}>
          <Typography sx={{fontSize:"24px", lineHeight:"29px", textAlign:"center", mb:"50px", color:"#363636"}}>
            {data?.title}
          </Typography>
          <Typography sx={{fontSize:"18px", mb:"50px", lineHeight:"27px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.
                <br/><br/>
                At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
                In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.
                <br/><br/>
                Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut sagittis proin enim.
                Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque consectetur.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. 
          </Typography>
        </Paper>
        <Box component="div" sx={{position:"relative", left:"75px"}}>
          <ArticleLink text="Back to homepage" href="/"/>
          <ArrowBackIcon sx={{fontSize:"12px", position:"absolute", top:"6px", left:"-13px"}}/>
        </Box>
      </div>
    </Box>
  )
}
