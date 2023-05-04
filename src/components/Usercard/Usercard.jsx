import "./Usercard.css";
import {
  RiUserFollowLine,
  RiUserFollowFill,
  RiRoadMapLine,
  RiMailLine,
  RiTimeLine,
  RiBuildingLine,
  RiFolder3Line,
  RiLinkM,
  RiBuilding2Line
} from "react-icons/ri";

export default function Usercard({
  name,
  pfp,
  bio,
  repos,
  following,
  followers,
  company,
  email,
  created,
  location,
  type,
  followerurl,
  followingurl,
  login,
  blog
}) {
  const followingg = "https://github.com/" + login + "?tab=following";
  const followerss = "https://github.com/" + login + "?tab=followers";
  const repositories = "https://github.com/" + login + "?tab=repositories";
  if (created == null) created = "No detectado";
  const date = created.split("T")[0];

  return (
    <div className="container">
      <div className="userinfo">
        <div className="userdetails">
          <div className="left">
            <img
              src={pfp ?? "https://i.imgur.com/V4RclNb.png"}
              alt=""
              className="avatar"
            />
          </div>
          <div class="right">
            <h1>
              {name ?? "Desconocido"} &nbsp; &nbsp;
              <span className="mini">{type ?? "(desconocido)"}</span>
            </h1>
            <h4>{bio}</h4>
            <br />
            <hr />
            <br />
            <table>
              <tr>
                <th>
                  <RiUserFollowLine />
                  &nbsp;{" "}
                  <a href={followingg} target="_blank" rel="noreferrer">
                    Siguiendo
                  </a>
                </th>
                <th>
                  <RiUserFollowFill />
                  &nbsp;{" "}
                  <a href={followerss} target="_blank" rel="noreferrer">
                    Seguidores
                  </a>
                </th>
                <th>
                  <RiFolder3Line />
                  &nbsp;{" "}
                  <a href={repositories} target="_blank" rel="noreferrer">
                    Respositorios
                  </a>
                </th>
              </tr>
              <tr>
                <td>{following}</td>
                <td>{followers}</td>
                <td>{repos}</td>
              </tr>
            </table>
            <br />
            <hr />
            <br />
            <p>
              <RiLinkM />
              &nbsp; <span> Blog</span> :{" "}
              <a href={blog}>{blog ?? "No tiene "}</a>
            </p>
            <p>
              <RiRoadMapLine />
              &nbsp; <span> Ubicacion </span> :{" "}
              {location ?? "Ubicacion desconocida"}
            </p>
            <p>
              <RiMailLine />
              &nbsp; <span> Email </span> : {email ?? "No detectado"}
            </p>
            <p>
              <RiTimeLine />
              &nbsp; <span> Fecha de creacion </span> : {date ?? "No detectada"}
            </p>
            <p>
              <RiBuildingLine />
              &nbsp; <span> Compañia </span> :{" "}
              {company ?? "No pertenece a una compañia"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
