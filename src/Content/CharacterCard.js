import { Grid, Card, CardMedia, Typography, CardContent, Button, CardActionArea } from "@mui/material"
// import { width } from "@mui/system"

const CharacterCard = ({filtered, json, type}) => {
    
  return (
    <div>
        <Grid container justifyContent="center">
            {
            filtered.map(item => ( 
                <Card sx={{ minWidth:250, maxWidth:250, m:"8px", p:0 }}>
                    <CardActionArea>
                    <CardMedia 
                        sx={{ 
                            maxHeight: 300, objectFit: "cover", objectPosition:"top"
                        }}
                        component="img"
                        alt={item.name}
                        image={item.image}
                    />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography 
                            variant="caption" color="text.secondary"
                        >
                            Allegiance: {item.house.map(item => <>{item} </>)}
                        </Typography>
                        <Typography align="left"  variant="subtitle2" sx={{pt: 1}}>
                            Chapters:
                            <Button size="small">Read</Button>
                            <Button size="small">Listen</Button>
                        </Typography>
                    </CardContent>
                </Card> 
            ))}
        </Grid>  
    </div>
  )
}

export default CharacterCard
