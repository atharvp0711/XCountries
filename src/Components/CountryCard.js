const CountryCard = ({flagURL , name}) => {
    return(
        <div
        style = {
            {
                display : "flex" ,
                flexDirection : "column",
                alignItems : "center",
                justifyContent : "center" ,
                textAlign: "center",
                border : "1px solid black" ,
                borderRadius : "8px",
                padding : "10px",
                height : "250px",
                width : "250px"
            }
        }>
            <img src = {flagURL} alt ={`Flag of ${name}`} style={ 
                {
                    width: "100px",
                    height : "100px",
                }
            } />
            <h2> {name} </h2> 
        </div>
    );
}

export default CountryCard ; 