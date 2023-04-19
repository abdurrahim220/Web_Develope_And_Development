/**
 *          -------------------
 *             INITIAL SETUP
 *          -------------------
 * 
 * 1.visit firebase
 * 2.create project(skip google analytics)
 * 3.Register app(create config)
 * 4.install firebase
 * 5.add config file to your projects
 * 6.do not publish or make firebase config to public by pushing github those to github
 * 
 *          ------------------
 *              INTEGRATION
 *          ------------------
 * 
 * 7.go to docs > build > authentication > Web > get Started
 * 8.export app from firebase.config.js file : export default app 
 * 9.login.jsx import getAuth from firebase/auth
 * 10.create const auth = getAuth(app)
 * 
 *          ------------------
 *             PROVIDER SETUP
 *          ------------------
 * 
 * 11.import google auth provider and create new provider;
 * 12.use signUpWithPopUp  and pass auth and provider
 * 13.activate sign-in method (google,facebook,github,etc)
 * 14. [vite]: change 127.0.0.1 to localHost
 * 
 * 
 * -------------------
 * More auth provider
 * -------------------
 * 15.activate the auth provider (create app, provider redirect url,clint id ,client secret)
 */