import React from "react";
import { Typography , AppBar , Card , CardActions , CardContent ,
CardMedia, CssBaseline , Grid, Toolbar, Container , Button} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Box, ThemeProvider, createTheme } from '@mui/system';


const cards = [0,1,2,3,4,5,6,7,8];




const App = () => {
    
    


    return (
       <div>
       <ThemeProvider>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
              <PhotoCamera sx={{mr:'20px'}}/>
              <Typography variant="h6"> Photo Album </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <Box sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
            }}>
                <Container maxWidth="sm">
                    <Typography variant="h1" align="center" gutterBottom>Photo Album</Typography>
                     <Typography variant="h5" align="center" gutterBottom>
                     Lorem ipsum dolor sit amet,a qui officia deserunt mollit anim id est laborum.
                     </Typography>
                     
                     <Box>
                        <Grid container spacing={4} sx={{justifyContent:'center'}}>
                         <Grid item>
                           <Button variant="contained" color="primary" sx={{mt:'40px'}}>
                                  See my photos
                           </Button>
                         </Grid>
                         <Grid item>
                           <Button variant="outlined" color="primary" sx={{mt:'40px'}}>
                                  Secondary Action
                           </Button>
                         </Grid>
                        </Grid>
                     </Box>
                </Container>            
            </Box>
            <Container sx={{p:'20px 0'}} maxWidth="md">
            <Grid container spacing={4}>
            {cards.map((card)=>(
                
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card sx={{height:'100%',display:'flex',flexDirection:'column'}}>
                        <CardMedia
                            sx={{pt:'56.25%'}}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                        <CardContent sx={{flexGrow:1}}>
                            <Typography gutterBottom variant="h5">
                                Heading
                            </Typography>
                            <Typography>
                                This is used to describe the section of the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                  </Grid>

                
            ))}
            </Grid>
                
            </Container>
        </main>
        <div>
        <Box sx={{p:8}}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
                Something here to give footer a purpose.
            </Typography>
        </Box>
        </div>
        </ThemeProvider>
       </div>
    )
}

export default App;