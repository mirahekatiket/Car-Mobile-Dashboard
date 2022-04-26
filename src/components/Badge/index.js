import classNames from 'classnames';
import './index.scss';

function Badge({text, background, color}){
  return (<p className={classNames("badge", background , color)}>{text}</p>)
}

export default Badge;