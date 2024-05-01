import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./scenes/login/log/Log";
import Sign from "./scenes/login/sign/Sign";
import Reset from "./scenes/login/reset/Reset";
import HomePage from "./scenes/homePage";
import Profile from "./scenes/feed/profile/Profile";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Log />} />
            <Route path="sign" element={<Sign />} />
            <Route path="reset" element={<Reset />} />
            {isAuth && (
              <>
                <Route
                  path="/home"
                  element={<HomePage />}
                />
                <Route
                  path="/profile/:userId"
                  element={<Profile />}
                />
                 <Route
                  path="/profile"
                  element={<Profile />}
                  ></Route>
              </>
            )}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
