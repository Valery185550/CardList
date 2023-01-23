import { Divider, Typography, Grid} from '@mui/material';
import React from 'react';
import { useGetAllCardsQuery} from '../../features/cards/cardsSlice';
import InfoCard from '../card/InfoCard';
import {Card} from "../../types";


interface Props{
  searchStr:string
}

function createCardContent(text:string, searchStr:string){
  let content : ((string | React.ReactNode)[]) | string=[];
  let countSpan:number =0;
  let textPointer = text.indexOf(searchStr);
  if(textPointer === -1){
    content=text;
    return {content,countSpan};
  } 
  let lastSpanIdx =0;
  while(textPointer !== -1)
  {
    content.push(text.substring(lastSpanIdx,textPointer))
    content.push(<span key={Math.random()+""}>{searchStr}</span>);
    debugger;
    countSpan++;
    textPointer += searchStr.length;
    lastSpanIdx=textPointer;
    textPointer = text.indexOf(searchStr, textPointer);
  }
  content.push(text.substring(lastSpanIdx));
  return {content,countSpan};
}

export function CardList({searchStr}:Props) {

  const{data, isLoading} = useGetAllCardsQuery();
  if(isLoading){
    return <div>Loading...</div>;
  }

  let cards:Card[]=[];
  if(searchStr === ""){
    cards = data!;
  }
  else{
    
    data?.forEach(card=>{
      debugger;
      const {content:contentTitle, countSpan:spanInTitle} = createCardContent(card.title as string, searchStr);
      const {content:contentDescription, countSpan:spanInDescription} = createCardContent(card.description as string, searchStr);
      let obj:Card = {
        ...card,
        title:contentTitle,
        description:contentDescription,
        spanInTitle,
        spanInDescription,
      }
      debugger;
      if(obj.spanInTitle!=0 || obj.spanInDescription!=0){
        cards.push(obj);
      }
    })
  
      cards?.sort(function(a,b){
        if((a?.spanInDescription! + a?.spanInTitle!) > (b?.spanInDescription! + b?.spanInTitle!)){
          return -1;
        }
        if((a?.spanInDescription! + a?.spanInTitle!) < (b?.spanInDescription! + b?.spanInTitle!)){
          
          return 1;
          
        }
  
        if((a?.spanInDescription! + a?.spanInTitle!) === (b?.spanInDescription! + b?.spanInTitle!)){
          if(a?.spanInTitle! > b?.spanInTitle!){ 
            return -1;
          }
  
          if(a?.spanInTitle! < b?.spanInTitle!){
            return 1;
          }
  
          return 0;
        }
  
        return 0;
  
      })
  }
   

    return (
    <div>
      <Typography>
        Results: {cards?.length}
      </Typography>
      <Divider sx={{border:`1px solid #EAEAEA;`, mb:"45px"}}/>
      <Grid container justifyContent="space-between">
        {cards?.map(card=><InfoCard key={card?.id!} id={card?.id!} imgUrl={card?.imageUrl!} date={card?.date!} title={card?.title!} description={card?.description!}/>)}
      </Grid>
    </div>
  )
}