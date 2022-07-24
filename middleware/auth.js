export default ({ redirect }) => {
    // console.log(context);
    const loggedIn = true; // verificar token
    if (!loggedIn) {
        return redirect('/Login');
    }
    console.log('Auth middleware');
}
