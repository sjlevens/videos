import axios from 'axios';

const KEY = 'AIzaSyDL_t-UeVYOiypOkStba_tVB8e8wiQNy6c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
