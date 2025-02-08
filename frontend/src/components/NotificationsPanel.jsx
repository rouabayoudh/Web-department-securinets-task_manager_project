import { useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "../assets/stylesheets/NotificationsPanel.css";

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <Box className="notifications-container">
      
      <Box className="icon-container">
        <LightbulbIcon className="icon" />
      </Box>

      
      <Box className="content-box">
        <Typography  >Thoughts Time</Typography>
        <Typography  className="empty-message">
        We don’t have any notice <br />
        for you,till then you can <br />
        share 
        your thoughts <br />
        with your peers.
        </Typography>
        <Button 
          
          className="write-message-button" 
          onClick={() => alert("Open message modal or navigate")}
        >
          <Typography  className="empty-notif-message" > Write a message</Typography>
        </Button>
        
      </Box>
      

      
    </Box>
  );
};

export default NotificationsPanel;
