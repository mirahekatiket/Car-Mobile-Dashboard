import classNames from 'classnames';
import './index.scss';


function Button({label, primary=false, secondary=false, danger=false, onClick, block, className }){
  return (<div className={classNames('button min-w-[120px]', {...className, 'primary': primary, 'secondary': secondary, 'danger': danger, 'block': block })} onClick={onClick}>{label}</div>)
}

export default Button;