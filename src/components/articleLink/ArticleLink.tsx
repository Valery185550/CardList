import React from 'react';
import {Link} from '@mui/material';

interface Props{
  text:string,
  href:string,
}

export default function ArticleLink({text,href}:Props) {
  return (
    <Link underline='none' href={href} sx={{fontWeight:"700", fontSize:"16px", lineHeight:"24px", color:"#363636",}}>{text}</Link>
  )
}
