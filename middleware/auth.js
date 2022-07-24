export default ({ redirect }) => {
  const loggedIn = true;
  if (!loggedIn) {
    return redirect("/Login");
  }
};
