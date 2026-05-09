import { JSONWebToken } from "./JSONWebToken";

export const JWT = () => {
    return (
        <div className="card">
          <JSONWebToken/>
        </div>
    );
}

// Login flow
// Token storage
//  Protected data fetch
// Logout