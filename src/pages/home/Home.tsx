import {useState} from 'react';
import {SearchBlock} from '../../components/searchBlock/SearchBlock';
import style from "./Home.module.scss";
import {CardList} from '../../components/cards-list/CardsList';



export default function Home() {

  const [currentSearch, setCurrentSearch] = useState<string>("");
  
  return (
    <div className="container">
      <SearchBlock setSearch={setCurrentSearch}/>
      <CardList  searchStr={currentSearch}/>
    </div>
        
  )
}
