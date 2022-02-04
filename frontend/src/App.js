import './App.css';
import {
  useLocation, Route, Routes, Navigate,
} from 'react-router-dom';
import ProductList from './components/ProductList/index';
import AddStories from './components/AddStories/AddStories';
import EditProduct from './components/EditProduct/EditProduct';
import Contextbutton from './components/ContextButton/ContextButton';

import { UserProvider } from "./contexts/User"
import AddSection from './components/AddSection/AddSection';


// const location = useLocation();

// useEffect(
//   () => {
//     console.log('on veut scroller !');
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   },
//   [location],
// );


function App() {
  return (
    <UserProvider>
      <div className="App">

        <div className="container">
            {/* <div className="column is-half is-offset-one-quarter"> */}

              <Routes>

                <Route path="/" element={<ProductList />} />
                <Route path="/edit/:id" element={<EditProduct />} />
                <Route path="/add" element={<AddStories />} />

              </Routes>
              <AddSection />

              <Contextbutton/>

            {/* </div> */}
        </div>

      </div>
    </UserProvider>
  );
}


export default App;
