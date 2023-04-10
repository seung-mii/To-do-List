import React from 'react';
import './pagination.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  pageClick = (data) => {
    // console.log("페이지 클릭!" + data);
    this.props.setCurrentPage(data);
  }

  render() {
    let pageNumbers = [];
    const { total, postPerPage } = this.props;
    const endpage = Math.ceil((total) / (postPerPage));

    for (var i = 1; i <= endpage; i++) {
      pageNumbers.push(i);
    }
    // console.log(pageNumbers); // [1, 2, 3, 4]

    const result = pageNumbers.map(
      (data) => (<span id='page' onClick={() => this.pageClick(data)}>{data}</span>)
    )

    return (
      <div>
        {/* <div>페이지당 갯수 : {this.props.postPerPage}</div>
        <div>총 갯수 : {this.props.total}</div> */}
        {result}
      </div>
    )
  }
}

export default Pagination;