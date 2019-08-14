import axios from '../http'; 

const article = { 
    getArticleList () {
        return axios.get('http://www.baidu.com')
    }
}

export default article;