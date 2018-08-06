import * as React from 'react';
import axios from 'axios';
import { Place } from '../interfaces/Place';

interface PropsTypes {

}

interface StateTypes {
  doc: Place[] | null,
  isFetching: boolean
}

const defaultState: StateTypes = {
  doc: null,
  isFetching: true
}

class Datatable extends React.Component<PropsTypes, StateTypes>   {
  constructor(props: PropsTypes) {
    super(props)

    this.state = defaultState

    this.fetch = this.fetch.bind(this)
    this.handleErrorResponse = this.handleErrorResponse.bind(this)
    this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
  }

  fetch() {
    axios.request(
      {
        method: 'get',
        url: 'http://localhost:3003/places/',
        headers:
          { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJrZmpqa2pqc2QiLCJsYXN0TmFtZSI6ImxhIGJvbG9zc2UiLCJlbWFpbCI6ImZsYWJvbG9zcXNkcXNkcXNlQGdtYWlsLmNvbSIsImFnZSI6IjM0MzVFNVk2NTQiLCJpYXQiOjE1MzM0Nzc2NjB9.uT-bTWIkqWPN2VNT_t7yx5ojlC9W43E0IrFL-xLn3n0' }
      })
      .then((response) =>
        this.handleSuccessResponse(response.data)
      )
      .catch((error) =>
        this.handleErrorResponse(error)
      );
  }

  handleErrorResponse(error: {}) {
    console.log(error);
    this.setState({ isFetching: false })
  }

  handleSuccessResponse(data: {}) {
    console.log(data)
    this.setState({ doc: data as Place[], isFetching: false })
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { doc, isFetching } = this.state

    return (
      isFetching ?
        'Loading'
        :
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {doc ? doc.map((place: Place) => (
              <tr key={place._id}>
                <th scope="row">{place._id}</th>
                <td>{place.name}</td>
              </tr>
            ))
              :
              <tr />
            }
          </tbody>
        </table>
    )
  }
}
export default Datatable;
