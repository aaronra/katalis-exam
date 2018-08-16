import React from 'react';

class IcoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {IcoList} = this.props;
    console.log(IcoList);
    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-hover">
            <thead>
            <tr>
              <th>ICO image</th>
              <th>name</th>
              <th>status</th>
              <th>Description</th>
              <th>Start</th>
            </tr>
            </thead>
            <tbody>
            {
              (IcoList) ?
                IcoList.map(item =>
                  <tr>
                    <td><img src={item.img} className="thumbnail"/></td>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>{item.description}</td>
                    <td>{item.date}</td>
                  </tr>
                ) : ''
            }

            </tbody>


          </table>
        </div>
      </div>
    );
  }
}

export default IcoList;
