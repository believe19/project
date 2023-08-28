import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index'
import { Container} from "@mui/material";
import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import {
  Navbar,
  IconButton,
  Input,
} from "@material-tailwind/react";

 


const api = 'https://restcountries.com/v3.1/all';
const langC = 'https://restcountries.com/v3.1/lang/';
const LanguageData = () => {
   const [data, setData] = useState([]);
    const [twoData, setTwoData] = useState([]);
    const [look, setLook]  = useState("");
    const handleLook = (e) =>{
      setLook(e.target.value)
    }

    const langoneData = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data) 
      console.log(data)
  }
    
    const langData = async (langName) =>{
      const response = await fetch(`${langC}${langName}`)
      const data = await response.json()
      setTwoData(data)
      console.log(data)
    }
    const searchButton = () =>{
      langData(look)
    }
    

    useEffect(() => {
      langoneData()
  }, []);
    return (
        <div style={{margin:"15px auto"}}>
          <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
              <Typography
                // as="a"
                href="#"
                variant="h6"
                className="mr-4 ml-2 cursor-pointer py-1.5"
              >
                SEARCH LANGUAGE
              </Typography>
              <div className="ml-auto flex gap-1 md:mr-4">
                <IconButton variant="text" color="blue-gray">
                  
                </IconButton>
                <IconButton variant="text" color="blue-gray">
                
                </IconButton>
              </div>
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  label="search by language..."
                  className="pr-20"
                  onChange={handleLook}
                  value={look}
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button onClick={searchButton} size="sm" className="!absolute right-1 top-1 rounded">
                  Search
                </Button>
              </div>
            </div>
          </Navbar>
            <Fetchs fetchs={twoData} />
        </div>
    )
}

function Fetchs ({fetchs}) {
  return (
    <Container style={{display:'grid', 
    gridTemplateColumns:'auto auto', 
    gap:'30px', margin:' auto'}}  >
        {fetchs.map((item, index) => {
           return (
            <Card sx={{ maxWidth: 400 }} key={index}>
              <CardActionArea>
                <h5>{item.name.official}</h5>
                <CardMedia
                  component="img"
                  height="220"
                  image={ item.flags.png}
                  alt=""
                />
                <CardContent style={{textAlign:"start"}}>
                  <Typography gutterBottom variant="h5" component="div" fontWeight={'700'}>
                  {item.name.common}
                  </Typography>
                  <Typography variant="body1" color="text.primary" lineHeight={2}>
                    <h5>Capital: {item.capital}</h5>
                  </Typography>
                  <Typography variant="body2" color="text.primary"  lineHeight={2}>
                    <h5>CarSide:🚗 {item.car.side}</h5>
                  </Typography>
                  <Typography variant="body2" color="text.primary"  lineHeight={2}>
                    <h5>Region: {item.region} </h5>
                  </Typography>
                  <Typography variant="body1" color="text.primary"  lineHeight={2}>
                   <h5> Subregion:{item.subregion}</h5>
                  </Typography>
                  <Typography variant="body1" color="text.primary"  lineHeight={2}>
                    <h5>Area: {item.area}</h5>
                  </Typography>
                  <Typography variant="body1" color="text.primary" >
                    <h5>Start Of Week: {item.startOfWeek}</h5>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" size="small" color="primary">
                  See More
                </Button>
              </CardActions>
            </Card>
          ); 
      })}

    </Container>
  )
}

export default LanguageData;
