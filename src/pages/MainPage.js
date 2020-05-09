import React from 'react'


function type2img(type){
    return type+".svg"
}

//komponent klasowy
class MainPage extends React.Component{
   
    state = {
        disks: [{id: 1, price:3, type:"hdd", usage:8, space:10}, 
        {id: 3, price:12, type:"hdd", usage:4, space:16}, 
        {id: 5, price:12, type:"ssd", usage:0.2, space:12}],
    }


  delete = (id) => {
    const disks = this.state.disks;
    for (let i = 0; i < disks.length; i++) {
      if (disks[i].id === id) {
        disks.splice(i, 1);
      }
    }
    this.setState({
      disks,
    });
  }

  addDrive = () => {

  }

    render() {
      const bar = {
        width: '400px',
        height: 5,
        position: 'relative',
        border: '1px solid black'
      };

      const fill = {
        height: '100%',
        background: 'black'
      };

        return(
            <div>
            <h1>Zarzadzanie dyskami zdalnymi</h1>
            <button onClick={this.addDrive}>Dodaj dysk</button>
            <div>
                {this.state.disks.map((value, index) => {
                    return (
                        <div style={{display:'flex'}}>
                            <img style={{border:"solid blue 2px"}} src={type2img(value.type)} height={50}/>
                            <div>
                              <div style={{background:"#E0FFFA", flexGrow:8}}>
                                <b>price:</b> {value.price}
                                <b>type:</b> {value.type}
                                <b>usage:</b> {value.usage}
                                <b>space:</b> {value.space}
                              </div>
                              <div style={bar}>
                                <div style={{...fill, width: `${value.usage/value.space*100}%`}}>
                                </div>
                              </div>
                            <img style={{flexGrow:2}} src="trash.svg" onclick={() => this.delete(value.id)} height={50}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        );
    }
     
}



export default MainPage