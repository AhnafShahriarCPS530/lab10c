import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <div>
        <h1>
          Welcome to Ahnaf's react page. This page shows how to install react in Windows
        </h1>
        <p>Step1: Go to "wwww.nodejs.org"</p>
        <p>Step2: Next I downnloaed a 64-bit version for windows from the website</p>
        <p>Step3: Next I created a folder in my c drive named reactLab10c, and installed react</p>
        <p>Step4: Next I opened Windows Power Shell as an administrator and changed my directory to the location of reactLab10c folder in C drive. </p>
        <p>Step5: Next I ran the command "npm init reac-app reactLab10c" to install react in the folder </p>
        <p>Step6: Next I opened the folder, where I installed react, in Visula Studio Code; any text editor will work  </p>
        <p>Step7: Than I used the "cd" command to go to my react folder and executed the "npm start" command. This allowed me to edit my lab10c website. </p>
        <h1>Setting up webpage in GitHub</h1>
        <p>Step1: In the upper-right corner of any page, use the drop-down menu, and select New repository.</p>
        <p>Step2: Entered username.github.io as the repository name. Replace my username with my GitHub username</p>
        <p>Step3: Under my repository name, clicked Settings.</p>
        <p>Step4: In the "Code and automation" section of the sidebar, clicked  Pages. </p>
        <p>Step5: Under "Build and deployment", under "Source", select Deploy from a branch. </p>
        <p>Step6: Under "Build and deployment", under "Branch", use the None or Branch drop-down menu and select a publishing source.  </p>
        <p>Step7: Visit username.github.io to view your new website </p>
        <p>Step8: Uploaded my .js and .css files from C-drive directory to my  username.github.io  repository to host my website on Github.</p>

        </div>
        <img src = "http://ryengalmanac.ca/wp-content/uploads/2021/05/RESS.png" height = "250px" width = "250px"></img>
        
       
      </header>
    </div>
  );
}

export default App;
