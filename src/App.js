import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Box width={"95%"} margin={"auto"}>
      <Header />
      <Main />
    </Box>
  );
}

export default App;
