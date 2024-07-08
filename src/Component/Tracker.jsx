
function Tracker(props) {
  return (
    <div className="flex justify-around w-1/3 border-2 bg-green-250 dark:bg-green-350 p-3 rounded-lg">
      <p>{props.content}</p>
     {props.filter}
    </div>
  );
}

export default Tracker;
