import React from 'react'
import * as S from "./styled"
import nav from "../../../assets/nav.json"


interface Props {
  text : string
  status?: boolean
  onClick? : () => void
}
interface Nav {
  id:number
  status:boolean
}

interface PropsInitStatus {
  status:boolean
}

const initStatus:PropsInitStatus = {
  status:false
}

export const Card = ({text,onClick,status}:Props) => {
  // const [status, setStatus] = React.useState(initStatus.status)
  // const refStatus = React.useRef(null)
  // const handleStatus = () => {
  //   console.log(refStatus)
  //   // nav.map((item:Nav) => {
  //   //   item.status=false
  //   //   if(item.id == id) item.status=true
  //   // })
  //   setStatus(false)
  
  // }

  return (
    <S.Container 
      onClick={onClick}
      status ={status}
    >
       {text}
    </S.Container>
  )
}
