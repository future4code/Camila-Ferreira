import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../components/Header"
import AddPostPage from "../pages/AddPostPage/AddPostPage"
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import HomeLoginPage from "../pages/HomeLoginPage/HomeLoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/login" element={<HomeLoginPage/>} />
                <Route path="/cadastro" element={<SignUpPage/>} />
                <Route path="/adicionar-post" element={<AddPostPage/>} />
                <Route path="/ver-post/:id" element={<DetailsPostPage/>} />
                <Route path="/" element={<FeedPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router