import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userStore";
import getRandomCollaborator from "../services/apiManager";

// import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const navigate = useNavigate();

  const [randomUser, setRandomUser] = useState(null);

  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
    getRandomCollaborator()
      .then((res) => {
        console.log("RESPONSE OK ", res.data);
        setRandomUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   return (
//     <div className="home">
//       {user && (
//         <button
//           onClick={() => {
//             getRandomCollaborator()
//               .then((res) => {
//                 console.log("RESPONSE OK ", res.data);
//                 setRandomUser(res.data);
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           }}
//         >
//           random user
//         </button>
//       )}

//       {randomUser && <ProfileCard randomUser={randomUser} />}
//     </div>
//   );


return(
    <div>la home</div>
)

};

export default Home;
