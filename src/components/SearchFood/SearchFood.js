import { Divider, Input, Col } from 'antd';

function SearchFood({searchWord, setSearchWord}) {

  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  }

  return (
    <Col>
      <Divider>Search</Divider>
      <Input
        placeholder="input search text"
        onChange={handleSearchWord}
        value={searchWord}
        style={{
          width: 300,
        }}
      />
    </Col>
  );

}

export default SearchFood;