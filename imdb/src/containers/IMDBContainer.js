import React, { Component } from 'react';
import FilmContainer from '../components/FilmContainer.js'
import SeeMore from '../components/SeeMore.js'
import GetShowTimes from '../components/GetShowTimes.js'

class IMDBContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Sausage Party",
        link: "https://www.imdb.com/title/tt1700841/?ref_=nv_sr_1" },
        {
          id: 2,
          title: "Cafe Society",
          link: "https://www.imdb.com/title/tt4513674/?ref_=nv_sr_1"},
          {
            id: 3,
            title: "Morgan",
            link: "https://www.imdb.com/title/tt4520364/?ref_=fn_al_tt_1"}]
        };
      };
      render(){
        return <div className="IMDB-container">
          <p>UK Opening This Week</p>
        <FilmContainer data={this.state.data} />
          <SeeMore />
          <GetShowTimes />
        </div>
      }
    }

    export default IMDBContainer;
