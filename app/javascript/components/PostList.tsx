import {useEffect, useState} from "react";
import Logo from "../../assets/images/logo.svg"
import "./PostList.css";
import PostForm from "./PostForm";
import List from "@mui/material/List";
import {ListSubheader} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const axios = require('axios').default;

// const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
//
// if (token) {
//     axios.defaults.headers.common['X-CSRF-Token'] = token;
// }

const notyf = new Notyf();

const PostList = () => {
    const [posts, setPosts] = useState([]);

    //Modal
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleSetModalInfo = (modalTitle, modalBody) => {
        setTitle(modalTitle);
        setBody(modalBody)
        handleOpen();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        opacity: 0.9,
        boxShadow: 24,
        p: 4,
    };

    //Endpoints Calls
    useEffect(() => {
        axios.get('/posts.json')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error al cargar los posts:", error);
                notyf.error({message: "Error al cargar los posts", position: { x: 'right', y: 'top' } });
            });
    }, []);

    const callPost = (post) => {
        axios.post("/posts.json", { post })
            .then((response) => {
                setPosts((prevPosts) => [response.data, ...prevPosts]);
                notyf.success({message: "Post creado exitosamente", position: { x: 'right', y: 'top' } });
            })
            .catch((error) => {
                console.error("Error al crear post:", error);
                notyf.error({message: "Error al crear post", position: { x: 'right', y: 'top' } });
            });
    };



    return (
        <>
            <div className="container-fluid bg">
                <div className="row p-5 d-flex justify-content-center">
                    <img src={Logo} className="logo" alt="Logo" style={{width: "300px"}}/>
                </div>
                <div className={"centered shadow-sm p-3 mb-5 bg-white rounded"}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                            <PostForm onClick={callPost}/>
                        </div>
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: 300,
                                    '& ul': {padding: 0},
                                }}
                                subheader={<li/>}
                            >
                                {posts.map((post) => (
                                    <li key={`section-${post.id}`}
                                        onClick={handleSetModalInfo.bind(this, post.title, post.body)}>
                                        <ListSubheader>{`${post.id} - ${post.title}`}</ListSubheader>
                                    </li>
                                ))}
                            </List>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {body}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default PostList;
