const reducerFunc = (state, action) => {
  if (action.type === "theme")
    return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
};
export { reducerFunc };
