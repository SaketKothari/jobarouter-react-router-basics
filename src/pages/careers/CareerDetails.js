import { useParams } from 'react-router-dom';

export default function CareerDetails() {
  // access route parameter id using useParams hook
  const { id } = useParams();

  return (
    <div className="career-detils">
      <h2>{id}</h2>
    </div>
  );
}
