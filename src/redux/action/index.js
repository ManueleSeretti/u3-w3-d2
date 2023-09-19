export const SET_JOBS = "SET_JOBS";
export const SET_COMPANYS = "SET_COMPANYS";
export const ADD_COM_FAV = "ADD_COM_FAV";
export const DEL_FAV = "DEL_FAV";
export const GET_LOADING_ON = "GET_LOADING_ON";
export const GET_LOADING_OFF = "GET_LOADING_OFF";
export const GET_ERROR_ON = "GET_ERROR_ONDEL_FAV";
export const GET_ERROR_OFF = "GET_ERROR_OFF";

export const setJobsAction = (data) => ({ type: SET_JOBS, payload: data });
export const setCompanysAction = (data) => ({ type: SET_COMPANYS, payload: data });
export const addComAction = (data) => ({ type: ADD_COM_FAV, payload: data });
export const delComAction = (data) => ({ type: DEL_FAV, payload: data });

export const getJobsAction = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_LOADING_ON });
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanysAction(data));
        dispatch({ type: GET_ERROR_OFF });
      } else {
        alert("Error fetching results");
        throw new Error("Errore nel reperimento dei dati 😰");
      }
    } catch (error) {
      dispatch({ type: GET_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: GET_LOADING_OFF });
    }
  };
};
export const submitAction = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_LOADING_ON });
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsAction(data));
        dispatch({ type: GET_ERROR_OFF });
      } else {
        throw new Error("Errore nel reperimento dei dati 😰");
      }
    } catch (error) {
      dispatch({ type: GET_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: GET_LOADING_OFF });
    }
  };
};
