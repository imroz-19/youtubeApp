import React from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
class App extends React.Component{
    state = {
        listOfVideos: [],
        selectedVideo: null
    }
    onTermSubmit =async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);
        this.setState({
            listOfVideos: response.data.items,
            selectedVideo: response.data.items[0],
        })
        console.log(this.state.listOfVideos)
        
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    componentDidMount(){
        this.onTermSubmit('buildings');
    }


    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                       <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo}/>
                       </div>                 
                        <div className="five wide column">
                        <VideoList 
                            videos = {this.state.listOfVideos} 
                            onVideoSelect={this.onVideoSelect} 
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
};

export default App;
