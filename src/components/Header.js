import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector(store => store.gpt.showGptSearch);
  console.log(showGpt)

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  }

  const handleSelectLanguage = (e) => {
    
    dispatch(changeLanguage(e.target.value)); 
  }


  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsuscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          {showGpt && (<select className="m-2 px-4 py-2 bg-slate-700 text-white"
            onChange={handleSelectLanguage}
          >
            {
              SUPPORTED_LANGUAGES.map(language => {
                return <option key={language.identifier} value={language.identifier}>{language.name}</option>
              })
            }
          </select>)}
          <button
          className="px-4 h-10 py-2 bg-purple-800 m-2 mx-4  text-white rounded-lg"
          onClick={handleGptSearch}
          >
            {showGpt ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon"></img>
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
