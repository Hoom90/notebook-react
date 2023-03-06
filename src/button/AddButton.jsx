

export default function AddButton(props) {
  const handleNewItem = (form) => {
    form.preventDefault();
    const title = form.target.title.value;
    const description = form.target.description.value;

    props.handleNew(title, description);

    form.target.title.value = "";
    form.target.description.value = "";
  };

  return (
    <li className="p-1">
      <form className="bg-yellow-300 p-3" onSubmit={handleNewItem}>
        <textarea
          className="overflow-hidden w-full bg-transparent placeholder-gray-500 resize-none focus:outline-none h-7"
          maxLength={38}
          name="title"
          placeholder="new title"
        />
        <hr />
        <textarea
          className="overflow-hidden w-full bg-transparent placeholder-gray-500 resize-none focus:outline-none h-32 mt-1"
          maxLength={185}
          name="description"
          placeholder="new text"
        />
        <input className="cursor-pointer" type="submit" value="save" />
      </form>
    </li>
  );
}
