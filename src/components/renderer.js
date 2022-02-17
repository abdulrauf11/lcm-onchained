function Renderer() {
  return (
    <div>
      <textarea
        placeholder='Paste your svg here...'
        rows={10}
        cols={100}
      ></textarea>

      <div>
        <img src='' />
      </div>
    </div>
  );
}

export default Renderer;
