import React from 'react'
import nav from "../../assets/nav.json"
import * as S from "./styled"
import { Card } from './utils/card'

const Main:React.FC = () => {
  const [idStatus, setIdStatus] = React.useState(2)
  // const [status, setStatus] = React.useState(false)

  
  const handleStatus = (idS:number) =>{

    console.log(idS)
    setIdStatus(ant => ant = idS)
      nav.map((item) => {
        item.status = false;
        if(item.id == idS){
          item.status = true
        }
      })
  }


  return (
    <S.Container>
      {
        nav.map(({id,tag,status}) => (
            <Card 
            key={id}
            // onClick={handleStatus}
            status={status}
            onClick = {() => handleStatus(id)}
            text={tag}/>
        ))
      }
    </S.Container>
  )
}
  
export default Main