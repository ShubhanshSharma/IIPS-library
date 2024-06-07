import './Dashboard.css';
import IIPSLibraryHeading from '../IIPSLibrary/IIPSLibraryHeading';
import { Container } from '@mui/material';
import {Box} from '@mui/material';
import { Fullscreen } from '@mui/icons-material';

export default function Dashboard(){
    

    return(
        <Container
                    sx={{bgcolor:"#081327"}}
                    height="screen"  width="screen">

            <Box
                height={70}
                width="100%"
                display="flex"
                justifyContent="end"
                gap="50%"
                p={2}
                sx={{ }}
                >
            <IIPSLibraryHeading/>
            <IIPSLibraryHeading/>
            </Box>
        </Container>
    )
}