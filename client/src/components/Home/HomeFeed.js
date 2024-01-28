import axios from 'axios'
import React,{useEffect,useState} from 'react'
import '../StyleSheet/HomeFeed.css'
import Avatar from '@material-ui/core/Avatar'
import TweetBox from '../Tweet/TweetBox'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import ReplayIcon from '@material-ui/icons/Replay'
import GetAppIcon from '@material-ui/icons/GetApp'
import { withRouter } from 'react-router-dom'
const HomeFeed = ({history}) =>{
    const [tweets,setTweets] = useState([])
    const [mounted,setMounted] = useState('')
    useEffect(()=>{
        if(!localStorage.getItem('token')){
           history.push('/login')
        }else{
            const loadData = async function(){
                const url = '/api/tweet'
                const {data} = await axios.get(url)
                setTweets(data)
            }
            loadData()
        }
       
       
    },[history])
    const likeFunction = (id) =>{
        const url = `/api/tweet/likes/${id}`
        axios.post(url)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
     }
     const comments= (id) =>{
        const url = `/api/tweet/comments/${id}`
        const comment = prompt('enter a comment')
        const data = new FormData()
        data.append('comment',comment)
        axios.post(url,data)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
     }
    console.log(tweets);
    return(
        <div className='HomeFeed__container'>
            <TweetBox/>
            < div className='feed'>
                {
                    tweets && <div className='feeds'>
                        
                        {
                            tweets.map(tweet=>{
                                return <div className='Feeds_content' key={tweet._id}>
                                   <div className='User_profile'>
                                   <Avatar alt='User Profile' src={tweet.profile}/>
                                    </div>
                                    <div className='Tweet'>
                                        <div className='user'>
                                            <h3>{tweet.user}</h3>
                                            <h3 className='user__tag'>{`@${tweet.user}`}</h3>
                                            </div>
                                            <h4 >{tweet.tweet}</h4>
                                            {
                                                tweet.file ? <img className='file' src={tweet.file} alt='file'/> : null
                                            }
                                            <div className='Tweet__icons'>
                                               <div className='likes'>
                                               <FavoriteIcon onClick={()=> likeFunction(tweet._id)}/>
                                                <h5>{tweet.likes}</h5>
                                                </div>
                                                <div className='comments'>
                                               <MessageIcon onClick={() => comments(tweet._id)}/>
                                                <h5>{tweet.comments.length}</h5>
                                                </div>
                                                <GetAppIcon className='download'/>
                                                <ReplayIcon className='replay'/>
                                            </div>
                                    </div>
                                    </div>
                            }
                            )
                                        
                        }
                        </div>
                }
        </div>
        </div>
    )
}
export default withRouter(HomeFeed)