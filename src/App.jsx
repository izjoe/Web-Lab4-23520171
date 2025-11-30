import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Section1 from "./pages/Section1.jsx";
import Section2 from "./pages/Section2.jsx";
import Section3 from "./pages/Section3.jsx";
import Section4 from "./pages/Section4.jsx";
import Section5 from "./pages/Section5.jsx";
import Section6 from "./pages/Section6.jsx";
import Section7 from "./pages/Section7.jsx";
import Section8 from "./pages/Section8.jsx";
import BlogLogin from "./pages/BlogDash/Login.jsx";
import BlogDashboard from "./pages/BlogDash/Dashboard.jsx";
import BlogPostDetail from "./pages/BlogDash/PostDetail.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

// Protected route wrapper that redirects to login if not authenticated
function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/blog/login" replace />;
  }
  return <Outlet />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />
            <Route path="/section4" element={<Section4 />} />
            <Route path="/section5" element={<Section5 />} />
            <Route path="/section6" element={<Section6 />} />
            <Route path="/section7" element={<Section7 />} />
            <Route path="/section8" element={<Section8 />} />
            <Route path="/blog/login" element={<BlogLogin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/blog/dashboard" element={<BlogDashboard />} />
              <Route path="/blog/post/:postId" element={<BlogPostDetail />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}