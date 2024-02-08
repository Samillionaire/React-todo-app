function CurrentDate() {
  let time = new Date();
  return (
    <p>
      the current time is : {time.toLocaleDateString()}- {""}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentDate;
