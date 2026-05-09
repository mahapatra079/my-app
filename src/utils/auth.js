
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

function auth() {
    
    
    return (
        <>
            {/* 
                Login

                Register

                Token 
             */}
        </>
    );

}

export default auth;