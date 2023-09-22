import React, { useState,useEffect } from 'react';
import './UserProfile.css';
import { app, db } from "../../firebase";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, query, doc, getDoc } from "firebase/firestore";

async function getProfileInfo() {
  try {
    const docRef = doc(db, "userProfile", "mQq58ay0KTYCiTsuCJHr");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

// Use a function declaration instead of a class declaration
function UserProfile(props) {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [genres, setGenres] = useState([]);
  const [userProfileURL, setUserProfileURL] = useState("");
  const [backgroundImageURL, setBackgroundImageURL] = useState("");

    useEffect(() => {

    getProfileInfo().then((info) => {
      setUsername(info.userName);
      setEmail(info.email);
      setAge(info.age);
      setGenres(info.interestedGenres);
      setUserProfileURL(info.userProfileImage);
      setBackgroundImageURL(info.backgroundImage);
    });
  }, []);



  // Use a return statement instead of a render method
  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-pic">
          {/* Use props instead of this.props */}
          <img className = "profile-img" src={props.profilePic || backgroundImageURL } alt="Profile" />
          <img className = "avatar" src = { userProfileURL } alt = "profilePicture"/>
        </div>
        <div className="profile-info">
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                {/* Use state instead of this.state */}
                <td>{username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Genres:</td>
                {/* Use the map function to display the genres as a list */}
                <td>{genres.map(genre => <li key={genre}>{genre}</li>)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
