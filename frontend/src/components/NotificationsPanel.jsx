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
        <Typography variant="h6" >Thoughts Time</Typography>
        <Typography className="empty-message">
          We don’t have any notice for you, till then you can share your thoughts with your peers.
        </Typography>
        <Button 
          variant="contained" 
          className="write-message-button" 
          onClick={() => alert("Open message modal or navigate")}
        >
          Write a message
        </Button>
        
      </Box>
      

      
    </Box>
  );
};

export default NotificationsPanel;
