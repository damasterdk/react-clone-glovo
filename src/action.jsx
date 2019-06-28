const API_LOGIN_URL = "http://localhost:3000/api/login";
const API_LOGOUT_URL = "http://localhost:3000/api/logout";

function increaseQuantity(id) {
  return {
    type: "INCREASE_PRODUCT",
    payload: {
      id
    }
  };
}

function decreaseQuantity(id) {
  return {
    type: "DECREASE_PRODUCT",
    payload: {
      id
    }
  };
}

function removeCart(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      id
    }
  };
}

function reset() {
  return { type: "RESET" };
}

function addCart(product) {
  console.log(product);
  return {
    type: "ADD_PRODUCT",
    payload: {
      ...product,
      quantity: 1
    }
  };
}

function login(user) {
  return async dispatch => {
    const response = await fetch(API_LOGIN_URL, {
      method: "POST",
      credentials: "include",
      body: user ? JSON.stringify(user) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json();
    dispatch({ type: "LOGIN", payload });
  };
}

function logout() {
  return async dispatch => {
    const response = await fetch(API_LOGOUT_URL, {
      method: "DELETE",
      credentials: "include"
    });
    if (!response.ok) {
      dispatch({ type: "DEFAULT" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };
}

export {
  login,
  logout,
  increaseQuantity,
  decreaseQuantity,
  reset,
  addCart,
  removeCart
};
