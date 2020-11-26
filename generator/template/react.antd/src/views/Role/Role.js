import './Role.css';

function Role() {
  let arr = new Array(100).fill('Role');
  return (
    <div className="role-page">
      Role Page
      {arr.map((value, i) => (
        <div key={i}>
          {value}-{i}
        </div>
      ))}
    </div>
  );
}

export default Role;
