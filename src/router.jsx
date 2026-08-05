import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GalleryPage from "./pages/GalleryPage";
import Memories from "./pages/Memories";
import LetterPage from "./pages/LetterPage";
import Surprise from "./pages/Surprise";
import BirthdayWishes from "./pages/BirthdayWishes";
import AboutFalak from "./pages/AboutFalak";
import NotFound from "./pages/NotFound";


function PrivateRoute({ children }) {

    const login = localStorage.getItem("birthdayLogin");

    return login ? children : <Navigate to="/" />;

}


export default function Router() {

    return (

        <Routes>

            {/* Login Page */}

            <Route
                path="/"
                element={<Login />}
            />


            {/* Dashboard Page */}

            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>

                        <Dashboard />

                    </PrivateRoute>
                }
            />


            {/* Gallery Page */}

            <Route
                path="/gallery"
                element={
                    <PrivateRoute>

                        <GalleryPage />

                    </PrivateRoute>
                }
            />


            {/* Memories Page */}

            <Route
                path="/memories"
                element={
                    <PrivateRoute>

                        <Memories />

                    </PrivateRoute>
                }
            />


            {/* Birthday Letter Page */}

            <Route
                path="/letter"
                element={
                    <PrivateRoute>

                        <LetterPage />

                    </PrivateRoute>
                }
            />


            {/* Surprise Page */}

            <Route
                path="/surprise"
                element={
                    <PrivateRoute>

                        <Surprise />

                    </PrivateRoute>
                }
            />


            {/* Birthday Wishes Page */}

            <Route
                path="/wishes"
                element={
                    <PrivateRoute>

                        <BirthdayWishes />

                    </PrivateRoute>
                }
            />


            {/* About Falak Page */}

            <Route
                path="/about-falak"
                element={
                    <PrivateRoute>

                        <AboutFalak />

                    </PrivateRoute>
                }
            />


            {/* Page Not Found */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}