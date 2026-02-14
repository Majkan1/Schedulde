import '../App.css'

function BuilderPage() {
  return (
    <div>
      <Table />
    </div>
  )
}

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Poniedziałek</th>
          <th>Wtorek</th>
          <th>Środa</th>
          <th>Czwartek</th>
          <th>Piątek</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7:30</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
                <tr>
          <td>8:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
                <tr>
          <td>9:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
                <tr>
          <td>10:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
                <tr>
          <td>11:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
export default BuilderPage;