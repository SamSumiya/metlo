import './Group.css';

const Group = ({ selectedGroup, setSelectedGroup }) => {

  const handleAddTag = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length > 0) {
        setSelectedGroup([...selectedGroup, event.target.value]);
        event.target.value = '';
      }
    }
  };

  const handleRemoveTag = (tag) => {
    const filteredTags = selectedGroup.filter((t) => t !== tag);
    setSelectedGroup(filteredTags);
  };

  return (
    <>
      <div className="tag-container">
        {selectedGroup.map((tag, index) => {
          return (
            <span className="tag" key={index}>
              {tag}{' '}
              <span
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                {' '}
                X{' '}
              </span>
            </span>
          );
        })}
        <input type="text" onKeyDown={(event) => handleAddTag(event)} />
      </div>
    </>
  );
};

export default Group;
