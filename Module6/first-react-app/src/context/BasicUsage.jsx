import { Box } from '@mui/material';
import { styled } from '@mui/system';

const styles = {
color: 'darkslategray',
backgroundColor: 'pink',
padding: '3em',
borderRadius: '1em',
border: '1px solid darkslategray',
margin: '6em 0'
}

const StyledDiv = styled('div')(styles);
const StyledBox = styled(Box)(styles);
export default function BasicUsage() {
return (
<>
<StyledDiv>This div includes styles</StyledDiv>
<StyledBox>This box has the same styles</StyledBox>
</>
);
}
// see https://mui.com/system/styled/ for more tips