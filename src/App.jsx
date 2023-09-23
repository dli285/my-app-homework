import React from "react";
import { Provider } from "react-redux";
import { Container } from "@mui/material";
import { StudentList } from "./components/StudentList";
import { StudentAddForm } from "./components/StudentAddForm";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Container style={{ marginTop: '20vh' }} >
        <StudentAddForm/>
        <StudentList/>
      </Container>
    </Provider>
  );
}

export default App;
