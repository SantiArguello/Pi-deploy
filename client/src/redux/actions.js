import axios from "axios";
import {
  GET_RECIPES,
  SEARCH_NAME,
  GET_DIETS,
  FILTER_DIETS,
  ORDER_BY_LETTER,
  CHANGE_PAGE,
  HEALTH_SCORE,
  RECIPE_ID,
  CLEARID,
  SET_PAGES,
  FILTER_CREATED,
  CLEAN_ID
} from "./reducer";

export const cleanId = () => {
  return {
    type: CLEAN_ID
  }
}

export const getRecipes = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/recipes`);
    dispatch({ type: GET_RECIPES, payload: pedidoApi.data });
  };
};

export const searchName = (name) => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/recipes?name=${name}`);
    dispatch({ type: SEARCH_NAME, payload: pedidoApi.data });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/diets`);
    dispatch({ type: GET_DIETS, payload: pedidoApi.data });
  };
};

export const RecipeID = (id) => {
  return async (dispatch) => {
    let receta = await axios.get(`/recipes/${id}`);
    return dispatch({ type: RECIPE_ID, payload: receta.data });
  };
};

export const filterByDiets = (payload) => {
  return {
    type: FILTER_DIETS,
    payload: payload,
  };
};

export const orderByLetter = (payload) => {
  return {
    type: ORDER_BY_LETTER,
    payload,
  };
};

export const change_page = (Pagenumber) => {
  return {
    type: CHANGE_PAGE,
    payload: Pagenumber++,
  };
};

export const orderByHs = (payload) => {
  return {
    type: HEALTH_SCORE,
    payload,
  };
};

export const ClearId = () => {
  return {
    type: CLEARID,
  };
};

export const postRecipes = (payload) => {
  return async function () {
    const postRecipe = await axios.post("/recipes", payload);
    return postRecipe;
  };
};
export const setPage = (payload) => {
  return {
    type: SET_PAGES,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};


