
import './App.css';
import Card from './component/card';
import Jumbutron from './component/jumbutron';
import Navbar from './component/navbar';

function App() {
  const imageUrl1 = ['https://www.pulsopyme.com/wp-content/uploads/2016/05/tecnolog%C3%ADa2.jpg',
                     'https://ceslanformacion.es/wp-content/uploads/2017/11/3-19-500x500.png',
                     'https://educacionprofesional.ing.uc.cl/wp-content/uploads/2022/02/dids_mtig_0222.jpg',
                     'https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2023/07/28084410/Proyecto-nuevo-29-500x500.jpg'];
  
  return (
    <div className="App">
      <Navbar/>
      <div className='container-body-page col-9'>
        <Jumbutron/>
        <div className='row'>
          <div className='col-lg-3 col-sm-12'>
            <Card className="mb-3" imageUrl={imageUrl1[0]}/>
          </div> 
          <div className='col-lg-3 col-sm-12'>
            <Card className="mb-3" imageUrl={imageUrl1[1]}/>
          </div>
          <div className='col-lg-3 col-sm-12'>
            <Card className="mb-3" imageUrl={imageUrl1[2]}/>
          </div>
          <div className='col-lg-3 col-sm-12'>
            <Card className="mb-3" imageUrl={imageUrl1[3]}/>
          </div>
        </div>
      
      </div>
      <div className="card-footer text-light mt-2 bg-dark">
          Copyright @ website 2023
      </div>
    </div>
  );
}

export default App;
