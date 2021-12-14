import './App.css';
import Profile from './Profile/Profile';

function App() {

  function handleName(name) {
    alert(name)
  }

  return (
    <div style={{ boxShadow: "5px 5px 10px", borderRadius: '50px', backgroundColor: 'beige', margin: "20px" }}>
      <Profile fullName="Mahdi Selmani" Profession="Web developer" bio="This is a bio. This is a bio." handleName={handleName} >
        <img style={{ borderRadius: "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelrQiI0cqKSwdEco3r4ebw5fgm-zRs52JU3mepTXYma-AsugbNPGsfvD506onLUm61i4&usqp=CAU" alt="Profile"></img>
      </Profile>
    </div>
  );
}

export default App;
