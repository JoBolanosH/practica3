import {useState, useEffect} from "react";


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PostForm.css";


interface Props {
    onClick: (post: any) => void
}

const PostForm = ({onClick}: Props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body};
        onClick(post);
    };

    return (
        <div className="row justify-content-center text-center">
            <h4>New Post</h4>
            <form className="bg-white p-3" onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="d-flex justify-content-center">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;