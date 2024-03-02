import './Botao.css'

const Botao = (props) => {
  return (
    <button >{props.children}
    <span className='box'>
      criar card
    </span>
    </button>
  )
}

export default Botao