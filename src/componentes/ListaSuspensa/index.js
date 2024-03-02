import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="ListaSuspensa">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.aoAlterado(e.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value={""}></option>
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}{" "}
        {/*para cada item que recebe por parâmetro a gente recebe uma <option value=""></option> */}
      </select>
    </div>
  );
};

export default ListaSuspensa;
