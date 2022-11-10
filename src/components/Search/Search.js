import { useState } from "react";
import { Divider, Input } from 'antd';

function Search(props) {
    const [searchWord, setSearchWord] = useState("");

    const handleSearchWord = (e) => {
        // e.preventDefault();
        setSearchWord(e.target.value);
    }

    props.searchWord(searchWord);

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchWord} type="text" onChange={handleSearchWord} placeholder="Escreva o nome da comida" />
    </>
  );
}

export default Search;