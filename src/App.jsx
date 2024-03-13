import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <div>
        < Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            theme: {
                primary: '#4aed88',
            },
        },
        }}
        />
         <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/editor/:roomId"
                        element={<EditorPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
      </div>
    </>
  )
}

export default App;