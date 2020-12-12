import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto'
import Address from './Component/Profile/Address'
function App() {
  return (
    <div  style={{textAlign:'center', paddingTop: '50px'}}>
     <ProfilPhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
