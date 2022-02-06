import React ,{useEffect,useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
function Dashboard() {

    const [data,setData] = useState([])
    const [file,setFile] = useState(null)
    useEffect(() => {
        fetch()
    },[]);

    async function fetch() {
        try {
            const url = process.env.REACT_APP_API_URL + "file_actions/"
            let accessToken = sessionStorage.getItem('token')
            const headers = {Authorization : `Bearer ${accessToken}`, Accept: "application/json"}
            const response = await axios.get(url, {headers});
            debugger
            setData(response.data);

        } catch (error) {
            console.log(error);
        }

    }

    const handleCapture = (event) =>{
        debugger
        setFile(event.target.files[0])
    }

    async function onSubmit(){
        let payload = new FormData();
        payload.append("file", file);
        const url = process.env.REACT_APP_API_URL + "file_actions/"
        try {
            let accessToken = sessionStorage.getItem('token')
            const headers = {Authorization : `Bearer ${accessToken}`, Accept: "application/json"}
            const resp = await axios.post(url, payload,{headers});
            if(resp.status == 200){
                fetch()
            }
        } catch (error) {
        }

    }
    return (
        <div className="Dashboard">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                       
                    </Grid>
                    <Grid item xs={1}>
                        <Link href="/logout" underline="none">
                            Logout
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Card className="DashboardCard">
                 <CardContent>
                 <input id="icon-button"
                        onChange={handleCapture}
                        type="file"
                        />
                 <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
              >
                Upload
              </Button>
                 </CardContent>
            </Card>
            
            {
            
            data && data.map(item =>
              
                <Card className="DashboardCard">
                 <CardContent>
                     <Typography sx={{ fontSize: 16 }}>
                     <b>ID:</b> {item.id}
                     </Typography>
                     <Typography sx={{ fontSize: 16 }}>
                     <b>User ID:</b> {item.userId}
                     </Typography>
                     <Typography sx={{ fontSize: 16 }}>
                     <b>Title:</b> {item.title}
                     </Typography>
                     <Typography sx={{ fontSize: 16 }}>
                     <b>Body:</b>
                     <br />
                     {item.body}
                     </Typography>
                 </CardContent>
             </Card>
            )
            }
            
            
             
        </div>
    );
}

export default Dashboard;