import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios'

export default class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((res)=>{
            this.setState({
                post : res.data
            })
        })
    } 

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
    }

    handleFormChange = (event) =>{
        let formBlogPostNew = {...this.state.formBlogPost};
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value obj formBlogPost: ', this.state.formBlogPost);
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit">Simpan</button>
                </div>
                {
                    this.state.post.map(post =>{
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}