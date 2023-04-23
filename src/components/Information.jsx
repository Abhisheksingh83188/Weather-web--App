import { Box ,Typography} from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, WbSunny, WbTwilight, Dehaze, Cloud, Air, CompareArrows, Thermostat } from '@mui/icons-material';
import styled from '@emotion/styled';

const Row = styled(Typography)({
       padding: 10,
       fontSize: 20,
       letterSpacing: 1.7,
       '& > svg': {
              marginRight: 10
       }
});
const Empty = styled(Typography)({
       color: 'red',
       margin: 50,
       padding:20
})

const Information = ({result}) => {
       return(
              result && Object.keys(result).length > 0 ?
                     
                     <Box style={{ margin: '30px,60px' }}>
                            <Row> <LocationOn />Location:{result.name}, {result.sys.country}</Row>
                            <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
                            <Row><Opacity />Humidity: {result.main.humidity}</Row>
                            <Row><CompareArrows /> Pressure: {result.main.pressure}</Row>
                            <Row><Thermostat /> Temperature: {result.main.temp} </Row>
                            <Row><WbSunny /> Sun Rise : {new Date(result.sys.sunrise *1000).toLocaleTimeString() }</Row>
                            <Row><WbTwilight /> Sun Set: { new Date(result.sys.sunset *1000).toLocaleTimeString()}</Row>
                            <Row><Dehaze /> Humidity: {result.weather[0].main}</Row>
                            <Row><Cloud /> Clouds: {result.clouds.all}%</Row>
                            <Row><Air />Wind: { result.wind.speed}</Row>
                     </Box>
                     :
                     <Empty>Please Enter the City And Country name to check the Weather</Empty>
       )
}

export default Information;