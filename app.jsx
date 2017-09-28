//let Asientos = [];//array de pasajeros
const RowTable = (props) => {
  // for (let row of props) {
  //   let filterAsientos = row.filter((arr => {
  //     if(arr.split(" ") == Asientos)
  //   });
  //   newSeats.push(filterArray);//a nuestro array pusheamos filterarray
  // }
  const _tds = props.items.map((item, index) => <td key={index}> {item} </td>);//en la var _td guarda el array mapeado los cuales se van agregando a la etiqueta td
  const _pasajeos = props
  return (// retornamos en un tr la var _td que emos mapeado 
    <tr> 
      {_tds}
    </tr>
  )
}
const RTable = ({ seats }) => {//componente que crea la tabla
  return (// ponemos una etiqueta table
    <table border="3" className="table table-bordered">
      <RowTable items={seats[0]} />{/* mandamos a rowtable el las filas 0123 todo se retorna */}
      <RowTable items={seats[1]} />
    </table>
  );
}

function listPairs(seats, pasajero) { // recibe el seats - filas 
  console.log("pasajero: ", pasajero);
  console.log("seats", seats);

  // for (let i in pasajero) {// row guarda el valor  de seats q itera
  //   Asientos.push(pasajero[i].numAsiento);//a nuestro array pusheamos filterarray
  // }
  // console.log("asientos", Asientos);

  return pasajero.map((value, index) => {
    return (
      <div className="listas">
        <li key={index}>
          <p><strong>nombre: </strong>{value.nombre} </p>
          <p><strong>apellido: </strong>{value.apellido} </p>
          <p><strong>dni: </strong>{value.dni} </p>
          <p><strong>asiento: </strong>{value.numAsiento} </p>
        </li>
      </div>
    );
  });
}

const App = ({ title, seats, pasajero }) => {// componente add que recibe dos parametros
  return ( // realiza un return

    <div>
      <div>
        <h1> {title} </h1>
      </div>
      <div>
        <RTable seats={seats} />
      </div>
      <h3>Lista de Asientos Reservados</h3>
      <div>
        <ol>
          {listPairs(seats, pasajero)}
        </ol>
      </div>
    </div>
  );
}

let seats = [ // array donde creamos las filas de nuestra tabla con su valor 
  [2, 4, 6, 8, 10, 12],
  [1, 3, 5, 7, 9, 11],
]
let pasajero = [
  {
    nombre: "juan",
    apellido: "perez",
    dni: "12345678",
    numAsiento: 10
  },
  {
    nombre: "lola",
    apellido: "perez",
    dni: "67845603",
    numAsiento: 7
  },
  {
    nombre: "rober",
    apellido: "garcia",
    dni: "67034628",
    numAsiento: 1
  },
  {
    nombre: "jhon",
    apellido: "flores",
    dni: "09264170",
    numAsiento: 3
  },
  {
    nombre: "maria",
    apellido: "perez",
    dni: "67392727",
    numAsiento: 5
  }
]

ReactDOM.render( // funcion q inicializa
  <App title={'Reserva de Pasajes'} seats={seats} pasajero={pasajero} />, // componente app manda dos parametros title , seats * es un componente porque posee el props
  document.getElementById("root")
);
