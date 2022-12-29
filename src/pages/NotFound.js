import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        dignissimos modi aspernatur consequuntur error voluptatem illum pariatur
        et quasi tenetur Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Atque, nesciunt.
      </p>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
}
