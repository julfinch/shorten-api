# Data Protect Website
  -This react app was built using codesandbox.io 
  
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Codesandbox React App](#codesandbox-react-app)
- [Installing Yarn](#installing-yarn)
- [Create VITE App](#create-vite-app)

## Overview

### Screenshot

![](./_readme_img/Shortly.png)

### Links

- Live Site URL: [https://frabjous-eclair-f01ccc.netlify.app/](https://frabjous-eclair-f01ccc.netlify.app/)

## Codesandbox React App

1. Create a new sandbox:
2. Rename the title with an appropriate name.
3. Under **.src folder**, create an `assets` folder and `components` folder.
4. In the `assets` folder, upload all the images from your local machine.
5. In the `components` folder, create the following folders and the corresponding js and css files inside them:
     > - cloud
     >   - Cloud.js
     >   - CloudStyles.css
     > - data
     >   - Data.js
     >   - DataStyles.css
     > - footer
     >   - Footer.js
     >   - FooterStyles.css
     > - hero
     >   - Hero.js
     >   - HeroStyles.css
     > - navbar
     >   - Navbar.js
     >   - NavbarStyles.css

6. Install the following dependencies: 
     - react-icons
     - react-scroll
     - react-router-dom
7. Setting up the **Hamburger menu** for the `<Navbar />` when screen is less than 940px:
     > import `{useState}` from 'react'
     ```js
          import React, {useState} from 'react'
          import {SiDatabricks} from 'react-icons/si'
          import {FaBars} from 'react-icons/fa'
          import {FaTimes} from 'react-icons/fa'
          import './NavbarStyles.css'

          const Navbar = () => {
          const [nav,setNav] = useState(false)
          const handleNav = () => setNav(!nav)

          return (
          <div name='top' className='navbar'>
               <div className='container'>
                    <div className="logo">
                         <SiDatabricks className='icon' />
                         <h1>Secured.</h1>
                    </div>
                    <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                         <li>Home</li>
                         <li>Recovery</li>
                         <li>Cloud</li>
                         <li>Contact</li>
                         <button>Sign in</button>
                    </ul>
                    <div className="hamburger" onClick={handleNav}>
                         {!nav ? (<FaBars className="icon" />):(<FaTimes className="icon" />)}
                    </div>
               </div>
          </div>
          )
          }

          export default Navbar
     ```

     ```css
          .hamburger {
          display: none;
          padding: 1rem;
          }

          @media screen and (max-width: 940px) {
          .navbar .hamburger {
               display: block;
               z-index: 15;
          }
          .navbar .nav-menu {
               position: absolute;
               flex-direction: column;
               width: 100%;
               height: 100vh;
               top: 0;
               left: -100%;
               align-items: center;
               justify-content: center;
               background: rgba(0, 0, 0, 0.8);
               transition: 0.5s ease-in;
          }
          .navbar .active {
               left: 0;
          }
          .navbar li {
               margin-right: 1rem;
               font-size: 2rem;
          }
          .navbar button {
               font-size: 1.8rem;
          }
          }
     ```

8. Setting up the **SCROLL TO TOP** function inside the `<Footer />` :
    - `import { BsFillArrowUpCircleFill } from 'react-icons/bs'`
       ```js
               const Footer = () => {
               return (
               <div className='footer'>
                    <div className="container">
                         <div className="top">
                              <div className="logo-footer">
                                   <SiDatabricks className='icon' />
                                   <h2>Secured.</h2>
                              </div>
                              <Link activeClass="active" to="top" spy={true} duration={500} >
                                   <BsFillArrowUpCircleFill className='icon' />
                              </Link> 
                         </div>
                         <div className="col-container">
                              <div className="col">
                                   <h3>Navigation</h3>
                                   <p>Home</p>
          ```
    - For the `<BsFillArrowUpCircleFill/>` to lead us to the `<Navbar />`, insert the `name='top'` inside the `<div className='navbar'>` :
          ```js
               return (
                    <div name='top' className='navbar'>
                         <div className='container'>
          ```
9. Put the social media icons by installing `react-icons` and by importing it :
     ```js
          import { SiDatabricks } from 'react-icons/si'
          import { BsFillArrowUpCircleFill } from 'react-icons/bs'
          import { FiMail, FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
     ```
     ```js
          <form>
               <h3>Join Our Team</h3>
               <input type="email" placeholder='Enter your email'/>
               <FiMail className='mail-icon' />
               <div className="social-group">
                    <FiInstagram className="social-icon" />
                    <FiTwitter className="social-icon" />
                    <FiFacebook className="social-icon" />
                    <FiLinkedin className="social-icon" />
                    <FiGithub className="social-icon" />
               </div>
          </form> 
     ```
10. Inside the `src` folder, create another folder named `routes`. Inside it, create the following JS pages:
     - RecoveryPage.js
     - CloudPage.js
     - ContactPage.js
11. Inside the `index.js`, to link the pages in our `<Navbar />`, install the `react-router-dom` as dependency and import the following:
     **BE AWARE THAT THE RENDER PROCESS FOR COSESANDBOX IS DIFFERENT FROM WHEN YOU'RE USING VSCODE CREATE-REACT-APP **
     ```js
          import { createRoot } from "react-dom/client";
          import "./styles.css";
          import App from "./App";

          import {BrowserRouter, Routes, Route} from 'react-router-dom';

          import RecoveryPage from './routes/RecoveryPage';
          import CloudPage from './routes/CloudPage';
          import ContactPage from './routes/ContactPage';

          const rootElement = document.getElementById("root");
          const root = createRoot(rootElement);

          root.render(
               <BrowserRouter>
                    <Routes>
                         <Route path='/' element={<App />} />
                         <Route path='/recovery' element={<RecoveryPage />} />
                         <Route path='/cloud' element={<CloudPage />} />
                         <Route path='/contact' element={<ContactPage />} />
                    </Routes>
               </BrowserRouter>
          );
    ```
    
---

## Installing YARN
[https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-js](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-js)

1. I checked first to see if I have a yarn installed and see what version it is: 
	`yarn —version`
2. Output is: 
	`1.22.18`
3. I am inside `C:\Users\lenovo\Documents\webdev1_Jul\REACT` and already have a pre-made folder inside it named **\protect-secure**, to navigatte to that directory, I wrote in the terminal : 
	`cd protect-secure`
4. I then set the version to berry to download the current, actively developedd version of Yarn: 
	`yarn set version berry`
	![](./_readme_img/yarn-1-protect-secure.png)
5. To chech if indeed the latest berry was installed, I wrote:
	`yarn --version`
6. Result was :
	`3.2.1`
7. To start a new yarn project, I wrote:
	`yarn init`
	![](./_readme_img/yarn-2-protect-secure.png)
8. This command line created a `package.json` and `readme.md` inside **\REACT\protect-secure**

---

## Create VITE App
[https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite)

9. To start creating a VITE, I wrote:
	`yarn create vite`
10. It asked for a project name, I wrote:
	`protect-secure`
11. Then chose react on the following framework and variant:
	`Select a framework: >> react`
	`Select a variant: >> react`
12. This resulted to another folder named **\protect-secure** inside another folder with the same name. The result was: `\webdev1_Jul\REACT\protect-secure\protect-secure`
13. I opened the folder inside VSCode:
	`cd protect-secure`
14. Then install the dependencies:
	`yarn`
15. I met an error from here where it involves `yarn.lock` and `package.json` and it detects those files inside `C:\Users\lenovo` and is telling me to delete them.
	![](./_readme_img/yarn-3-protect-secure.png)
16. As a precaution, I just moved those 2 files that is inside it to another folder that I just made named **yarn and package json**. I wrote `yarn` again in the terminal but still the same error exists. Then I remembered that another `package.json` was created inside `webdev1_Jul\REACT\protect-secure` along with a `readme.md`. I moved both files inside a new folder I created inside `\REACT` named `from protect secure`. I ran `yarn` and it successfuly installed.
18. To start the Development Server and see the live server, I wrote:
 	`yarn run dev`	

PUBLISHING TO GITHUB:

1. Create a local git repository:
     `git init`
2. If there are uncommited files in the source control:
     `git commit -m "Your comment"`
3. Go to Github account and create a new Repo
4. Copy the link of the repo.
5. Type in the terminal in succession
     > Map the remote repo link to local git repo:
     > `git remote add origin <link>`
     >
     > Verifies the link to the remote repo:
     > `git remote -v`
     >
     > Pushes to commited changes into the remote repo:
     > `git push -u origin master`

IF ERROR:
     > error: src refspec master does not match any.  
     > error: failed to push some refs to 'ssh://xxxxx.com/project.git'

The most probable reason for this error is that all the files are untracked and have not been added. `git add --all` in case you wish to add all the files Or you can selectively add files. Then git `commit -m "Initial comment"`, `git push origin master`. This will surely work.

UNTRACKED FILES AND CAN'T COMMIT TO REPOSITORY:

  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> git branch --set-upstream-to=origin/main main
  > fatal: branch 'main' does not exist
  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> git pull origin master
  >  * branch            master     -> FETCH_HEAD
  > Already up to date.
  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> git remote -v
  > origin  https://github.com/julfinch/shorten-api.git (fetch)
  > origin  https://github.com/julfinch/shorten-api.git (push)
  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> git push
  > fatal: The current branch master has no upstream branch.
  > To push the current branch and set the remote as upstream, use
  > 
  >     git push --set-upstream origin master
  > 
  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> git push --set-upstream origin master  
  > Enumerating objects: 237, done.
  > Counting objects: 100% (237/237), done.
  > Delta compression using up to 2 threads
  > Compressing objects: 100% (226/226), done.
  > Writing objects: 100% (227/227), 23.16 MiB | 78.00 KiB/s, done.
  > Total 227 (delta 9), reused 0 (delta 0), pack-reused 0
  > remote: Resolving deltas: 100% (9/9), completed with 5 local objects.
  > To https://github.com/julfinch/shorten-api.git
  >    0bc4464..f5e9c93  master -> master
  > Branch 'master' set up to track remote branch 'master' from 'origin'.
  > PS C:\Users\lenovo\Documents\webdev1_Jul\REACT\shorten-api> 



### Built with

- Semantic HTML5 markup
- CSS custom properties
- React Router DOM
- ReactJS
- Vite

---
 
## Author

- Twitter - [@julfinch](https://www.twitter.com/julfinch)
