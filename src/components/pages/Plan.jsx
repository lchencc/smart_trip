import React from 'react';
import Attraction from '../Attraction.jsx';
import { Button } from '../Button.jsx';

import '../styles/Plan.css';
import PlanData from '../../assets/data/PlanData.json';

class Plan extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      attractionsLoaded : true,
      attractions : PlanData,
      description : {},
      idSelected : "",
      idDeleted : "",
      nameSelected : "",
      planned : [],
      imageLink : "",
      location : {},
      idToName : {},
      idToImage : {},
      idToLocation : {}
    }
  }
  
  handleSelect = (event)  => {
    event.preventDefault();
    let name = event.target.className
    let nameSelected = name.substring(name.indexOf(' ') + 1)

    this.setState({
      idSelected: event.target.id,
      nameSelected: nameSelected,
    });

    let result = this.state.attractions.attractions[event.target.id];
    
    this.setState({
      location: { lat: result.latitude, lng: result.longitude},
      imageLink: result["photo_large"],
      description: result,
    });

    let idToName = this.state.idToName;
    idToName[event.target.id] = nameSelected;

    this.setState({
      idToName: idToName,
    });
  }
  
  handleAdd = () => {
    if (this.state.idSelected !== "" && !this.state.planned.includes(this.state.idSelected)) {

      let idToImage = this.state.idToImage;
      let idToLocation = this.state.idToLocation;
      var tmp = JSON.stringify(this.state.location);
      idToImage[this.state.idSelected] = this.state.imageLink
      idToLocation[this.state.idSelected] = JSON.parse(tmp)

      this.setState({
        recsLoaded: true,
        idToImage: idToImage,
        idToLocation: idToLocation,
      });

      this.state.planned.push(this.state.idSelected)

    } else if (this.state.idSelected === "") {
      alert("Please select an(other) attraction");
    } else {
      alert("Attraction already selected");
    }
    this.setState({idSelected: ""})
    this.setState({nameSelected: ""})
  }

  handleRemove = (event) => {
    this.setState({idDeleted: event.target.id}, () => {
      delete this.state.idToLocation[event.target.id]
      this.setState({planned: this.state.planned.filter(function(item) { 
        return item !== event.target.id})}, () => {
      });
    });
    
  }

  handleFinal = () => {
    var data = Object.values(this.state.idToLocation)
    var ids = Object.values(this.state.idToName)
    localStorage.setItem("coordinates_list", JSON.stringify(data));
    localStorage.setItem("ids", JSON.stringify(ids));
  }

  
  render() {
    const details = this.state.description
    const planned = this.state.planned
    const idToName = this.state.idToName
    const idToImage = this.state.idToImage

    if (!this.state.attractionsLoaded) {
      return <h1>Loading</h1>
    } else {
      const attractions = this.state.attractions.attractions
      return(
        
        <div className="wrapper">
        <h2 style={{color:"white", background:"steelblue"}}>Please Select Attrations</h2>
        <div className="box_main">
          <div className="cards">
            <div className="cards__container">
              <div className="cazrds__wrapper"> 
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 2 && index >= 0)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}
                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 5 && index >= 3)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 8 && index >= 6)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 11 && index >= 9)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 14 && index >= 12)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 17 && index >= 15)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 20 && index >= 18)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 23 && index >= 21)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 26 && index >= 24)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 29 && index >= 27)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 32 && index >= 30)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 35 && index >= 33)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 38 && index >= 36)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 41 && index >= 39)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 44 && index >= 42)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 47 && index >= 45)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 50 && index >= 48)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 53 && index >= 51)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 56 && index >= 54)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
                <ul className="cards__items"> {
                  attractions.filter((item, index) => (index <= 59 && index >= 57)).map((filteredItem) => 
                  <Attraction
                    src={filteredItem.photo_large}
                    text={filteredItem.name}
                    path="/plan"
                    onClick={this.handleSelect}
                    id={filteredItem.id}
                    key={filteredItem.id}

                  />)
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="side">
        <h4>Information</h4>
        <div className="box_info">
              <li><span className="bolded">Name: {details["name"]}</span></li>
              <li><span className="bolded">Address: {details["address"]}</span></li>
              <li><span className="bolded">Category: {details["category"]}</span></li>
              <li><span className="bolded">Number of Reviews: {details["num_reviews"]}</span></li>
              <li><span className="bolded">Rating: {details["rating"]}</span></li>
              <li><span className="bolded">Description: {details["description"]}</span></li>
            <br></br>
        </div>
        <div className="add_button">
            <Button
                onClick={this.handleAdd}
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--medium"
                tolink="/plan"
              >
                <h5>Add It!</h5>
            </Button>
        </div>
        <h4>Selected</h4>
        <div className="box_selection">
          <div className="cards__container">
              <div className="cards__wrapper"> 
                <ul className="cards__items"> {
                  planned.map((att) => (
                    <Attraction 
                      src={idToImage[att]}
                      text = {idToName[att]}
                      id={att}
                      path="/plan"
                      onClick={this.handleRemove}
                    />
                    ))
                }      
          </ul>
          </div>
          </div> 
        </div>
        <div className="box3">
          <Button
            onClick={this.handleFinal}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            tolink="/map"
          >
           <h6>Next: Select Hotels</h6>
          </Button>
        </div>
        </div>
    
        </div>
      );
    }
  } 
}

export default Plan;