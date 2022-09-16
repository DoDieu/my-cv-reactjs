import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";


export default function Search() {
    const navigate = useNavigate();
    const backPage = () => {
        localStorage.clear();
        navigate("/login", {from: "LoginPage"});
    }
    return(
        <>
            <Button type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={backPage}
            >
                logout
            </Button>
             <form>
                
                <TextField
                id="search-bar"
                className="text"
                label="Enter a city name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                
            </form>   
        </>
    );
}