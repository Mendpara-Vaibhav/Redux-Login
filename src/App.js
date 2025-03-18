import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Register from "./Components/Register";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Body />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/buttons"
                element={
                  <ProtectedRoute>
                    <h1>Buttons Page</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/colors"
                element={
                  <ProtectedRoute>
                    <h1>Colors Page</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/charts"
                element={
                  <ProtectedRoute>
                    <h1>Charts Page</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tables"
                element={
                  <ProtectedRoute>
                    <h1>Tables Page</h1>
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/forgotPassword"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="*"
              element={<h1>404 Page Not Found - Go Back Page Not Exists</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
