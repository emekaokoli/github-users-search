import '../styles/link.styles.css';

const Link = ({url, title}) => {
  return (
    <a to={url} target='_blank' rel='noreferrer' className='link'>
      {title}
    </a>
  );
};
export default Link;