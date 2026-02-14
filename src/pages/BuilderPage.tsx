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
      <tbody />
    </table>
  )
}
export default BuilderPage;