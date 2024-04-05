import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button className="block" variant="text">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default HomePage;
