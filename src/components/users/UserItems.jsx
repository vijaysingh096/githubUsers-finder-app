import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function UserItems({ user }) {
  const { login, avatar_url } = user;
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visite Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
UserItems.prototype = {
  user: PropTypes.object.isRequired,
};
export default UserItems;
