import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10;
    color: ${({theme})=>theme.text};
    margin-left: 5px;
`

const Name = styled.span`
   font-size: 13px;
   font-size: 500;
`

const Date = styled.span`
   font-size: 12px;
   font-weight: 400;
   color: ${({theme})=>theme.textSoft};
   margin-left: 5px;
`

const Text = styled.div`
   font-size: 14px;
`



const Comment = ({comment}) => {
  const [channel, setChannel] = useState({});
  
  useEffect(()=>{
    const fecthChannelinfo = async () =>{
      const res = await axios.get(`/users/find/${comment.userId}`)
      setChannel(res.data)
    }
    fecthChannelinfo()
  },[comment.userId])

  return (
    <Container>
    <Avatar src={channel.img} />
    <Details>
      <Name>
        {channel.name} <Date>1 day ago</Date>
      </Name>
      <Text>
        {comment?.desc}
      </Text>
    </Details>
  </Container>
  )
}

export default Comment