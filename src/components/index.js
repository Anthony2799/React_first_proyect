import React, {useState ,Component} from "react";

//podemos utilizar estados (componente statefull)
const Button = () =>
    {
        //podemos importarlo aqui o desde arriba;
        const [name, setName] = React.useState('Hola mundo');
        return (
        <div>
            <h1>{name} </h1>
        </div>
        );
    }

// son muy populares, estos no tienen estados (steiles)
const Button2 = () =>(
                        <div>
                            <h1>{name} </h1>
                        </div>
                    )

class App extends Component{
    
    render(){
        <div>
            <h1>{name} </h1>
        </div>

    }
}
//
/*
HOC:

function ComponentWrapper(WrapperComponent){
    class Wrapper extends Component{
        render(){
            return <WrapperComponent{... this.props} />
        }
    }
    return Wrapper;
}
*/

/*

*/