import { SearchOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useState } from 'react';

const Search = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <SearchOutlined style={{fontSize: '50px'}} onClick={() => setVisible(true)}/>
      {/* <Button type="primary" >
        Open Modal of 1000px width
      </Button> */}
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
        header={null}
      >
        
      </Modal>
    </>
  );
};

export default Search;