export const fetchSent = () => {
  return {
    type: "FETCH_SENT"
  };
};

export const fetchRcvd = text => {
  return {
    type: "FETCH_RCVD",
    payload: text
  };
};

export const getModels = (models, brand) => {
  // console.log('action models: ', models, brand)
  return {
    type: "GET_MODELS",
    models: typeof models === "string" ? models.split(",") : [],
    brand: brand
  };
};

export const showCar = text => {
  console.log("action showCar", text);
  return {
    type: "SHOW_CAR",
    payload: text
  };
};

export const selectModel = text => {
  return {
    type: "SELECT_MODEL",
    payload: text
  };
};
export const selectCar = value => {
  return {
    type: "CHOOSE_CAR",
    payload: value
  };
};

export const changeContent = value => {
  return {
    type: "CHANGE_CONTENT",
    payload: value
  };
};

export const getCars = value => {
  return {
    type: "GET_CARS",
    payload: value
  };
};

export function getCarsFetch(url, userId) {
  return dispatch => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId
      })
    })
      .then(response => response.json())
      .then(value => dispatch(getCars(value)));
  };
}

export function deleteCar(car_id, user_id) {
         return dispatch => {
           fetch("/car/deletecar", {
             method: "DELETE",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify({
               car_id,
               user_id
             })
           })
            .then(response => response.json())
            .then(value => dispatch(getCars(value)));
           
         };
       }

export function getModelBrand(value) {
  return {
    type: "GET_MODEL_BRAND",
    payload: value
  };
}

export function selectedCar(value) {
  return {
    type: "SELECTED_ID",
    payload: value
  };
}