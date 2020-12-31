import { Avatar, Card,CardContent, CardHeader, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { observer } from "mobx-react-lite";
import React from "react";
import {CardType, default as GameCard} from "../types/Card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: '15%',
    border: "1px solid black",
    marginRight: "1%",
    padding: "0.5%"
  },
  header: {
    padding: 0
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: "10%",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardText: {
    textAlign: 'center',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: "0 !important",
  }
}));

const HandCard = ({card} : {card: GameCard}) =>  {
  const classes = useStyles();
  return (
  <Card className={classes.root}>
    <div>
      <CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="cost" className={classes.avatar}>
            {card.cost}
          </Avatar>
        }
        title={card.name}
        subheader={card.type}
      />
      <CardMedia
        className={classes.media}
        image={card.art}
        title={card.name}
      />
      <CardContent className={classes.cardText}>
        <Typography variant="body2" component="p">
          {card.description}
        </Typography>
      </CardContent>
    </div>
    {card.type === CardType.MINION && 
      <CardContent className={classes.footer}>
        <Avatar aria-label="attack" className={classes.avatar}>
              {card.cost}
        </Avatar>
        <Avatar aria-label="health" className={classes.avatar}>
              {card.cost}
        </Avatar>
      </CardContent>
    }

  </Card>
)
}

export default observer(HandCard);