const CITIES = [
  { code: 'SCFA', name: "Antofagasta" },
  { code: 'SCAR', name: "Arica" },
  { code: 'SCBA', name: "Balmaceda" },
  { code: 'SCCF', name: "Calama" },
  { code: 'SCAT', name: "Caldera" },
  { code: 'SCCH', name: "Chillán" },
  { code: 'SCIE', name: "Concepción" },
  { code: 'SCCY', name: "Coyhaique" },
  { code: 'SCIC', name: "Curicó" },
  { code: 'SCFT', name: "Futaleufú" },
  { code: 'SCDA', name: "Iquique" },
  { code: 'SCIP', name: "Isla de Pascua" },
  { code: 'SCSE', name: "La Serena/Coquimbo" },
  { code: 'SCMK', name: "Melinka" },
  { code: 'SCJO', name: "Osorno" },
  { code: 'SCTE', name: "Puerto Montt" },
  { code: 'SCCI', name: "Punta Arenas" },
  { code: 'SCON', name: "Quellón" },
  { code: 'SCSN', name: "San Antonio/Cartagena" },
  { code: 'SCQN', name: "Santiago Centro" },
  { code: 'SCEL', name: "Santiago Poniente" },
  { code: 'SCQP', name: "Temuco" },
  { code: 'SCVD', name: "Valdivia" },
  { code: 'SCVM', name: "Viña del Mar/Valparaíso" },
  { code: 'SCIR', name: "Juan Fernández" },
  { code: "SCRM", name: "Antártica" },
  { code: "SCGZ", name: "Puerto Williams" },
  { code: "SCFM", name: "Porvenir" },
  { code: "SCRG", name: "Rancagua" },
  { code: "SCGE", name: "Loas Angeles" },
  { code: "SCTN", name: "Chaitén" },
  { code: "SCCC", name: "Chile Chico" },
  { code: "SCHR", name: "Cochrane" },
  { code: "SCNT", name: "Puerto Natales" }
]

const Select = ({ value, setValue }) => {
  return (
    <>
      <label htmlFor="cities">Selecciona una ciudad:</label>
      <select name="cities" id="cities" onChange={e => setValue(e.target.value)} value={value}>
        {CITIES.map((city, index) => <option key={index} value={city.code}>{city.name}</option>)}
      </select>
    </>
  )
}

export default Select;
