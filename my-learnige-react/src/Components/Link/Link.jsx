import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className='px-5 hover:bg-red-400'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
export default Link;

Link.propTypes ={
    route:PropTypes.object
}