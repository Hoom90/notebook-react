

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
      <form className="bg-gray-300 p-1 break-all m-0" onSubmit={handleNewItem} >
        <textarea
          className="overflow-hidden w-full bg-transparent placeholder-gray-500 resize-none focus:outline-none h-7 text-lg font-bold"
          maxLength={38}
          name="title"
          placeholder="new title"
        />
        <hr />
        <textarea
          className=" placeholder-gray-500 h-32 overflow-hidden w-full bg-transparent resize-none focus:outline-none"
          maxLength={185}
          name="description"
          placeholder="new text"
        />
        <hr />
        <input className="cursor-pointer" type="submit" value="save" />
      </form>
    </li>
  );
}
