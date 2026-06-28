import "./index.css";

import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SinglePost from "./pages/SinglePost";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

import Playground from "./pages/playground/page";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import TerminalPage from "./pages/demos/TerminalPage";
import GitHubActivityPage from "./pages/demos/GitHubActivityPage";
import CodePlaygroundPage from "./pages/demos/CodePlaygroundPage";
import AsciiArtPage from "./pages/demos/AsciiArtPage";
import AchievementsPage from "./pages/demos/AchievementsPage";
import EffectsPlayground from "./pages/demos/EffectsPlayground";
import TerminalContextProvider from "./context/terminal/TerminalContextProvider";
import { GithubReposProvider } from "./context/github/GithubReposProvider";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export const AppContent = () => (
    <div className="min-h-screen flex flex-col bg-bg">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main className={`flex-1 p-3 md:p-8 md:pt-20 bg-bg dark:bg-bg2-dark`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />

          <Route path="/dev/playground" element={<Playground />} />
          <Route path="/demo/terminal" element={<TerminalPage />} />
          <Route
            path="/demo/github-activity"
            element={<GitHubActivityPage />}
          />
          <Route
            path="/demo/code-playground"
            element={<CodePlaygroundPage />}
          />
          <Route path="/demo/ascii-art" element={<AsciiArtPage />} />
          <Route path="/demo/achievements" element={<AchievementsPage />} />
          <Route path="/demo/effects" element={<EffectsPlayground />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <BrowserRouter basename={routerBase}>
    <StrictMode>
      <ThemeProvider>
        <TerminalContextProvider>
          <GithubReposProvider>
            <AppContent />
          </GithubReposProvider>
        </TerminalContextProvider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
);
