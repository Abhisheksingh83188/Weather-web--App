import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/abhi.jpg';
import Form from '../components/form';
import Information from '../components/Information';

const Component = styled(Box)({
       height: '101vh',
       display: 'flex',
       alignItems: 'center',
       margin: '0 auto',
       width:'65%'
})
const Image = styled(Box)({
       backgroundImage: `url(${Sunset})`,
       width: '39%',
       height: '80%',
       backgroundSize: 'cover',
       borderRadius:'30px 0 0 30px'
})

const Home = () => {

       const[result,setResult]=useState({})
       return (
              <Component> 
                    <Image />
                     <Box style={{ width: '73%' ,height:'80%'}}>
                            <Form  setResult={setResult} />
                            <Information result={result} />
                    </Box>
              </Component>
       )
}
export default Home;