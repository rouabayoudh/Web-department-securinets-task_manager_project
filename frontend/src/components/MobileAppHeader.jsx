import React, { useState } from "react";
import "../assets/stylesheets/MobileAppHeader.css";
import linkIcon from "../assets/images/refresh.png";  
import modifIcon from "../assets/images/pencil.png";  

export default function MobileAppHeader() {
  const [projectName, setProjectName] = useState("Mobile App");
  const [projectColor, setProjectColor] = useState(" "); 
  const [isEditing, setIsEditing] = useState(false); 
  const [newName, setNewName] = useState(projectName);
  const [newColor, setNewColor] = useState(projectColor);
  const [linkCopied, setLinkCopied] = useState(false);
  const [invitedUsers, setInvitedUsers] = useState([
    { id: 1, name: "User 1", avatar: "user1.png" },
    { id: 2, name: "User 2", avatar: "user2.png" },
    { id: 3, name: "User 3", avatar: "user3.png" },
    { id: 4, name: "User 4", avatar: "user4.png" }
  ]);

  const handleModifClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProjectName(newName);
    setProjectColor(newColor);
    setIsEditing(false);
    document.body.style.backgroundColor = newColor; 
  };

  const handleCancelEdit = () => {
    setNewName(projectName);
    setNewColor(projectColor);
    setIsEditing(false);
  };

  const handleLinkClick = () => {
    const link = `https://yourapp.com/project/${projectName}`;
    navigator.clipboard.writeText(link).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  const handleInviteUser = () => {
    const newUserId = invitedUsers.length + 1;
    const newUser = { 
      id: newUserId, 
      name: `User ${newUserId}`, 
      avatar: `user${newUserId}.png`
    };
    setInvitedUsers([...invitedUsers, newUser]);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="title">{projectName}</h1>
        <div className="icons">
          <button className="icon-button" onClick={handleModifClick}>
            <img src={modifIcon} alt="Modif" className="icon-image" />
          </button>
          <button className="icon-button" onClick={handleLinkClick}>
            <img src={linkIcon} alt="Link" className="icon-image" />
          </button>
        </div>
      </div>

      <div className="header-right">
        {/* Invite Button with Just "+" */}
        <button className="invite-button" onClick={handleInviteUser}>
          <span className="plus">+</span> Invite
        </button>

        <div className="avatars">
          {invitedUsers.slice(0, 4).map((user) => (
            <img key={user.id} src={user.avatar} className="avatar" alt={user.name} />
          ))}
          {invitedUsers.length > 4 && (
            <div className="avatar more">+{invitedUsers.length - 4}</div>
          )}
        </div>
      </div>

      {linkCopied && <div className="link-copied-message">Link copied !</div>}

      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Edit Project</h2>
            <form onSubmit={handleSaveChanges}>
              <label>
                Project Name:
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </label>
              <label>
                Project Color:
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                />
              </label>
              <div className="form-buttons">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button type="button" className="cancel-button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
