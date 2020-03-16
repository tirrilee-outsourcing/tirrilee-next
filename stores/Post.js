import { observable, action } from 'mobx'
import * as PostAPI  from 'axios/post'

class Post {
    @observable data = [];
    
    @action getData = () => {
        PostAPI.getPosts()
        .then(res => {
            console.log(res)
            this.data = res.data
        })
        .catch(e => {
            console.log(e)
            console.log(e.response)
        })
    }
}

export default new Post()